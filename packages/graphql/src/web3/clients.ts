import 'dotenv/config'
import { createPublicClient, http, createWalletClient, Chain } from 'viem'
import { mnemonicToAccount, privateKeyToAccount } from 'viem/accounts'
import { hardhat, localhost } from 'viem/chains'

type Config = {
  [id: number]: {
    rpcUrl: string
    privateKey?: `0x${string}`
    mnemonic?: string
  } & Chain
}

const config: Config = {
  [hardhat.id]: {
    ...hardhat,
    rpcUrl: process.env.RPC_URL as string,
    privateKey: process.env.PRIVATE_KEY as `0x${string}`,
  },
}

const chainId = process.env.CHAIN_ID ? Number(process.env.CHAIN_ID) : hardhat.id

const getChain = (id: number) => {
  if (id === hardhat.id) return hardhat
  if (id === localhost.id) return localhost

  return hardhat
}

const chain = getChain(chainId)
const transport = http(config[chain.id].rpcUrl)
const mnemonic = process.env.MNEMONIC ?? 'myth like bonus scare over problem client lizard pioneer submit female collect'
const account = config[chain.id].privateKey
  ? privateKeyToAccount(config[chain.id].privateKey!)
  : config[chain.id].mnemonic ? mnemonicToAccount(config[chain.id].mnemonic!) : mnemonicToAccount(mnemonic)

export const publicClient = createPublicClient({
  transport,
  chain,
})

export const walletClient = createWalletClient({
  account,
  transport,
  chain,
})
