import { db } from '.'
import { Event, Prisma } from '../../prisma/client'

const entity = 'event'
export type Entity = Event
export type CreateInput = Prisma.XOR<Prisma.EventUncheckedCreateInput, Prisma.EventCreateInput>
export type WhereInput = Prisma.EventWhereInput
type UpdateInput = Prisma.XOR<Prisma.EventUncheckedUpdateInput, Prisma.EventUpdateInput>
type FindManyArgs = Prisma.EventFindManyArgs
type UpdateManyArgs = Prisma.EventUpdateManyArgs

export const findById = (id: string) => db[entity].findUnique({ where: { id } })

export const findUnique = (blockHash: string, transactionHash: string, logIndex: number) =>
  db[entity].findUnique({
    where: { blockHash_transactionHash_logIndex: { blockHash, transactionHash, logIndex } },
  })

export const findMany = (args?: FindManyArgs) => db[entity].findMany(args)

export const create = (data: CreateInput) => db[entity].create({ data })

export const upsert = (id: string, create: CreateInput, update: UpdateInput) =>
  db[entity].upsert({
    where: { id },
    create,
    update,
  })

export const update = ({ id }: Entity | { id: string }, data: UpdateInput) =>
  db[entity].update({
    data,
    where: { id },
  })

export const updateMany = (where: UpdateManyArgs['where'], data: UpdateManyArgs['data']) =>
  db[entity].updateMany({
    where,
    data,
  })

export const remove = ({ id }: Entity | { id: string }) => db[entity].delete({ where: { id } })
