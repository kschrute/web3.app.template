import { hardhat } from 'viem/chains'
// import * as CounterAbi from './abi/Counter.json'
// import * as FaucetAbi from './abi/Faucet.json'
// import * as SubscriptionAbi from './abi/Subscription.json'
import { Abi } from 'viem'

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
      [hardhat.id]: '0x9cBbA6CDA09C7dadA8343C4076c21eE06CCa4836',
    },
  },
  Faucet: {
    // abi: FaucetAbi as Abi,
    name: 'Counter',
    addresses: {
      [hardhat.id]: '0x9cBbA6CDA09C7dadA8343C4076c21eE06CCa4836',
    },
  },
  Subscription: {
    // abi: SubscriptionAbi as Abi,
    name: 'Counter',
    addresses: {
      [hardhat.id]: '0x9cBbA6CDA09C7dadA8343C4076c21eE06CCa4836',
    },
  },
}
