'use client'

import { Button, Skeleton } from '@chakra-ui/react'
import React from 'react'
import { useAccount } from 'wagmi'
import AppAlert from '../components/common/AppAlert'
import { bcTimestampToDate } from '../utils/bcTimestampToDate'
import {
  subscriptionAbi,
  subscriptionAddress,
  useReadSubscriptionUserSubscribedAt,
  useRefreshOnNewBlock,
  useWriteSmartContract,
} from '../wagmi'

export default function SubscriptionContract() {
  const { address } = useAccount()
  const { data: userSubscribedAt, queryKey } = useReadSubscriptionUserSubscribedAt({
    args: [address],
  })
  useRefreshOnNewBlock(queryKey)

  const { write, isLoading, isPending } = useWriteSmartContract({
    abi: subscriptionAbi,
    address: subscriptionAddress,
    functionName: 'subscribe',
    description: 'Subscribe',
  })

  const onClick = async () => {
    await write({})
  }

  const isSubscribed = userSubscribedAt && userSubscribedAt > 0

  if (userSubscribedAt === undefined) return <Skeleton h={10} />

  return (
    <AppAlert
      status={isSubscribed ? 'success' : 'warning'}
      description={
        isSubscribed
          ? `Looks like you have already subscribed at ${bcTimestampToDate(userSubscribedAt).toLocaleString()}`
          : 'You are not subscribed yet. Click Subscribe button to subscribe.'
      }
      button={
        <Button colorScheme="blue" isLoading={isLoading || isPending} onClick={onClick}>
          Subscribe
        </Button>
      }
    />
  )
}
