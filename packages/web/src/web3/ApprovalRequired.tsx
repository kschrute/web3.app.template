import React, { ReactNode } from 'react'
import { BoxProps, Button, Flex, Skeleton } from '@chakra-ui/react'
import { useAccount } from 'wagmi'
import { formatEther } from 'viem'
import {
  useReadWNatAllowance,
  useReadWNatBalanceOf,
  useRefreshOnNewBlock,
  useWriteSmartContract,
  wNatAbi,
  wNatAddress
} from '../wagmi'
import { formatTokenValue } from './utils'

type Props = {
  amount: bigint
  spender: `0x${string}`
  tokenName: string
  isDisabled?: boolean
  children?: ReactNode
} & BoxProps

export default function ApprovalRequired({ amount, spender, tokenName, isDisabled = false, children, ...rest }: Props) {
  const { address } = useAccount()
  const { data: balance, queryKey } = useReadWNatBalanceOf({ args: [address!] })
  const { data: allowance, queryKey: queryKeyAllowance } = useReadWNatAllowance({ args: [address!, spender] })
  useRefreshOnNewBlock(queryKey)
  useRefreshOnNewBlock(queryKeyAllowance)

  if (amount === undefined || balance === undefined || allowance === undefined) return <Skeleton h={10} w={50} />

  if (balance < amount) {
    return (
      <Flex justifyContent="center" {...rest}>
        <Deposit amount={amount} tokenName={tokenName} isDisabled={isDisabled} />
      </Flex>
    )
  }

  if (allowance < amount) {
    return (
      <Flex justifyContent="center" {...rest}>
        <Approve amount={amount} spender={spender} tokenName={tokenName} isDisabled={isDisabled} />
      </Flex>
    )
  }

  return children
}

function Deposit({ amount, tokenName, isDisabled }: { amount: bigint; tokenName: string; isDisabled: boolean }) {
  const { address } = useAccount()
  const { data: balance, queryKey } = useReadWNatBalanceOf({ args: [address!] })
  const needToWrap = balance !== undefined ? amount - balance : undefined
  useRefreshOnNewBlock(queryKey)

  const { write, isLoading, isPending } = useWriteSmartContract({
    abi: wNatAbi,
    address: wNatAddress,
    functionName: 'deposit',
    description: `Wrap ${needToWrap !== undefined ? formatEther(needToWrap) : ''} ${tokenName}`,
  })

  const onClick = async () => {
    await write({
      value: needToWrap,
    })
  }

  if (amount === undefined || balance === undefined) return <Skeleton h={10} w={50} />

  return (
    <Button isDisabled={isDisabled} isLoading={isLoading || isPending} onClick={onClick}>
      Wrap {needToWrap !== undefined && formatEther(needToWrap)} {tokenName}
    </Button>
  )
}

function Approve({
  amount,
  spender,
  tokenName,
  isDisabled,
}: {
  amount: bigint
  spender: `0x${string}`
  tokenName: string
  isDisabled: boolean
}) {
  const { write, isLoading, isPending } = useWriteSmartContract({
    abi: wNatAbi,
    address: wNatAddress,
    functionName: 'approve',
    description: `Approve ${formatEther(amount)} ${tokenName}`,
  })

  const onClick = async () => {
    await write({ args: [spender, amount!] })
  }

  return (
    <Button isDisabled={isDisabled} isLoading={isLoading || isPending} onClick={onClick}>
      Approve {amount !== undefined && formatTokenValue(formatEther(amount))} {tokenName}
    </Button>
  )
}
