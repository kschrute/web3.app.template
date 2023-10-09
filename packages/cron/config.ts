import { foundry, hardhat, localhost, mainnet } from 'viem/chains'

require('dotenv').config()

const localNetwork = {
  chain: foundry,
  accounts: { mnemonic: process.env.MNEMONIC || '' },
  startBlock: BigInt(18315559),
  rpcUrl: 'http://127.0.0.1:8545',
  wsUrl: 'ws://127.0.0.1:8545',
}

export default {
  environment: process.env.NODE_ENV || 'development',
  chainId: process.env.CHAIN_ID ? Number(process.env.CHAIN_ID) : mainnet.id,

  networks: {
    [localhost.id]: localNetwork,
    [hardhat.id]: localNetwork,
    [foundry.id]: localNetwork,
    [mainnet.id]: {
      chain: mainnet,
      accounts: { mnemonic: process.env.MNEMONIC || '' },
      startBlock: BigInt(16722396),
      rpcUrl: process.env.RPC_ENDPOINT as string,
      wsUrl: process.env.WS_ENDPOINT as string,
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
