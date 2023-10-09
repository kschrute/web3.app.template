'use client'

import React from 'react'
import { Button, Spinner } from '@chakra-ui/react'
import { useWaitForTransaction } from 'wagmi'
import { useAddRecentTransaction } from '@rainbow-me/rainbowkit'
import { useCounterIncrement, useCounterNumber, useCounterSetNumber } from '../wagmi'
import AppAlert from '../components/common/AppAlert'

export default function CounterContract() {
  const { data, refetch } = useCounterNumber({
    watch: true,
  })
  const addRecentTransaction = useAddRecentTransaction()
  const { writeAsync, data: dataWrite, error, isLoading, isError } = useCounterIncrement()
  const {
    data: receipt,
    isLoading: isPending,
    isSuccess,
  } = useWaitForTransaction({ hash: dataWrite?.hash })

  const onIncrease = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    const tx = await writeAsync?.()
    tx && addRecentTransaction({
      hash: tx.hash,
      description: 'Increment counter',
    })
  }


  return (
    <AppAlert
      status={isError ? 'error' : isSuccess ? 'success' : isLoading || isPending ? 'warning' : 'info'}
      description={isError ? error?.message : `Current counter value: ${data?.toString()}`}
    >
      <Button colorScheme="blue" isDisabled={isLoading} onClick={onIncrease}>
        {isLoading && <Spinner size="md" mr={2} />} Increment
      </Button>
    </AppAlert>
  )
}
