'use client'

import React from 'react'
import { Box, BoxProps, Button, Flex, Input, InputGroup, Text } from '@chakra-ui/react'
import { useAccount } from 'wagmi'
import { formatEther, parseEther } from 'viem'
import { useWNatBalanceOf, useWNatDeposit, useWNatWithdraw } from '../wagmi'
import useDebounce from '../hooks/useDebounce'
import AppAlert from '../components/common/AppAlert'
import { useWriteTransaction } from '../hooks/useWriteTransaction'

export default function WNatContract() {
  return (
    <AppAlert status="info">
      <Box flex="100%">
        <Balance />
        <Flex gap={5}>
          <Deposit flex={1} />
          <Withdraw flex={1} />
        </Flex>
      </Box>
    </AppAlert>
  )
}

function Balance() {
  const { address } = useAccount()
  const { data: balance } = useWNatBalanceOf({
    args: [address!],
    watch: true,
  })

  return (
    <Text mb={5}>
      Your WNat balance:
      {' '}
      {balance !== undefined && formatEther(balance)}
    </Text>
  )
}

function Deposit({ ...props }: BoxProps) {
  const [amount, setAmount] = React.useState('1')
  const debouncedAmount = useDebounce(amount, 500)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setAmount(e.target.value)

  const { write, isLoading, isPending } = useWriteTransaction(useWNatDeposit({
    value: parseEther(debouncedAmount),
  }), { description: `Wrap ${amount} ETH` })

  return (
    <Box {...props}>
      <InputGroup>
        <Input placeholder="Amount, ETH" value={amount} onChange={handleChange} />
        <Button colorScheme="blue" isLoading={isLoading || isPending} onClick={write}>
          Wrap
        </Button>
      </InputGroup>
    </Box>
  )
}

function Withdraw({ ...props }: BoxProps) {
  const [amount, setAmount] = React.useState('1')
  const debouncedAmount = useDebounce(amount, 500)
  const { address } = useAccount()
  const { data: balance } = useWNatBalanceOf({
    args: [address!],
    watch: true,
  })
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setAmount(e.target.value)

  const { write, isLoading, isPending } = useWriteTransaction(useWNatWithdraw({
    args: [parseEther(debouncedAmount)],
  }), { description: `Unwrap ${amount} WNAT` })

  React.useEffect(() => {
    balance !== undefined && setAmount(formatEther(balance))
  }, [balance])

  return (
    <Box {...props}>
      <InputGroup>
        <Input placeholder="Amount, ETH" value={amount} onChange={handleChange} />
        <Button colorScheme="blue" isLoading={isLoading || isPending} onClick={write}>
          Unwrap
        </Button>
      </InputGroup>
    </Box>
  )
}
