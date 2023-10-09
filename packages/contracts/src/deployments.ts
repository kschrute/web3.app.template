import { foundry, goerli, mainnet } from 'viem/chains'

type Contracts = 'Counter' | 'Faucet' | 'Subscription' | 'WNat'

type Deployments = {
  [key in Contracts]: {
    [key: string]: `0x${string}`
  }
}

export const deployments: Deployments = {
  Counter: {
    [mainnet.id]: '0x9cBbA6CDA09C7dadA8343C4076c21eE06CCa4836',
    [goerli.id]: '0x9cBbA6CDA09C7dadA8343C4076c21eE06CCa4836',
    [foundry.id]: '0x9cBbA6CDA09C7dadA8343C4076c21eE06CCa4836',
  },
  Faucet: {
    [mainnet.id]: '0xbA3981771AB991960028B2F83ae83664Fd003F61',
    [goerli.id]: '0xbA3981771AB991960028B2F83ae83664Fd003F61',
    [foundry.id]: '0xbA3981771AB991960028B2F83ae83664Fd003F61',
  },
  Subscription: {
    [mainnet.id]: '0xF39FEF928BECF01F045FD609eb44C838ea37325b',
    [goerli.id]: '0xF39FEF928BECF01F045FD609eb44C838ea37325b',
    [foundry.id]: '0xF39FEF928BECF01F045FD609eb44C838ea37325b',
  },
  WNat: {
    [mainnet.id]: '0x4635a010Be2707a3FB9c3467Fc615202468BC51E',
    [goerli.id]: '0x4635a010Be2707a3FB9c3467Fc615202468BC51E',
    [foundry.id]: '0x4635a010Be2707a3FB9c3467Fc615202468BC51E',
  },
}
