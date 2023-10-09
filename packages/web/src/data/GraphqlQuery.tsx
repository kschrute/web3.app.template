'use client'

import React from 'react'
import { useMeQuery } from '../graphql/client'
import { Debug } from '../components/Debug'
import AppAlert from '../components/common/AppAlert'

export const GraphqlQuery = () => {
  const { loading, error, data } = useMeQuery({
    pollInterval: 1000,
  })

  if (loading) return <p>Loading...</p>

  if (error) return <AppAlert status="warning" title="Connect your wallet first" description={`${error.message}`} />

  if (!data) return null

  return <Debug data={data} />
}
