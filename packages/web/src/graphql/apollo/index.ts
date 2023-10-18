import { useMemo } from 'react'
import { ApolloClient, DefaultOptions, InMemoryCache, NormalizedCacheObject } from '@apollo/client'
import { createIsomorphicLink } from './createIsomorphicLink'
import { ResolverContext } from './types/ResolverContext'
import config from '../../../config'
import { relayStylePagination } from '@apollo/client/utilities'

let apolloClient: ApolloClient<NormalizedCacheObject> | undefined

const defaultOptions: DefaultOptions = {
  watchQuery: {
    fetchPolicy: 'network-only',
    errorPolicy: 'ignore',
  },
  query: {
    fetchPolicy: 'network-only',
    errorPolicy: 'all',
  },
}

function createApolloClient(context?: ResolverContext) {
  return new ApolloClient({
    defaultOptions,
    ssrMode: typeof window === 'undefined',
    link: createIsomorphicLink(context),
    cache: new InMemoryCache({
      resultCaching: config.environment !== 'development',
      typePolicies: {
        Query: {
          fields: {
            projects: relayStylePagination(),
          },
        },
      },
    }),
  })
}

export function initializeApollo(
  initialState: NormalizedCacheObject,
  // Pages with Next.js data fetching methods, like `getStaticProps`, can send
  // a custom context which will be used by `SchemaLink` to server render pages
  context?: ResolverContext,
) {
  const _apolloClient = apolloClient ?? createApolloClient(context)

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // get hydrated here
  if (initialState) {
    _apolloClient.cache.restore(initialState)
  }
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === 'undefined') return _apolloClient
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient

  return _apolloClient
}

export function useApollo(initialState: NormalizedCacheObject) {
  return useMemo(() => initializeApollo(initialState), [initialState])
}

export { createIsomorphicLink } from './createIsomorphicLink'
