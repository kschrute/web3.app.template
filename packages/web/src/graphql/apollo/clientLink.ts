'use client'

import { HttpLink, concat, split } from '@apollo/client'
import { GraphQLWsLink } from '@apollo/client/link/subscriptions'
import { getMainDefinition } from '@apollo/client/utilities'
import { createClient } from 'graphql-ws'
import config from '../../../config'
import { authMiddleware } from './authMiddleware'

export const createClientLink = () => {
  const httpLink = new HttpLink({
    uri: config.gqlUrl,
    credentials: 'same-origin',
  })

  const wsLink = new GraphQLWsLink(
    createClient({
      url: config.gqlWsUrl,
      connectionParams: {
        authToken: `Bearer ${localStorage.getItem('token')}`,
      },
    }),
  )

  // The split function takes three parameters:
  //
  // * A function that's called for each operation to execute
  // * The Link to use for an operation if the function returns a "truthy" value
  // * The Link to use for an operation if the function returns a "falsy" value
  return split(
    ({ query }) => {
      const definition = getMainDefinition(query)
      return definition.kind === 'OperationDefinition' && definition.operation === 'subscription'
    },
    concat(authMiddleware, wsLink),
    concat(authMiddleware, httpLink),
  )
}
