import { randomUUID } from 'crypto'
import { getAddress } from 'viem'
import { db } from '.'
import { User, Prisma } from '../../prisma/client'

const entity = 'user'
export type Entity = User
export type CreateInput = Prisma.XOR<Prisma.UserUncheckedCreateInput, Prisma.UserCreateInput>
export type WhereInput = Prisma.UserWhereInput
type UpdateInput = Prisma.XOR<Prisma.UserUncheckedUpdateInput, Prisma.UserUpdateInput>
type FindManyArgs = Prisma.UserFindManyArgs
type UpdateManyArgs = Prisma.UserUpdateManyArgs

export const findUnique = (address: string) => db[entity].findUnique({ where: { address: getAddress(address) } })

export const findMany = (args?: FindManyArgs) => db[entity].findMany(args)

export const create = (data: CreateInput) => db[entity].create({ data })

export const upsert = (address: string, create: CreateInput, update: UpdateInput) =>
  db[entity].upsert({
    where: { address },
    create,
    update,
  })

export const update = ({ address }: Entity | { address: string }, data: UpdateInput) =>
  db[entity].update({
    data,
    where: { address },
  })

export const updateMany = (where: UpdateManyArgs['where'], data: UpdateManyArgs['data']) =>
  db[entity].updateMany({
    where,
    data,
  })

export const remove = ({ address }: Entity | { address: string }) => db[entity].delete({ where: { address } })

export const findUniqueOrCreate = async (address: string, query = {}) => {
  const user = await db.user.findUnique({ where: { address: getAddress(address) } })

  if (user) {
    return user
  }

  const nonce = randomUUID()
  const challenge = `Welcome!\n\nClick Sign to agree to the Terms of Service: https://example.com/terms-of-service.html\n\nWallet:\n${address}\n\nNonce:\n${nonce}`
  return db.user.create({
    ...query,
    data: {
      address: getAddress(address),
      nonce,
      challenge,
      isAuthenticated: false,
      projects: {
        create: {
          title: 'Default project',
        },
      },
    },
  })
}
