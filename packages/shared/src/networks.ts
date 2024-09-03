import { base, baseSepolia, foundry, mainnet, sepolia } from 'viem/chains'
import { localhost } from './chains'

export const Network = {
  Base: 'Base',
  BaseSepolia: 'BaseSepolia',
  Ethereum: 'Ethereum',
  Foundry: 'Foundry',
  Localhost: 'Localhost',
  Sepolia: 'Sepolia',
  Solana: 'Solana',
  WAX: 'WAX',
}

export type Network = (typeof Network)[keyof typeof Network]

export const networks = {
  [foundry.id]: {
    name: Network.Foundry,
    chain: foundry,
    startBlock: BigInt(0),
    rpcUrl: 'http://127.0.0.1:8545',
    wsUrl: 'ws://127.0.0.1:8545',
  },
  [localhost.id]: {
    name: Network.Localhost,
    chain: localhost,
    startBlock: BigInt(0),
    rpcUrl: 'http://127.0.0.1:8546',
    wsUrl: 'ws://127.0.0.1:8546',
  },
  [mainnet.id]: {
    name: Network.Ethereum,
    chain: mainnet,
    startBlock: BigInt(19485553),
    rpcUrl: <string>process.env.RPC_ENDPOINT,
    wsUrl: <string>process.env.WS_ENDPOINT,
  },
  [base.id]: {
    name: Network.Base,
    chain: base,
    startBlock: BigInt(12954415),
    rpcUrl: <string>process.env.RPC_ENDPOINT_BASE,
    wsUrl: <string>process.env.WS_ENDPOINT_BASE,
  },
  [baseSepolia.id]: {
    name: Network.BaseSepolia,
    chain: baseSepolia,
    startBlock: BigInt(8883519),
    rpcUrl: <string>process.env.RPC_ENDPOINT_BASE_SEPOLIA,
    wsUrl: <string>process.env.WS_ENDPOINT_BASE_SEPOLIA,
  },
  [sepolia.id]: {
    name: Network.Sepolia,
    chain: sepolia,
    startBlock: BigInt(5466307),
    rpcUrl: process.env.RPC_ENDPOINT_SEPOLIA as string,
    wsUrl: process.env.WS_ENDPOINT_SEPOLIA as string,
  },
}
