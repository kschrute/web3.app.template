import { builder } from '../../builder'

builder.queryField('projects', (t) =>
  t.prismaConnection({
    type: 'Project',
    authScopes: {
      user: true,
    },
    cursor: 'id',
    defaultSize: 25,
    maxSize: 1_000,
    totalCount: (connection, args, context, info) => context.prisma.project.count({
      where: {
        userAddress: context.currentUser!.address
      }
    }),
    resolve: (query, parent, args, context, info) => context.prisma.project.findMany({
      ...query,
      where: {
        userAddress: context.currentUser!.address
      },
      orderBy: { id: 'desc' },
    }),
  }),
)

