import React from 'react'
import {
  Button,
  Divider,
  Heading,
  HStack,
  Stat,
  StatGroup,
  StatHelpText,
  StatLabel,
  StatNumber,
  VStack
} from '@chakra-ui/react'
import { DateTime } from 'luxon'
import { useBlock } from 'wagmi'
import { useRefreshOnNewBlock } from '../../wagmi'
import useDevHelpers from '../hooks/useDevHelpers'
import DevTimestamps from './DevTimestamps'

export default function DevEVM() {
  const { advance } = useDevHelpers()
  const { data: currentBlock, queryKey } = useBlock()
  useRefreshOnNewBlock(queryKey)

  return (
    <VStack align="stretch" spacing={5} mt={5}>
      <Heading size="lg" textAlign="center">
        EVM Dev Tools
      </Heading>

      <StatGroup alignItems="stretch">
        <Stat>
          <StatLabel>Block</StatLabel>
          <StatNumber>{currentBlock && Number(currentBlock.number)}</StatNumber>
          <StatHelpText>Current block #</StatHelpText>
        </Stat>

        <Stat>
          <StatLabel>Time</StatLabel>
          <StatNumber whiteSpace="nowrap">
            {currentBlock &&
              DateTime.fromSeconds(Number(currentBlock.timestamp)).toLocaleString(DateTime.DATETIME_SHORT)}
          </StatNumber>
          <StatHelpText>{currentBlock && currentBlock.timestamp.toString()}</StatHelpText>
        </Stat>
      </StatGroup>

      {/* ----------------------------------------------------------------------------- */}
      {/* Advance time */}
      {/* ----------------------------------------------------------------------------- */}

      <Heading size="md" mt={10}>
        Advance time with a single block
      </Heading>

      <HStack spacing={2}>
        {/*<Button onClick={onClickMineBlock}>—</Button>*/}
        <Button onClick={() => advance(0)}>00:00</Button>
        <Button onClick={() => advance(0, 1)}>1h</Button>
        <Button onClick={() => advance(0, 2)}>2h</Button>
        <Button onClick={() => advance(0, 3)}>3h</Button>
        <Button onClick={() => advance(0, 6)}>6h</Button>
        <Button onClick={() => advance(0, 12)}>12h</Button>
        <Button onClick={() => advance(0, 24)}>24h</Button>
      </HStack>

      <HStack spacing={2}>
        <Button onClick={() => advance(1)}>1d</Button>
        <Button onClick={() => advance(2)}>2d</Button>
        <Button onClick={() => advance(3)}>3d</Button>
        <Button onClick={() => advance(4)}>4d</Button>
        <Button onClick={() => advance(5)}>5d</Button>
        <Button onClick={() => advance(7)}>7d</Button>
        <Button onClick={() => advance(10)}>10d</Button>
        <Button onClick={() => advance(14)}>14d</Button>
        <Button onClick={() => advance(21)}>21d</Button>
        <Button onClick={() => advance(30)}>30d</Button>
      </HStack>

      <HStack spacing={2}>
        <Button onClick={() => advance((365 / 12) * 1)}>1m</Button>
        <Button onClick={() => advance((365 / 12) * 2)}>2m</Button>
        <Button onClick={() => advance((365 / 12) * 3)}>3m</Button>
        <Button onClick={() => advance((365 / 12) * 4)}>4m</Button>
        <Button onClick={() => advance((365 / 12) * 5)}>5m</Button>
        <Button onClick={() => advance((365 / 12) * 6)}>6m</Button>
        <Button onClick={() => advance((365 / 12) * 7)}>7m</Button>
        <Button onClick={() => advance((365 / 12) * 8)}>8m</Button>
        <Button onClick={() => advance((365 / 12) * 9)}>9m</Button>
        <Button onClick={() => advance((365 / 12) * 10)}>10m</Button>
        <Button onClick={() => advance((365 / 12) * 11)}>11m</Button>
        <Button onClick={() => advance(365)}>1y</Button>
      </HStack>

      <Divider />

      {/* ----------------------------------------------------------------------------- */}
      {/* Timestamps */}
      {/* ----------------------------------------------------------------------------- */}

      <DevTimestamps />

    </VStack>
  )
}
