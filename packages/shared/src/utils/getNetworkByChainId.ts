import { networks } from '../networks'
import type { Network } from '../networks'

export const getNetworkByChainId = (id: number): Network => {
  return networks[id as keyof typeof networks].name
}
