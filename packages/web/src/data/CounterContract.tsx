'use client'

import React from 'react'
import { Button } from '@chakra-ui/react'
import { useCounterIncrement, useCounterNumber } from '../wagmi'
import AppAlert from '../components/common/AppAlert'
import { useWriteTransaction } from '../hooks/useWriteTransaction'

export default function CounterContract() {
  const { data } = useCounterNumber({
    watch: true,
  })

  const {
    write,
    isLoading,
    isPending,
    isSuccess,
    isError,
    error,
  } = useWriteTransaction(useCounterIncrement(), { description: 'Increment counter' })

  const onIncrease = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    await write?.()
  }

  return (
    <AppAlert
      // eslint-disable-next-line no-nested-ternary
      status={isError ? 'error' : isSuccess ? 'success' : isLoading || isPending ? 'warning' : 'info'}
      description={isError ? error?.message : `Current counter value: ${data?.toString()}`}
    >
      <Button colorScheme="blue" isLoading={isLoading} onClick={onIncrease}>
        Increment
      </Button>
    </AppAlert>
  )
}
