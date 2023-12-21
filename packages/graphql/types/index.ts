import { PrismaClient } from '../prisma/client'
import * as runtime from '../prisma/client/runtime/library'
export * as ResolverTypes from './resolvers-types'
export * as GraphqlOperations from './graphql-operations'

export type PrismaTx = Omit<PrismaClient, runtime.ITXClientDenyList>
