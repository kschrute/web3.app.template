import { ApolloLink } from '@apollo/client'

export const authMiddleware = new ApolloLink((operation, forward) => {
  const token = localStorage.getItem('token')
  // add the authorization to the headers
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : null,
    },
  }))

  return forward(operation)
})
