import { foundry } from 'viem/chains'
// import * as CounterAbi from './abi/Counter.json'
// import * as FaucetAbi from './abi/Faucet.json'
// import * as SubscriptionAbi from './abi/Subscription.json'
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
    // abi: FaucetAbi as Abi,
    name: 'Faucet',
    addresses: {
      [foundry.id]: deployments.Faucet[foundry.id],
    },
  },
  Subscription: {
    // abi: SubscriptionAbi as Abi,
    name: 'Subscription',
    addresses: {
      [foundry.id]: deployments.Subscription[foundry.id],
    },
  },
}
