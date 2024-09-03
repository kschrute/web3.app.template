import { SchemaLink } from '@apollo/client/link/schema'
import { buildSchema } from 'graphql/utilities'
import type { ResolverContext } from './types/ResolverContext'

export const createServerLink = (context: ResolverContext = {}) => {
  // eslint-disable-next-line
  const schemaGraphql = require('@app/graphql/schema.graphql')
  const schema = buildSchema(schemaGraphql)

  return new SchemaLink({ schema, context })
}
