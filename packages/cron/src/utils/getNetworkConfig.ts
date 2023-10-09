import config from '../../config'

export const getNetworkConfig = () => {
  const chainId = config.chainId as keyof typeof config.networks
  const networkConfig = config.networks[chainId]

  if (!networkConfig) {
    throw Error(`Network config not found for chain ID ${chainId}`)
  }

  return networkConfig
}
