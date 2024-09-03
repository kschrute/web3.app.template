import { networks } from '../networks'

export const getNetworkConfig = (chainId: number) => {
  const networkConfig = networks[chainId as keyof typeof networks]

  if (!networkConfig) {
    throw Error(`Network config not found for chain ID ${chainId}`)
  }

  return networkConfig
}
