import { builder } from '../../builder'

export const UserObject = builder.prismaObject('User', {
  fields: (t) => ({
    address: t.exposeString('address'),
    challenge: t.exposeString('challenge'),
    isAuthenticated: t.exposeBoolean('isAuthenticated'),
    createdAt: t.expose('createdAt', { type: 'DateTime' }),
    projects: t.relation('projects'),
  }),
})
