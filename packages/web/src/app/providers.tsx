'use client'

import { ApolloProvider } from '@apollo/client'
import { loadDevMessages, loadErrorMessages } from '@apollo/client/dev'
import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import { RainbowKitProvider, darkTheme, lightTheme } from '@rainbow-me/rainbowkit'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import * as React from 'react'
import { type ProviderProps, useMemo } from 'react'
import { IconContext } from 'react-icons'
import { WagmiProvider } from 'wagmi'
import { useApollo } from '../graphql/apollo'
import { theme } from '../theme'
import { wagmiConfig } from '../wagmi'

if (process.env.NODE_ENV === 'development') {
  loadDevMessages()
  loadErrorMessages()
}

const queryClient = new QueryClient()

export function Providers({ children }: { children: React.ReactNode }) {
  // const apolloClient = useApollo(pageProps.initialApolloState)
  const apolloClient = useApollo({})
  const [mounted, setMounted] = React.useState(false)

  const iconContextProps: ProviderProps<IconContext> = useMemo(
    () => ({
      value: {
        className: 'react-icons',
        attr: { focusable: 'false' },
      },
    }),
    [],
  )

  React.useEffect(() => setMounted(true), [])

  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>
        <WagmiProvider config={wagmiConfig} reconnectOnMount>
          <QueryClientProvider client={queryClient}>
            <RainbowKitProvider
              modalSize="compact"
              theme={{ lightMode: lightTheme(), darkMode: darkTheme() }}
              showRecentTransactions
            >
              <ApolloProvider client={apolloClient}>
                <IconContext.Provider {...iconContextProps}>{mounted && children}</IconContext.Provider>
              </ApolloProvider>
            </RainbowKitProvider>
          </QueryClientProvider>
        </WagmiProvider>
      </ChakraProvider>
    </CacheProvider>
  )
}
