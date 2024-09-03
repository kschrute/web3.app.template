import { createServer } from 'http'
import { WebSocketServer } from 'ws'
import { createYoga } from 'graphql-yoga'
import { useServer } from 'graphql-ws/lib/use/ws'
import { createContext } from './context'
import { schema } from './schema'
import config from '../config'

const yoga = createYoga({
  schema,
  context: createContext,
  graphqlEndpoint: '/',
  healthCheckEndpoint: '/live',
  ...(config.environment === 'development'
    ? {
        logging: true,
        maskedErrors: false,
      }
    : {}),
  graphiql:
    config.environment === 'development'
      ? {
          subscriptionsProtocol: 'WS',
        }
      : false,
})

const server = createServer(yoga)
const wsServer = new WebSocketServer({
  server,
  path: yoga.graphqlEndpoint,
})

useServer(
  {
    execute: (args: any) => args.rootValue.execute(args),
    subscribe: (args: any) => args.rootValue.subscribe(args),
    onSubscribe: async (ctx, msg) => {
      const { schema, execute, subscribe, contextFactory, parse, validate } = yoga.getEnveloped({
        ...ctx,
        req: ctx.extra.request,
        socket: ctx.extra.socket,
        params: msg.payload,
      })

      const args = {
        schema,
        operationName: msg.payload.operationName,
        document: parse(msg.payload.query),
        variableValues: msg.payload.variables,
        contextValue: await contextFactory(),
        rootValue: {
          execute,
          subscribe,
        },
      }

      const errors = validate(args.schema, args.document)
      if (errors.length) return errors
      return args
    },
  },
  wsServer,
)

server.listen(4000, () => {
  console.log(`\
🚀 Server ready at: http://127.0.0.1:4000
⭐️ See sample queries: http://pris.ly/e/ts/graphql#using-the-graphql-api
  `)
})
