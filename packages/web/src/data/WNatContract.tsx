'use client'

import React, { useCallback } from 'react'
import { Box, Button, Flex, Input, InputGroup, Text, BoxProps } from '@chakra-ui/react'
import AppAlert from '../components/common/AppAlert'
import { useAddRecentTransaction } from '@rainbow-me/rainbowkit'
import { useAccount, useWaitForTransaction } from 'wagmi'
import { useWnatBalanceOf, useWnatDeposit, useWnatWithdraw } from '../wagmi'
import { formatEther, parseEther } from 'viem'
import { useDebounce } from '../hooks/useDebounce'
import { useShowErrorMessage, useShowSuccessMessage } from '../hooks/useShowMessage'

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
  const { data: balance, } = useWnatBalanceOf({
    args: [address!],
    watch: true,
  })

  return (
    <Text mb={5}>
      Your WNat balance: {balance !== undefined && formatEther(balance)}
    </Text>
  )
}

function Deposit({ ...props }: BoxProps) {
  const showErrorMessage = useShowErrorMessage()
  const showSuccessMessage = useShowSuccessMessage()
  const addRecentTransaction = useAddRecentTransaction()
  const [amount, setAmount] = React.useState('1')
  const debouncedAmount = useDebounce(amount, 500)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setAmount(e.target.value)

  const { writeAsync, data, error, isLoading, isError } = useWnatDeposit({
    value: parseEther(debouncedAmount),
  })
  const { data: receipt, isLoading: isPending, isSuccess } = useWaitForTransaction({ hash: data?.hash })

  React.useEffect(() => {
    isError && error && showErrorMessage(error.message)
  }, [isError, error, showErrorMessage])

  React.useEffect(() => {
    isSuccess && showSuccessMessage('Transaction successfully mined')
  }, [isSuccess, showSuccessMessage])

  const onClick = useCallback(async () => {
    const tx = await writeAsync?.()
    tx &&
    addRecentTransaction({
      hash: tx.hash,
      description: `Wrap ${amount} ETH`,
    })
  }, [writeAsync, addRecentTransaction, amount])

  return (
    <Box {...props}>
      <InputGroup>
        <Input placeholder="Amount, ETH" value={amount} onChange={handleChange} />
        <Button colorScheme="blue" isLoading={isLoading || isPending} onClick={onClick}>
          Wrap
        </Button>
      </InputGroup>
    </Box>
  )
}

function Withdraw({ ...props }: BoxProps) {
  const showErrorMessage = useShowErrorMessage()
  const showSuccessMessage = useShowSuccessMessage()
  const { address } = useAccount()
  const { data: balance, } = useWnatBalanceOf({
    args: [address!],
    watch: true,
  })
  const addRecentTransaction = useAddRecentTransaction()
  const [amount, setAmount] = React.useState('1')
  const debouncedAmount = useDebounce(amount, 500)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setAmount(e.target.value)

  React.useEffect(() => {
    balance !== undefined && setAmount(formatEther(balance))
  }, [balance])

  const { writeAsync, data, error, isLoading, isError } = useWnatWithdraw({
    args: [parseEther(debouncedAmount)],
  })
  const { data: receipt, isLoading: isPending, isSuccess } = useWaitForTransaction({ hash: data?.hash })

  React.useEffect(() => {
    isError && error && showErrorMessage(error.message)
  }, [isError, error, showErrorMessage])

  React.useEffect(() => {
    isSuccess && showSuccessMessage('Transaction successfully mined')
  }, [isSuccess, showSuccessMessage])

  const onClick = useCallback(async () => {
    const tx = await writeAsync?.()
    tx &&
    addRecentTransaction({
      hash: tx.hash,
      description: `Unwrap ${amount} WNAT`,
    })
  }, [writeAsync, addRecentTransaction, amount])

  return (
    <Box {...props}>
      <InputGroup>
        <Input placeholder="Amount, ETH" value={amount} onChange={handleChange} />
        <Button colorScheme="blue" isLoading={isLoading || isPending} onClick={onClick}>
          Unwrap
        </Button>
      </InputGroup>
    </Box>
  )
}
