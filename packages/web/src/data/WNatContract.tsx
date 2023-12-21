'use client'

import React from 'react'
import {
  Box,
  BoxProps,
  Button,
  Flex,
  Heading,
  Input,
  InputGroup,
  Stat, StatHelpText,
  StatLabel,
  StatNumber,
  Text
} from '@chakra-ui/react'
import { useAccount } from 'wagmi'
import { formatEther, parseEther } from 'viem'
import { useWNatBalanceOf, useWNatDeposit, useWNatWithdraw } from '../wagmi'
import useDebounce from '../hooks/useDebounce'
import AppAlert from '../components/common/AppAlert'
import { useWriteTransaction } from '../hooks/useWriteTransaction'

export default function WNatContract() {
  return (
    <AppAlert status="info" showIcon={false}>
      <Box flex="100%" p={0}>
        <Heading size="lg" mb={5}>Wrapped Native Token</Heading>
        <Flex bg="gray1" gap={5} alignItems="center" justifyContent="flex-start">
          <Balance flex={0} bg="green1" />
          <Flex bg="yellow1" flex={1} gap={5} flexDirection="column">
            <Deposit flex={1} />
            <Withdraw flex={1} />
          </Flex>
        </Flex>
      </Box>
    </AppAlert>
  )
}

function Balance({ ...props }: BoxProps) {
  const { address } = useAccount()
  const { data: balance } = useWNatBalanceOf({
    args: [address!],
    watch: true,
  })

  return (
    <Box borderWidth={1} borderRadius="lg" p={3} pb={1} {...props}>
      <Stat>
        <StatLabel>WNAT</StatLabel>
        <StatNumber>{balance !== undefined && formatEther(balance)}</StatNumber>
        <StatHelpText>balance</StatHelpText>
      </Stat>
    </Box>
  )
}

function Deposit({ ...props }: BoxProps) {
  const [amount, setAmount] = React.useState('0')
  const debouncedAmount = useDebounce(amount, 500)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setAmount(e.target.value)

  const { write, isLoading, isPending } = useWriteTransaction(useWNatDeposit({
    value: parseEther(debouncedAmount),
  }), { description: `Wrap ${amount} ETH` })

  return (
    <Box {...props}>
      <InputGroup gap={5}>
        <Input placeholder="Amount, ETH" value={amount} onChange={handleChange} />
        <Button colorScheme="blue" isLoading={isLoading || isPending} onClick={write}>
          Wrap
        </Button>
      </InputGroup>
    </Box>
  )
}

function Withdraw({ ...props }: BoxProps) {
  const [amount, setAmount] = React.useState('')
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
    if (balance === undefined) return
    if (balance > 0) setAmount(formatEther(balance))
    else setAmount('')
  }, [balance])

  return (
    <Box {...props}>
      <InputGroup gap={5}>
        <Input placeholder="Amount, WNAT" value={amount} onChange={handleChange} />
        <Button colorScheme="blue" isLoading={isLoading || isPending} onClick={write}>
          Unwrap
        </Button>
      </InputGroup>
    </Box>
  )
}
