'use client'

import React from 'react'
import { Button, Skeleton } from '@chakra-ui/react'
import { useAccount } from 'wagmi'
import { bcTimestampToDate } from '../utils/bcTimestampToDate'
import AppAlert from '../components/common/AppAlert'
import { useSubscriptionSubscribe, useSubscriptionUserSubscribedAt } from '../wagmi'
import { useWriteTransaction } from '../hooks/useWriteTransaction'

export default function SubscriptionContract() {
  const { address } = useAccount()
  const { data: userSubscribedAt } = useSubscriptionUserSubscribedAt({
    args: [address!],
    watch: true,
  })

  const { write, isLoading } = useWriteTransaction(useSubscriptionSubscribe(), { description: 'Subscribe' })

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
      button={(
        <Button colorScheme="blue" isLoading={isLoading} onClick={write}>
          Subscribe
        </Button>
      )}
    />
  )
}
