import 'dotenv/config'
import { createPublicClient, http, createWalletClient } from 'viem'
import { mnemonicToAccount } from 'viem/accounts'
import { hardhat, mainnet } from 'viem/chains'

const chainId = process.env.CHAIN_ID ? Number(process.env.CHAIN_ID) : hardhat.id

const getChain = (id: number) => {
  if (id === hardhat.id) return hardhat
  if (id === mainnet.id) return mainnet

  return hardhat
}

const chain = getChain(chainId)
const transport = http()
const mnemonic = <string>process.env.MNEMONIC
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
