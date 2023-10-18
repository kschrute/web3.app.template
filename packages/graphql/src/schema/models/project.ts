import { builder } from '../../builder'

export const ProjectObject = builder.prismaObject('Project', {
  fields: (t) => ({
    id: t.exposeInt('id'),
    title: t.exposeString('title'),
    requestCount: t.exposeInt('requestCount'),
    isActive: t.exposeBoolean('isActive'),
    createdAt: t.expose('createdAt', { type: 'DateTime' }),
    updatedAt: t.expose('updatedAt', { type: 'DateTime' }),
    user: t.relation('user'),
  }),
})
