'use client'

import * as React from 'react'
import { ApolloProvider } from '@apollo/client'
import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import { darkTheme, lightTheme, RainbowKitProvider } from '@rainbow-me/rainbowkit'
import { WagmiConfig } from 'wagmi'
import { loadDevMessages, loadErrorMessages } from '@apollo/client/dev'
import { useApollo } from '../graphql/apollo'
import { chains, config } from '../wagmi'
import { theme } from '../theme'

if (process.env.NODE_ENV === 'development') {
  loadDevMessages()
  loadErrorMessages()
}

export function Providers({ children }: { children: React.ReactNode }) {
  // const apolloClient = useApollo(pageProps.initialApolloState)
  const apolloClient = useApollo({})
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => setMounted(true), [])

  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>
        <WagmiConfig config={config}>
          <RainbowKitProvider
            chains={chains}
            modalSize="compact"
            theme={{ lightMode: lightTheme(), darkMode: darkTheme() }}
            showRecentTransactions
          >
            <ApolloProvider client={apolloClient}>
              {mounted && children}
            </ApolloProvider>
          </RainbowKitProvider>
        </WagmiConfig>
      </ChakraProvider>
    </CacheProvider>
  )
}
