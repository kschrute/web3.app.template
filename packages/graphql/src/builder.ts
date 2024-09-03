import { GraphQLError } from 'graphql'
import SchemaBuilder from '@pothos/core'
import PrismaPlugin from '@pothos/plugin-prisma'
import RelayPlugin from '@pothos/plugin-relay'
import ScopeAuthPlugin from '@pothos/plugin-scope-auth'
import { DateTimeResolver, BigIntResolver } from 'graphql-scalars'
import { db } from './db'
import { Prisma } from '../prisma/client'
import { GraphQLContext } from './context'
import type PrismaTypes from '../prisma/generated'

export const builder = new SchemaBuilder<{
  DefaultFieldNullability: false
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
    BigInt: {
      Input: bigint
      Output: bigint
    }
    Decimal: {
      Input: Prisma.Decimal
      Output: Prisma.Decimal
    }
  }
}>({
  defaultFieldNullability: false,
  plugins: [ScopeAuthPlugin, RelayPlugin, PrismaPlugin],
  scopeAuth: {
    // Recommended when using subscriptions
    // when this is not set, auth checks are run when event is resolved rather than when the subscription is created
    authorizeOnSubscribe: true,
    unauthorizedError: (parent, context, info, result) => new GraphQLError(`Not authorized`),
    authScopes: (context) => ({
      user: !!context.currentUser,
    })
  },
  relay: {
    clientMutationId: 'omit',
    cursorType: 'String',

    // defaultSize: 5, // defaults to 20
    // maxSize: 1000, // defaults to 100
  },
  prisma: {
    client: db,
    // Because the prisma client is loaded dynamically, we need to explicitly provide the some information about the prisma schema
    dmmf: Prisma.dmmf,
    // use where clause from prismaRelatedConnection for totalCount (will true by default in next major version)
    filterConnectionTotalCount: true,
  },
})

builder.queryType({})
builder.mutationType({})
builder.subscriptionType({})

builder.addScalarType('DateTime', DateTimeResolver, {})
builder.addScalarType('BigInt', BigIntResolver, {})
builder.scalarType('Decimal', {
  serialize: (value) => value.toString(),
  parseValue: (value) => {
    if (typeof value !== 'string') {
      throw new TypeError('Decimal must be a string')
    }

    return new Prisma.Decimal(value)
  },
})

