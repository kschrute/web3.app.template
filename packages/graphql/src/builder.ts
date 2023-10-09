import SchemaBuilder from '@pothos/core'
import PrismaPlugin from '@pothos/plugin-prisma'
import { DateTimeResolver } from 'graphql-scalars'
import { db } from './db'
import { GraphQLContext } from './context'
import type PrismaTypes from '../prisma/generated'

export const builder = new SchemaBuilder<{
  PrismaTypes: PrismaTypes
  Context: GraphQLContext
  Scalars: {
    DateTime: {
      Input: Date
      Output: Date
    }
  }
}>({
  plugins: [PrismaPlugin],
  prisma: {
    client: db,
  },
})

builder.queryType({})
builder.mutationType({})
builder.subscriptionType({})

builder.addScalarType('DateTime', DateTimeResolver, {})
