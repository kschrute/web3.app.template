'use client'

import React from 'react'
import { Button } from '@chakra-ui/react'
import AppAlert from '../components/common/AppAlert'
import { counterAbi, counterAddress, useReadCounterNumber, useRefreshOnNewBlock, useWriteSmartContract } from '../wagmi'

export default function CounterContract() {
  const { data, queryKey } = useReadCounterNumber()
  useRefreshOnNewBlock(queryKey)

  const {
    write,
    isLoading,
    isPending,
    isSuccess,
    isError,
    error,
  } = useWriteSmartContract({
    abi: counterAbi,
    address: counterAddress,
    functionName: 'increment',
    description: `Increment counter`,
  })

  const onIncrease = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    await write?.({})
  }

  return (
    <AppAlert
      // eslint-disable-next-line no-nested-ternary
      status={isError ? 'error' : isSuccess ? 'success' : isLoading || isPending ? 'warning' : 'info'}
      description={isError ? error?.message : `Current counter value: ${data?.toString()}`}
    >
      <Button colorScheme="blue" isLoading={isLoading || isPending} onClick={onIncrease}>
        Increment
      </Button>
    </AppAlert>
  )
}
