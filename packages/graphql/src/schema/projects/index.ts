import { builder } from '../../builder'
import { db } from '../../db'
import { SortOrder } from '../types'

export * from './projects'

export const ProjectCreateInput = builder.inputType('ProjectCreateInput', {
  fields: (t) => ({
    title: t.string({ required: true }),
  }),
})

// const SortOrder = builder.enumType('SortOrder', {
//   values: ['asc', 'desc'] as const,
// })

const ProjectOrderByUpdatedAtInput = builder.inputType('ProjectOrderByUpdatedAtInput', {
  fields: (t) => ({
    updatedAt: t.field({
      type: SortOrder,
      required: true,
    }),
  }),
})

builder.queryFields((t) => ({
  projectById: t.prismaField({
    type: 'Project',
    nullable: true,
    args: {
      id: t.arg.int({ required: true }),
    },
    resolve: (query, parent, args) =>
      db.project.findUnique({
        ...query,
        where: { id: args.id },
      }),
  }),
}))

builder.mutationFields((t) => ({
  toggleActiveProject: t.prismaField({
    type: 'Project',
    args: {
      id: t.arg.int({ required: true }),
    },
    resolve: async (query, parent, args) => {
      // Toggling become simpler once this bug is resolved: https://github.com/prisma/prisma/issues/16715
      const project = await db.project.findUnique({
        where: { id: args.id },
        select: { isActive: true },
      })
      return db.project.update({
        ...query,
        where: { id: args.id },
        data: { isActive: !project?.isActive },
      })
    },
  }),
  incrementProjectRequestCount: t.prismaField({
    type: 'Project',
    args: {
      id: t.arg.int({ required: true }),
    },
    resolve: (query, parent, args) => {
      return db.project.update({
        ...query,
        where: { id: args.id },
        data: {
          requestCount: {
            increment: 1,
          },
        },
      })
    },
  }),
  deleteProject: t.prismaField({
    type: 'Project',
    args: {
      id: t.arg.int({ required: true }),
    },
    resolve: (query, parent, args) => {
      return db.project.delete({
        ...query,
        where: { id: args.id },
      })
    },
  }),
}))
