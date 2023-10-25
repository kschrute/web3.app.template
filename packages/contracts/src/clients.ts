import { createPublicClient, http, createWalletClient } from 'viem'
import { mnemonicToAccount } from 'viem/accounts'
import { hardhat, mainnet } from 'viem/chains'

require('dotenv').config()

const chainId = process.env.FORGE_CHAIN_ID ? Number(process.env.FORGE_CHAIN_ID) : hardhat.id

const getChain = (id: number) => {
  if (id === hardhat.id) return hardhat
  if (id === mainnet.id) return mainnet

  return hardhat
}

const chain = getChain(chainId)

// const url = 'http://127.0.0.1:8545'
// const transport = http(url)
const transport = http()
const mnemonic = process.env.ANVIL_MNEMONIC as string
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
