'use client'

import * as React from 'react'
import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import { darkTheme, lightTheme, RainbowKitProvider } from '@rainbow-me/rainbowkit'
import { WagmiConfig } from 'wagmi'
import { chains, config } from '../wagmi'

export function Providers({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = React.useState(false)
  React.useEffect(() => setMounted(true), [])
  return (
    <CacheProvider>
      <ChakraProvider>
        <WagmiConfig config={config}>
          <RainbowKitProvider
            chains={chains}
            modalSize="compact"
            theme={{ lightMode: lightTheme(), darkMode: darkTheme() }}
            showRecentTransactions
          >
            {mounted && children}
          </RainbowKitProvider>
        </WagmiConfig>
      </ChakraProvider>
    </CacheProvider>
  )
}
