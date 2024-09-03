import { networks } from '../networks'
import type { Network } from '../networks'

export const getChainIdByNetwork = (network: Network) => {
  const n = Object.entries(networks).find((n) => n[1].name === network)
  if (!n) throw Error(`Network ${network} not found`)
  return Number(n[0])
}
