import React from 'react'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { useApolloClient } from '@apollo/client'
import { useAccount } from 'wagmi'

export const Wallet = () => {
  const client = useApolloClient()

  useAccount({
    onConnect({ address, connector, isReconnected }) {
      console.log('Connected', { address, connector, isReconnected })
    },
    onDisconnect() {
      console.log('Disconnected')
      client.resetStore()
    },
  })

  return (
    <ConnectButton
      accountStatus={{ smallScreen: 'avatar', largeScreen: 'full' }}
      chainStatus={{ smallScreen: 'icon', largeScreen: 'icon' }}
      showBalance={{ smallScreen: false, largeScreen: true }}
    />
  )
}