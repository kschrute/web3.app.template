import { createPublicClient, http, createWalletClient } from 'viem'
import { mnemonicToAccount } from 'viem/accounts'
import { getNetworkConfig } from './utils/getNetworkConfig'
// import { mainnet, hardhat } from 'viem/chains'

const networkConfig = getNetworkConfig()
// const transport = http()
const transport = http(networkConfig.rpcUrl)
const mnemonic = 'myth like bonus scare over problem client lizard pioneer submit female collect'
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