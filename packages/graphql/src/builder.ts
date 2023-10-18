import SchemaBuilder from '@pothos/core'
import PrismaPlugin from '@pothos/plugin-prisma'
import RelayPlugin from '@pothos/plugin-relay'
import ScopeAuthPlugin from '@pothos/plugin-scope-auth'
import { DateTimeResolver } from 'graphql-scalars'
import { db } from './db'
import { GraphQLContext } from './context'
import { GraphQLError } from 'graphql/error'
import type PrismaTypes from '../prisma/generated'

export const builder = new SchemaBuilder<{
  PrismaTypes: PrismaTypes
  Context: GraphQLContext
  AuthScopes: {
    user: boolean
  }
  Scalars: {
    DateTime: {
      Input: Date
      Output: Date
    }
  }
}>({
  plugins: [ScopeAuthPlugin, RelayPlugin, PrismaPlugin],
  authScopes: async (context) => ({
    user: !!context.currentUser,
  }),
  scopeAuthOptions: {
    // Recommended when using subscriptions
    // when this is not set, auth checks are run when event is resolved rather than when the subscription is created
    authorizeOnSubscribe: true,
    unauthorizedError: (parent, context, info, result) => new GraphQLError(`Not authorized`),
  },
  relayOptions: {
    clientMutationId: 'omit',
    cursorType: 'ID',
    // cursorType: 'String',

    // defaultSize: 5, // defaults to 20
    // maxSize: 1000, // defaults to 100
  },
  prisma: {
    client: db,
  },
})

builder.queryType({})
builder.mutationType({})
builder.subscriptionType({})

builder.addScalarType('DateTime', DateTimeResolver, {})
