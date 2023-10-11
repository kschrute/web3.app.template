import { foundry } from 'viem/chains'
// import * as CounterAbi from './abi/Counter.json'
import { deployments } from './deployments'

export type Contract = {
  // abi: Abi
  name: string
  addresses: {
    [key: number]: `0x${string}`
  }
}

export type Contracts = {
  [name: string]: Contract
}

export const contracts: Contracts = {
  Counter: {
    // abi: CounterAbi as Abi,
    name: 'Counter',
    addresses: {
      [foundry.id]: deployments.Counter[foundry.id],
    },
  },
  Faucet: {
    name: 'Faucet',
    addresses: {
      [foundry.id]: deployments.Faucet[foundry.id],
    },
  },
  Subscription: {
    name: 'Subscription',
    addresses: {
      [foundry.id]: deployments.Subscription[foundry.id],
    },
  },
  Wnat: {
    name: 'Wnat',
    addresses: {
      [foundry.id]: deployments.Wnat[foundry.id],
    },
  },
}
