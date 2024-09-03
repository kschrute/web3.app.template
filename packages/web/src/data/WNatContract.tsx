'use client'

import { CheckIcon } from '@chakra-ui/icons'
import {
  Box,
  type BoxProps,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
} from '@chakra-ui/react'
import React from 'react'
import { formatEther, parseEther } from 'viem'
import { useAccount, useBalance } from 'wagmi'
import AppAlert from '../components/common/AppAlert'
import useDebounce from '../hooks/useDebounce'
import { useReadWNatBalanceOf, useRefreshOnNewBlock, useWriteSmartContract, wNatAbi, wNatAddress } from '../wagmi'
import ApprovalRequired from '../web3/ApprovalRequired'

export default function WNatContract() {
  return (
    <AppAlert status="info" showIcon={false}>
      <Box flex="100%" p={0}>
        <Heading size="lg" mb={5}>
          Wrapped Native Token
        </Heading>
        <Flex bg="gray1" gap={5} alignItems="center" justifyContent="flex-start">
          <Balance flex={0} bg="green1" />
          <Flex bg="yellow1" flex={1} gap={5} flexDirection="column">
            <Deposit flex={1} />
            <Withdraw flex={1} />
          </Flex>
        </Flex>
        <Approval />
      </Box>
    </AppAlert>
  )
}

function Balance({ ...props }: BoxProps) {
  const { address } = useAccount()
  const { data: balance, queryKey } = useReadWNatBalanceOf({ args: [address] })
  useRefreshOnNewBlock(queryKey)

  return (
    <Box borderWidth={1} borderRadius="lg" p={3} pb={1} {...props}>
      <Stat>
        <StatLabel>WNAT</StatLabel>
        <StatNumber>{balance !== undefined && formatEther(balance)}</StatNumber>
        <StatHelpText>balance</StatHelpText>
      </Stat>
    </Box>
  )
}

function Deposit({ ...props }: BoxProps) {
  const { address } = useAccount()
  const { data: balanceNative, refetch, queryKey } = useBalance({ address })
  const [amount, setAmount] = React.useState('1')
  const debouncedAmount = useDebounce(amount, 500)
  useRefreshOnNewBlock(queryKey)

  const { write, isLoading, isPending } = useWriteSmartContract({
    abi: wNatAbi,
    address: wNatAddress,
    functionName: 'deposit',
    description: `Wrap ${amount} ETH`,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setAmount(e.target.value)

  const onClick = async () => {
    await write({
      value: parseEther(debouncedAmount),
    })
  }

  const onClickMax = () => {
    if (balanceNative !== undefined) {
      const maxAmount = balanceNative.value - parseEther('0.1')
      if (maxAmount > 0) {
        setAmount(formatEther(maxAmount))
      }
    }
  }

  return (
    <Box {...props}>
      <InputGroup gap={5}>
        <InputGroup>
          <Input placeholder="Amount, ETH" value={amount} onChange={handleChange} />
          <InputRightElement mx={2}>
            <Button variant="link" onClick={onClickMax}>
              max
            </Button>
          </InputRightElement>
        </InputGroup>
        <Button colorScheme="blue" isLoading={isLoading || isPending} onClick={onClick}>
          Wrap
        </Button>
      </InputGroup>
    </Box>
  )
}

function Withdraw({ ...props }: BoxProps) {
  const { address } = useAccount()

  if (!address) return null

  const [amount, setAmount] = React.useState('')
  const debouncedAmount = useDebounce(amount, 500)
  const { data: balance, queryKey } = useReadWNatBalanceOf({ args: [address] })
  useRefreshOnNewBlock(queryKey)

  const { write, isLoading, isPending } = useWriteSmartContract({
    abi: wNatAbi,
    address: wNatAddress,
    functionName: 'withdraw',
    description: `Unwrap ${amount} WNAT`,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setAmount(e.target.value)

  // React.useEffect(() => {
  //   if (balance === undefined) return
  //   if (balance > 0) setAmount(formatEther(balance))
  //   else setAmount('')
  // }, [balance])

  const onClick = async () => {
    await write({
      args: [parseEther(debouncedAmount)],
    })
  }

  const onClickMax = () => {
    if (balance !== undefined && balance > 0) setAmount(formatEther(balance))
    else setAmount('0')
  }

  return (
    <Box {...props}>
      <InputGroup gap={5}>
        <InputGroup>
          <Input placeholder="Amount, WNAT" value={amount} onChange={handleChange} />
          <InputRightElement mx={2}>
            <Button variant="link" onClick={onClickMax}>
              max
            </Button>
          </InputRightElement>
        </InputGroup>
        <Button colorScheme="blue" isLoading={isLoading || isPending} onClick={onClick}>
          Unwrap
        </Button>
      </InputGroup>
    </Box>
  )
}

function Approval() {
  const [amount, setAmount] = React.useState('10')
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setAmount(e.target.value)

  return (
    <Box my={5}>
      <ButtonGroup gap={3} width="100%">
        <Input placeholder="Amount to approve" value={amount} type="number" onChange={handleChange} />
        <ApprovalRequired
          amount={parseEther(amount)}
          spender="0x000000000000000000000000000000000000dead"
          tokenName="WNAT"
        >
          <Button colorScheme="green" variant="ghost" isDisabled>
            <CheckIcon /> Approved
          </Button>
        </ApprovalRequired>
      </ButtonGroup>
    </Box>
  )
}
