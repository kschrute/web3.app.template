'use client'

import { Button, Spinner } from '@chakra-ui/react'
import React, { useMemo } from 'react'
import AppAlert from '../components/common/AppAlert'
import { useRequestMutation, useRequestsSubscription } from '../graphql/client'

export default function GraphqlRequestsCount() {
  const [request] = useRequestMutation()
  const { loading, error, data } = useRequestsSubscription()

  const count = useMemo(() => data?.requests.count, [data])

  if (error) return <AppAlert status="warning" title="Connect your wallet first" description={`${error.message}`} />

  const onClick = async () => {
    await request()
  }

  return (
    <AppAlert
      status="info"
      description={<>Your requests count: {loading ? <Spinner size="sm" mr={2} /> : count}</>}
      button={
        <Button colorScheme="blue" onClick={onClick}>
          Request
        </Button>
      }
    />
  )
}
