import { sepolia, mainnet, foundry, localhost } from 'viem/chains'

type Contracts = 'Counter' | 'Faucet' | 'Subscription' | 'WNat'

type Deployments = {
  [key in Contracts]: {
    [key: string]: `0x${string}`
  }
}

type ContractsConfig = {
  include: string[],
  deployments: Deployments,
}

export const contracts: ContractsConfig = {
  include: [
    'Counter.sol/*.json',
    'Faucet.sol/*.json',
    'Subscription.sol/*.json',
    'WNat.sol/*.json',
  ],
  deployments: {
    Counter: {
      [mainnet.id]: '0x0000000000000000000000000000000000000000',
      [sepolia.id]: '0x0000000000000000000000000000000000000000',
      [foundry.id]: '0xe78A0F7E598Cc8b0Bb87894B0F60dD2a88d6a8Ab',
      [localhost.id]: '0xe78A0F7E598Cc8b0Bb87894B0F60dD2a88d6a8Ab',
    },
    Faucet: {
      [mainnet.id]: '0x0000000000000000000000000000000000000000',
      [sepolia.id]: '0x0000000000000000000000000000000000000000',
      [foundry.id]: '0x5b1869D9A4C187F2EAa108f3062412ecf0526b24',
      [localhost.id]: '0x5b1869D9A4C187F2EAa108f3062412ecf0526b24',
    },
    Subscription: {
      [mainnet.id]: '0x0000000000000000000000000000000000000000',
      [sepolia.id]: '0x0000000000000000000000000000000000000000',
      [foundry.id]: '0xCfEB869F69431e42cdB54A4F4f105C19C080A601',
      [localhost.id]: '0xCfEB869F69431e42cdB54A4F4f105C19C080A601',
    },
    WNat: {
      [mainnet.id]: '0x0000000000000000000000000000000000000000',
      [sepolia.id]: '0x0000000000000000000000000000000000000000',
      [foundry.id]: '0x254dffcd3277C0b1660F6d42EFbB754edaBAbC2B',
      [localhost.id]: '0x254dffcd3277C0b1660F6d42EFbB754edaBAbC2B',
    },
  },
}
