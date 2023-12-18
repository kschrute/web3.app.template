import { connectorsForWallets } from '@rainbow-me/rainbowkit'
import { configureChains, createConfig } from 'wagmi'
import { foundry, goerli, hardhat, localhost, mainnet } from 'wagmi/chains'
import { publicProvider } from 'wagmi/providers/public'
import {
  coinbaseWallet,
  injectedWallet,
  ledgerWallet,
  metaMaskWallet,
  rainbowWallet,
  trustWallet,
  walletConnectWallet,
} from '@rainbow-me/rainbowkit/wallets'

export * from './generated'

const projectId = <string>process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [mainnet, ...(process.env.NODE_ENV === 'development' ? [goerli, localhost, foundry, hardhat] : [])],
  [
    publicProvider(),
  ],
  { batch: { multicall: true } },
)

// const { connectors } = getDefaultWallets({
//   appName: 'My wagmi + RainbowKit App',
//   chains,
//   projectId,
// })

const connectors = connectorsForWallets([
  {
    groupName: 'Recommended',
    wallets: [
      injectedWallet({ chains }),
      metaMaskWallet({ chains, projectId }),
      walletConnectWallet({ chains, projectId }),
      coinbaseWallet({ appName: 'App', chains }),
      ledgerWallet({ chains, projectId }),
      trustWallet({ chains, projectId }),
      rainbowWallet({ chains, projectId }),
    ],
  },
])

export const config = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
})

export { chains }
