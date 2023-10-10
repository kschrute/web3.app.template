'use client'

import React, { useCallback } from 'react'
import { Button, Skeleton, Spinner } from '@chakra-ui/react'
import { useAddRecentTransaction } from '@rainbow-me/rainbowkit'
import { bcTimestampToDate } from '../utils/bcTimestampToDate'
import AppAlert from '../components/common/AppAlert'
import { useAccount, useWaitForTransaction } from 'wagmi'
import { useSubscriptionSubscribe, useSubscriptionUserSubscribedAt } from '../wagmi'

export default function SubscriptionContract() {
  const addRecentTransaction = useAddRecentTransaction()
  const { address, isConnecting, isConnected, isDisconnected } = useAccount()
  const { data: userSubscribedAt, refetch } = useSubscriptionUserSubscribedAt({
    args: [address!],
    watch: true,
  })
  const { writeAsync, data: dataWrite, error, isLoading, isError } = useSubscriptionSubscribe()
  const {
    data: receipt,
    isLoading: isPending,
    isSuccess,
  } = useWaitForTransaction({ hash: dataWrite?.hash })

  const isSubscribed = userSubscribedAt && userSubscribedAt > 0

  const onCLick = useCallback(async () => {
    const tx = await writeAsync?.()
    tx &&
    addRecentTransaction({
      hash: tx.hash,
      description: 'Subscribe',
    })
  }, [writeAsync, addRecentTransaction])

  if (userSubscribedAt === undefined) return <Skeleton h={10} />

  return (
    <AppAlert
      status={isSubscribed ? 'success' : 'warning'}
      description={
        isSubscribed
          ? `Looks like you have already subscribed at ${bcTimestampToDate(userSubscribedAt).toLocaleString()}`
          : `You are not subscribed yet. Click Subscribe button to subscribe.`
      }
      button={
        <Button colorScheme="blue" isDisabled={isLoading} onClick={onCLick}>
          {isLoading && <Spinner size="md" mr={2} />} Subscribe
        </Button>
      }
    />
  )
}
