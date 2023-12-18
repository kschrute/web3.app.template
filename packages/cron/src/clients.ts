import { createPublicClient, http, createWalletClient } from 'viem'
import { mnemonicToAccount } from 'viem/accounts'
import { getNetworkConfig } from './utils/getNetworkConfig'

const networkConfig = getNetworkConfig()
// const transport = http(networkConfig.rpcUrl)
const transport = http()
const mnemonic = <string>process.env.MNEMONIC
const account = mnemonicToAccount(mnemonic)

export const publicClient = createPublicClient({
  transport,
  chain: networkConfig?.chain,
})

export const walletClient = createWalletClient({
  account,
  transport,
  chain: networkConfig?.chain,
})
