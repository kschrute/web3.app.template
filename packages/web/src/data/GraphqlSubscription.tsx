'use client'

import React, { useMemo } from 'react'
import { Button, Spinner } from '@chakra-ui/react'
import { useBroadcastMutation, useRandomSubscription } from '../graphql/client'
import AppAlert from '../components/common/AppAlert'

export default function GraphqlSubscription() {
  const [broadcast] = useBroadcastMutation()
  const { loading, error, data } = useRandomSubscription()

  const value = useMemo(() => data?.random?.value, [data])

  const onClick = async () => {
    await broadcast()
  }

  if (error) {
    return (
      <p>
        Error :
        {error.message}
      </p>
    )
  }

  return (
    <AppAlert
      status="info"
      description={(
        <>
          Random number subscription:
          {loading ? <Spinner size="sm" mr={2} /> : value}
        </>
)}
      button={(
        <Button colorScheme="blue" onClick={onClick}>
          Broadcast
        </Button>
      )}
    />
  )
}
