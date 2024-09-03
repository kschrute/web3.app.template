import { networks } from '../networks'
import { createPublicClient, http } from 'viem'
import { getNetworkConfig } from './getNetworkConfig'

export const getPublicClient = (chainId: number) => {
  console.log(`Getting public client for chain ${chainId}`)
  const networkConfig = getNetworkConfig(chainId as keyof typeof networks)
  console.log(networkConfig)
  return createPublicClient({
    transport: networkConfig.rpcUrl ? http(networkConfig.rpcUrl) : http(),
    chain: networkConfig.chain,
  })
}
