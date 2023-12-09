import { JwtPayload, verify } from 'jsonwebtoken'
import config from '../../config'
import { getRequestIp, parseAuthToken } from '../utils'
import { PrismaClient, User } from '../../prisma/client'
import { RequestContext } from '../context'

export async function authenticateUser(prisma: PrismaClient, context: RequestContext): Promise<User | null> {
  const token = parseAuthToken(context)
  if (token) {
    try {
      const jwtPayload = verify(token, config.appSecret) as JwtPayload
      const userId = jwtPayload.userId
      const user = await prisma.user.findUnique({ where: { address: userId } })
      const ip = getRequestIp(context.request)

      if (user && user?.ip !== ip) {
        await prisma.user.update({ data: { ip }, where: { address: user.address } })
      }

      return user
    } catch (e) {
      return null
    }
  }

  return null
}
