import { ethers } from 'ethers'
import { getNetworkConfig } from './getNetworkConfig'

export const getProvider = (getStatic = false) => {
  const networkConfig = getNetworkConfig()
  if (!networkConfig) {
    throw Error('Network config not found')
  }

  return getStatic
    ? new ethers.providers.StaticJsonRpcProvider(networkConfig.rpcUrl)
    : new ethers.providers.JsonRpcProvider(networkConfig.rpcUrl)
}
