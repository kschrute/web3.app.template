import { isBrowser } from '../../utils/isBrowser'
import type { ResolverContext } from './types/ResolverContext'

export const createIsomorphicLink = (context: ResolverContext = {}) => {
  if (!isBrowser()) {
    // eslint-disable-next-line
    const { createServerLink } = require('./serverLink')
    return createServerLink(context)
  }

  // eslint-disable-next-line
  const { createClientLink } = require('./clientLink')
  return createClientLink()
}
