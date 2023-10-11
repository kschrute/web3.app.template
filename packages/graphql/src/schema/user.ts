import { builder } from '../builder'
import { db, UserRepo } from '../db'
import { ProjectCreateInput } from './project'
import config from '../../config'
import { sign } from 'jsonwebtoken'
import { queryFromInfo } from '@pothos/plugin-prisma'
import { getAddress, verifyMessage } from 'viem'
import { User } from '../../prisma/client'

const User = builder.prismaObject('User', {
  fields: (t) => ({
    address: t.exposeString('address'),
    challenge: t.exposeString('challenge'),
    isAuthenticated: t.exposeBoolean('isAuthenticated'),
    createdAt: t.expose('createdAt', { type: 'DateTime' }),
    projects: t.relation('projects'),
  }),
})

const UserAuth = builder
  .objectRef<{
    authenticated: boolean
    challenge?: string | null
  }>('UserAuth')
  .implement({
    fields: (t) => ({
      authenticated: t.boolean({ resolve: (result) => result.authenticated || false }),
      challenge: t.string({ nullable: true, resolve: (result) => result.challenge }),
    }),
  })

const UserAuthInput = builder.inputType('UserAuthInput', {
  fields: (t) => ({
    address: t.string({ required: true }),
  }),
})

const UserSignIn = builder
  .objectRef<{
    authenticated?: boolean
    token?: string | null
    user?: User | null
  }>('UserSignIn')
  .implement({
    fields: (t) => ({
      authenticated: t.boolean({ resolve: (result) => result.authenticated || false }),
      token: t.string({ nullable: true, resolve: (result) => result.token }),
      user: t.field({ type: User, nullable: true, resolve: (result) => result.user }),
    }),
  })

const UserSignInInput = builder.inputType('UserSignInInput', {
  fields: (t) => ({
    address: t.string({ required: true }),
    signature: t.string({ required: true }),
    projects: t.field({ type: [ProjectCreateInput] }),
  }),
})

builder.queryFields((t) => ({
  auth: t.field({
    type: UserAuth,
    args: {
      data: t.arg({
        type: UserAuthInput,
        required: true,
      }),
    },
    resolve: async (parent, { data }, context) => {
      const { address } = data
      const { currentUser } = context

      if (currentUser && currentUser.address === getAddress(address)) {
        return {
          authenticated: true,
          user: currentUser,
        }
      }

      const user = await UserRepo.findUniqueOrCreate(address)

      return { authenticated: false, challenge: user.challenge }
    },
  }),

  me: t.prismaField({
    type: 'User',
    resolve: async (query, root, args, context, info) => {
      if (context.currentUser === null) {
        throw new Error('Unauthenticated!')
      }

      return db.user.findUniqueOrThrow({
        // the `query` argument will add in `include`s or `select`s to
        // resolve as much of the request in a single query as possible
        ...query,
        where: { address: context.currentUser.address },
      })
    },
  }),

  user: t.prismaField({
    type: 'User',
    nullable: true,
    args: {
      address: t.arg.string({ required: true }),
    },
    resolve: async (query, root, args, context, info) => {
      const { currentUser } = context
      const { address } = args
      if (currentUser && currentUser.address === getAddress(address)) {
        return currentUser
      } else {
        return await UserRepo.findUniqueOrCreate(
          address,
          queryFromInfo({
            context,
            info,
            // nested path where the selections for this type can be found
            path: ['user'],
          }),
        )
      }
    },
  }),

  users: t.prismaField({
    type: ['User'],
    resolve: (query) => db.user.findMany({ ...query }),
  }),
}))

builder.mutationFields((t) => ({
  signin: t.field({
    type: UserSignIn,
    args: {
      data: t.arg({
        type: UserSignInInput,
        required: true,
      }),
    },
    resolve: async (parent, { data }) => {
      const { address, signature } = data

      let authenticated = false
      let token = null

      const user = await UserRepo.findUnique(address)

      if (!user) {
        return { authenticated: false, token: null, user: null }
      }

      try {
        const isValid = verifyMessage({
          address: getAddress(user.address),
          message: user.challenge,
          signature: signature as `0x${string}`,
        })

        if (!isValid) {
          throw new Error('invalid signature')
        }

        await db.user.update({
          where: { address },
          data: {
            signature,
            isAuthenticated: true,
            ...(!user.authenticatedAt ? { authenticatedAt: new Date() } : {}),
          },
        })

        authenticated = true
      } catch (e) {
        console.log(e)
      }

      token = authenticated ? sign({ userId: user.address }, config.appSecret, { expiresIn: '30 days' }) : null

      return { authenticated, token, user }
    },
  }),
}))
