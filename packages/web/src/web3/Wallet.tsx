import React, { useEffect } from 'react'
import { useAccount } from 'wagmi'
import { useApolloClient } from '@apollo/client'
import { ConnectButton } from '@rainbow-me/rainbowkit'

export const Wallet = () => {
  const client = useApolloClient()

  const { address, connector, status } = useAccount()

  useEffect(() => {
    if (status === 'connected') {
      console.log('Connected')
      console.log('Connected', { address, connector })
    }
    if (status === 'disconnected') {
      console.log('Disconnected')
      client.resetStore()
    }
  }, [status])

  return (
    <ConnectButton
      accountStatus={{ smallScreen: 'avatar', largeScreen: 'full' }}
      chainStatus={{ smallScreen: 'icon', largeScreen: 'icon' }}
      showBalance={{ smallScreen: false, largeScreen: true }}
    />
  )
}
