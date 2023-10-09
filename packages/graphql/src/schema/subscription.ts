import { map, pipe, Repeater } from 'graphql-yoga'
import { builder } from '../builder'
import { publishRandomUpdates, subscribeRandomUpdates } from '../pubSub'

let randomNumber = 0

export class Value {
  value: number

  constructor(value: number) {
    this.value = value
  }
}

builder.objectType(Value, {
  name: 'Value',
  fields: (t) => ({
    value: t.exposeInt('value'),
  }),
})

builder.subscriptionFields((t) => ({
  countdown: t.field({
    type: Value,
    args: {
      from: t.arg.int({ required: true }),
    },
    // This will return the value on every 1 sec until it reaches 0
    subscribe: async function* (_: any, { from }) {
      for (let i = from; i >= 0; i--) {
        await new Promise((resolve) => setTimeout(resolve, 1000))
        yield { value: i }
      }
    },
    resolve: (payload) => payload,
  }),

  random: t.field({
    type: Value,
    subscribe: (_, args) =>
      pipe(
        Repeater.merge([undefined, subscribeRandomUpdates()]),
        map(() => randomNumber),
      ),
    resolve: (payload) => ({ value: payload }),
  }),
}))

builder.mutationField('broadcast', (t) =>
  t.field({
    type: Value,
    resolve: async (query, root, context) => {
      randomNumber = Math.floor(Math.random() * 100) + 1
      publishRandomUpdates(randomNumber)
      return new Value(1)
    },
  }),
)
