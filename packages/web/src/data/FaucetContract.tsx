'use client'

import React, { useCallback } from 'react'
import { Button, Skeleton, Spinner } from '@chakra-ui/react'
import AppAlert from '../components/common/AppAlert'
import { useAddRecentTransaction } from '@rainbow-me/rainbowkit'
import { useAccount, useWaitForTransaction } from 'wagmi'
import { useFaucetAccountClaimed, useFaucetClaim } from '../wagmi'

export const FaucetContract = () => {
  const addRecentTransaction = useAddRecentTransaction()
  const { address, isConnecting, isConnected, isDisconnected } = useAccount()
  const { data: isClaimed, refetch } = useFaucetAccountClaimed({
    args: [address!],
    watch: true,
  })
  const { writeAsync, data: dataWrite, error, isLoading, isError } = useFaucetClaim()
  const {
    data: receipt,
    isLoading: isPending,
    isSuccess,
  } = useWaitForTransaction({ hash: dataWrite?.hash })

  const onCLick = useCallback(async () => {
    const tx = await writeAsync?.()
    tx &&
    addRecentTransaction({
      hash: tx.hash,
      description: 'Claim tokens',
    })
  }, [writeAsync, addRecentTransaction])

  if (isClaimed === undefined) return <Skeleton h={10} />

  return (
    <AppAlert
      status={isClaimed ? 'success' : 'warning'}
      description={
        isClaimed
          ? `Looks like you have already claimed your faucet tokens.`
          : `Click claim to claim your faucet tokens.`
      }
      button={
        <Button colorScheme="blue" isDisabled={isLoading || !!isClaimed} onClick={onCLick}>
          {isLoading && <Spinner size="md" mr={2} />} Claim
        </Button>
      }
    />
  )
}
