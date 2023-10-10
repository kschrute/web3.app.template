import React, { ReactNode } from 'react'
import { BoxProps, Flex } from '@chakra-ui/react'
import { useAccount } from 'wagmi'
import { ConnectButton } from '@rainbow-me/rainbowkit'

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
