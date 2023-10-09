import { YogaInitialContext } from 'graphql-yoga'
import { PrismaClient, User } from '../prisma/client'
import { authenticateUser } from './middleware/authenticateUser'

const prisma = new PrismaClient()

export type GraphQLContext = {
  prisma: PrismaClient
  currentUser: null | User
}

export type RequestContext = YogaInitialContext & {
  connectionParams?: { authToken?: string }
}

export async function createContext(initialContext: RequestContext): Promise<GraphQLContext> {
  return {
    prisma,
    currentUser: await authenticateUser(prisma, initialContext),
  }
}
