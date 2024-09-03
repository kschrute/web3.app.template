import { connectorsForWallets, getDefaultWallets } from '@rainbow-me/rainbowkit'
import {
  coinbaseWallet,
  injectedWallet,
  ledgerWallet,
  metaMaskWallet,
  rainbowWallet,
  trustWallet,
  walletConnectWallet,
} from '@rainbow-me/rainbowkit/wallets'
import { http, createConfig } from 'wagmi'
import { foundry, localhost, mainnet, sepolia } from 'wagmi/chains'
import config from '../../config'

export * from './generated'

const projectId = config.walletConnectProjectId

// const { connectors } = getDefaultWallets({
//   appName: 'Web3',
//   projectId,
// })

const connectors = connectorsForWallets(
  [
    {
      groupName: 'Recommended',
      wallets: [
        injectedWallet,
        metaMaskWallet,
        walletConnectWallet,
        coinbaseWallet,
        ledgerWallet,
        trustWallet,
        rainbowWallet,
      ],
    },
  ],
  { appName: 'Web3', projectId },
)

export const wagmiConfig = createConfig({
  chains: [mainnet, ...(process.env.NODE_ENV === 'development' ? [sepolia, localhost, foundry] : [])],
  connectors,
  ssr: true,
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
    [localhost.id]: http(),
    [foundry.id]: http(),
  },
  batch: { multicall: true },
})

declare module 'wagmi' {
  interface Register {
    config: typeof wagmiConfig
  }
}
