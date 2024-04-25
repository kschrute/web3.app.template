import { builder } from '../../builder'
import { devDelay } from '../../utils'
import { SortOrder } from '../types'
import { db } from '../../db'

export const OrderBy = builder.inputType('OrderBy', {
  fields: (t) => ({
    createdAt: t.field({ type: SortOrder }),
  }),
})

builder.queryField('projects', (t) =>
  t.prismaConnection({
    type: 'Project',
    authScopes: {
      user: true,
    },
    cursor: 'id',
    defaultSize: 25,
    maxSize: 1_000,
    args: {
      orderBy: t.arg({
        type: OrderBy,
        required: false,
      }),
    },
    totalCount: (connection, args, context, info) =>
      context.prisma.project.count({
        where: {
          userAddress: context.currentUser!.address,
        },
      }),
    resolve: async (query, parent, args, context, info) => {
      await devDelay()
      return db.project.findMany({
        ...query,
        where: {
          userAddress: context.currentUser!.address,
        },
        orderBy: args.orderBy ? Object.entries(args.orderBy).map(([k, v]) => ({ [k]: v })) : [{ id: 'desc' }],
      })
    },
  }),
)
