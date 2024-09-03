import type { IncomingMessage, ServerResponse } from 'node:http'

export type ResolverContext = {
  req?: IncomingMessage
  res?: ServerResponse
}
