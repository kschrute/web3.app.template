import { Prisma, PrismaClient } from '../../prisma/client'
export * as EventRepo from './EventRepo'
export * as UserRepo from './UserRepo'

const clientOptions =
  process.env.NODE_ENV !== 'production' ? { log: ['info', 'query', 'warn', 'error'] } : { log: ['error'] }

export const db = new PrismaClient(clientOptions as Prisma.PrismaClientOptions)
