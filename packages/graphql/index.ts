import { db } from './src/db'
import { PrismaClient } from './prisma/client'
import * as runtime from './prisma/client/runtime/library'

export * from './src/db'
export * from './prisma/client'
export type PrismaTx = Omit<PrismaClient, runtime.ITXClientDenyList>

export default db
