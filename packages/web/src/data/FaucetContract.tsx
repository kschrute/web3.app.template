'use client'

import { Button, Skeleton } from '@chakra-ui/react'
import React from 'react'
import { useAccount } from 'wagmi'
import AppAlert from '../components/common/AppAlert'
import {
  faucetAbi,
  faucetAddress,
  useReadFaucetAccountClaimed,
  useRefreshOnNewBlock,
  useWriteSmartContract,
} from '../wagmi'

export default function FaucetContract() {
  const { address } = useAccount()
  const { data: isClaimed, queryKey } = useReadFaucetAccountClaimed({
    args: [address],
  })
  useRefreshOnNewBlock(queryKey)

  const { write, isLoading, isPending } = useWriteSmartContract({
    abi: faucetAbi,
    address: faucetAddress,
    functionName: 'claim',
    description: 'Claim tokens',
  })

  const onClick = async () => {
    await write({})
  }

  if (isClaimed === undefined) return <Skeleton h={10} />

  return (
    <AppAlert
      status={isClaimed ? 'success' : 'warning'}
      description={
        isClaimed
          ? 'Looks like you have already claimed your faucet tokens.'
          : 'Click claim to claim your faucet tokens.'
      }
      button={
        <Button colorScheme="blue" isLoading={isLoading || isPending} isDisabled={!!isClaimed} onClick={onClick}>
          Claim
        </Button>
      }
    />
  )
}
