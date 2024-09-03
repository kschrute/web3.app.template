import { type BoxProps, Flex } from '@chakra-ui/react'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import React, { type ReactNode } from 'react'
import { useAccount } from 'wagmi'

type Props = {
  children?: ReactNode
} & BoxProps

export default function WalletRequired({ children, ...rest }: Props) {
  const { isConnected, isConnecting, isDisconnected } = useAccount()

  if (!isConnected || isDisconnected || isConnecting) {
    return (
      <Flex justifyContent="center" {...rest}>
        <ConnectButton />
      </Flex>
    )
  }

  return children
}
