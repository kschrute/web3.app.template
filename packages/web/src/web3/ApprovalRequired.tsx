import React, { ReactNode } from 'react'
import { BoxProps, Button, Flex, Skeleton } from '@chakra-ui/react'
import { useAccount } from 'wagmi'
import { formatEther } from 'viem'
import { useWNatAllowance, useWNatApprove, useWNatBalanceOf, useWNatDeposit } from '../wagmi'
import { useWriteTransaction } from '../hooks/useWriteTransaction'

type Props = {
  amount: bigint
  spender: `0x${string}`
  tokenName: string
  isDisabled?: boolean
  children?: ReactNode
} & BoxProps

export default function ApprovalRequired({ amount, spender, tokenName, isDisabled = false, children, ...rest }: Props) {
  const { address } = useAccount()
  const { data: balance } = useWNatBalanceOf({
    args: [address!],
    watch: true,
  })

  const { data: allowance } = useWNatAllowance({
    args: [address!, spender],
    watch: true,
  })

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

function Deposit({ amount, tokenName, isDisabled }: { amount: bigint, tokenName: string, isDisabled: boolean }) {
  const { address } = useAccount()
  const { data: balance } = useWNatBalanceOf({
    args: [address!],
    watch: true,
  })

  const needToWrap = balance !== undefined ? amount - balance : undefined

  const { write, isLoading, isPending } = useWriteTransaction(useWNatDeposit({
    value: needToWrap,
  }), { description: `Wrap ${needToWrap !== undefined ? formatEther(needToWrap) : ''} ${tokenName}` })

  if (amount === undefined || balance === undefined) return <Skeleton h={10} w={50} />

  return (
    <Button mr={5} isDisabled={isDisabled} isLoading={isLoading || isPending} onClick={write}>
      Wrap
      {' '}
      {needToWrap !== undefined && formatEther(needToWrap)}
      {' '}
      {tokenName}
    </Button>
  )
}

function Approve({ amount, spender, tokenName, isDisabled }: { amount: bigint, spender: `0x${string}`, tokenName: string, isDisabled: boolean }) {
  const { write, isLoading, isPending } = useWriteTransaction(useWNatApprove({
    args: [spender, amount!],
  }), { description: `Approve ${formatEther(amount)} ${tokenName}` })

  return (
    <Button mr={5} isDisabled={isDisabled} isLoading={isLoading || isPending} onClick={write}>
      Approve
      {' '}
      {amount !== undefined && formatEther(amount)}
      {' '}
      {tokenName}
    </Button>
  )
}
