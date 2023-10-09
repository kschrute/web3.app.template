import { map, pipe, Repeater } from 'graphql-yoga'
import { builder } from '../builder'
import { UserRepo } from '../db'
import { publishUserUpdates, subscribeUserUpdates } from '../pubSub'

export class Requests {
  count: number

  constructor(count: number) {
    this.count = count
  }
}

builder.objectType(Requests, {
  name: 'Requests',
  fields: (t) => ({
    count: t.exposeInt('count'),
  }),
})

builder.subscriptionFields((t) => ({
  requests: t.field({
    type: Requests,
    subscribe: (_, args, context) => {
      if (context.currentUser === null) {
        throw new Error('Unauthenticated!')
      }

      return pipe(
        Repeater.merge([undefined, subscribeUserUpdates(context.currentUser.address)]),
        map((payload) => (payload ? payload : context.currentUser?.requestCount)),
      )
    },
    resolve: (payload) => {
      return new Requests(payload || 0)
    },
  }),
}))

builder.mutationField('request', (t) =>
  t.field({
    type: Requests,
    resolve: async (query, root, context) => {
      if (context.currentUser === null) {
        throw new Error('Unauthenticated!')
      }

      const user = await UserRepo.update(context.currentUser, {
        requestCount: {
          increment: 1,
        },
      })

      publishUserUpdates(user.address, user.requestCount)

      return new Requests(user.requestCount)
    },
  }),
)
