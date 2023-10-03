import { createPublicClient, http, createWalletClient } from 'viem'
import { mnemonicToAccount } from 'viem/accounts'
import { mainnet, hardhat } from 'viem/chains'

const chain = hardhat
// const chain = mainnet
const url = 'http://127.0.0.1:8545'
const transport = http(url)
// const transport = http()
const mnemonic = 'myth like bonus scare over problem client lizard pioneer submit female collect'
const account = mnemonicToAccount(mnemonic)

export const publicClient = createPublicClient({
  chain,
  transport,
})

export const walletClient = createWalletClient({
  account,
  chain,
  transport,
})
