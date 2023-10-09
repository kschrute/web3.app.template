import config from '../../config'
import { parseAuthToken } from '../utils/parseAuthToken'
import { JwtPayload, verify } from 'jsonwebtoken'
import { RequestContext } from '../context'
import { PrismaClient, User } from '../../prisma/client'

export async function authenticateUser(prisma: PrismaClient, context: RequestContext): Promise<User | null> {
  const token = parseAuthToken(context)
  if (token) {
    try {
      const tokenPayload = verify(token, config.appSecret) as JwtPayload
      const userId = tokenPayload.userId
      return await prisma.user.findUnique({ where: { address: userId } })
    } catch (e) {
      return null
    }
  }

  return null
}
