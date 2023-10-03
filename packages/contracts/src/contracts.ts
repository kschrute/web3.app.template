import { hardhat } from 'viem/chains'
import * as abi from './abi/Counter.json'
import { Abi } from 'viem'

export type Contract = {
  abi: Abi
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
    abi: abi as Abi,
    name: 'Counter',
    addresses: {
      [hardhat.id]: '0x9cBbA6CDA09C7dadA8343C4076c21eE06CCa4836',
    },
  }
}
