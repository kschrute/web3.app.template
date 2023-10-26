'use client'

import React from 'react'
import { Button, Skeleton } from '@chakra-ui/react'
import { useAccount } from 'wagmi'
import AppAlert from '../components/common/AppAlert'
import { useFaucetAccountClaimed, useFaucetClaim } from '../wagmi'
import { useWriteTransaction } from '../hooks/useWriteTransaction'

export default function FaucetContract() {
  const { address } = useAccount()
  const { data: isClaimed } = useFaucetAccountClaimed({
    args: [address!],
    watch: true,
  })

  const {
    write,
    isLoading,
  } = useWriteTransaction(useFaucetClaim(), { description: 'Claim tokens' })

  if (isClaimed === undefined) return <Skeleton h={10} />

  return (
    <AppAlert
      status={isClaimed ? 'success' : 'warning'}
      description={
        isClaimed
          ? 'Looks like you have already claimed your faucet tokens.'
          : 'Click claim to claim your faucet tokens.'
      }
      button={(
        <Button colorScheme="blue" isLoading={isLoading} isDisabled={!!isClaimed} onClick={write}>
          Claim
        </Button>
      )}
    />
  )
}
