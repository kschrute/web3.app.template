import { RequestContext } from '../context'

export const parseAuthToken = (context: RequestContext) => {
  if (context.connectionParams?.authToken) {
    return context.connectionParams.authToken.split(' ')[1]
  }
  const header = context.request?.headers?.get('authorization')
  if (header) {
    return header.split(' ')[1]
  }
  return undefined
}
