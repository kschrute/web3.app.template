import 'dotenv/config'
import { foundry, hardhat, localhost, mainnet } from 'viem/chains'

const localNetwork = {
  accounts: { mnemonic: process.env.MNEMONIC || '' },
  startBlock: BigInt(0),
  rpcUrl: 'http://127.0.0.1:8545',
  wsUrl: 'ws://127.0.0.1:8545',
}

export default {
  environment: process.env.NODE_ENV || 'development',
  chainId: process.env.CHAIN_ID ? Number(process.env.CHAIN_ID) : mainnet.id,

  networks: {
    [localhost.id]: {
      ...localNetwork,
      chain: localhost,
    },
    [foundry.id]: {
      ...localNetwork,
      chain: foundry,
    },
    [mainnet.id]: {
      chain: mainnet,
      accounts: { mnemonic: process.env.MNEMONIC || '' },
      startBlock: BigInt(16722396),
      rpcUrl: <string>process.env.RPC_ENDPOINT,
      wsUrl: <string>process.env.WS_ENDPOINT,
    },
  },

  redis: {
    cache: {
      host: process.env.REDIS_CACHE_HOST || 'localhost',
      port: process.env.REDIS_CACHE_PORT ? Number(process.env.REDIS_CACHE_PORT) : 6379,
    },
    pubsub: {
      host: process.env.REDIS_PUBSUB_HOST || 'localhost',
      port: process.env.REDIS_PUBSUB_PORT ? Number(process.env.REDIS_PUBSUB_PORT) : 6379,
    },
    queue: {
      host: process.env.REDIS_QUEUE_HOST || 'localhost',
      port: process.env.REDIS_QUEUE_PORT ? Number(process.env.REDIS_QUEUE_PORT) : 6379,
    },
  },
}
