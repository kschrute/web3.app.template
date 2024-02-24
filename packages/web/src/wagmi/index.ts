import { connectorsForWallets } from '@rainbow-me/rainbowkit'
import { configureChains, createConfig } from 'wagmi'
import { foundry, sepolia, hardhat, localhost, mainnet } from 'wagmi/chains'
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
import config from '../../config'

export * from './generated'

const projectId = config.walletConnectProjectId

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [mainnet, ...(process.env.NODE_ENV === 'development' ? [sepolia, localhost, foundry, hardhat] : [])],
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

export const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
})

export { chains }
