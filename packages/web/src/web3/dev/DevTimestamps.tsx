import { CopyIcon, RepeatClockIcon } from '@chakra-ui/icons'
import {
  Button,
  HStack,
  Heading,
  IconButton,
  Input,
  Stat,
  StatGroup,
  StatHelpText,
  StatLabel,
  StatNumber,
  VStack,
  useClipboard,
} from '@chakra-ui/react'
import { DateTime, type DurationLike } from 'luxon'
import type React from 'react'
import { useState } from 'react'
import { useBlock } from 'wagmi'
import { useRefreshOnNewBlock } from '../../wagmi'

export default function DevTimestamps() {
  const { data: currentBlock, queryKey } = useBlock()
  useRefreshOnNewBlock(queryKey)
  const currentBlockTimestamp = currentBlock?.timestamp
  const [currentTimestamp, setCurrentTimestamp] = useState(Number(currentBlockTimestamp))
  const [input, setInput] = useState('')
  const { onCopy } = useClipboard(currentTimestamp ? currentTimestamp.toString() : '')

  const onClickReset = () => setCurrentTimestamp(Number(currentBlockTimestamp))

  const onClickSetNewTimestamp = () => {
    const parsedDate = Date.parse(input)
    const date = Number.isNaN(parsedDate) ? DateTime.fromSeconds(Number(input)) : DateTime.fromMillis(parsedDate)

    if (date.isValid) {
      setCurrentTimestamp(date.toSeconds())
    } else {
      console.error('Invalid date')
    }
  }

  const onClickAdvance = (duration: DurationLike) => {
    currentTimestamp && setCurrentTimestamp(DateTime.fromSeconds(currentTimestamp).plus(duration).toSeconds())
  }

  return (
    <VStack align="stretch" spacing={5} mt={5}>
      <Heading size="md">Timestamps</Heading>

      <StatGroup alignItems="stretch">
        <Stat>
          <StatLabel>Current Block</StatLabel>
          <StatNumber>
            {currentBlock &&
              DateTime.fromSeconds(Number(currentBlock.timestamp)).toLocaleString(DateTime.DATETIME_SHORT)}
          </StatNumber>
          <StatHelpText>
            {currentBlock?.timestamp.toString()}
            <IconButton aria-label="Copy" icon={<CopyIcon />} ml={2} variant="ghost" onClick={onCopy} />
          </StatHelpText>
        </Stat>
      </StatGroup>

      <HStack wrap="wrap" spacing={2}>
        <Button onClick={onClickReset}>
          <RepeatClockIcon />
        </Button>
        <Button onClick={() => onClickAdvance({ hours: 1 })}>+1h</Button>
        <Button onClick={() => onClickAdvance({ hours: 3 })}>+3h</Button>
        <Button onClick={() => onClickAdvance({ days: 1 })}>+1d</Button>
        <Button onClick={() => onClickAdvance({ days: 2 })}>+2d</Button>
        <Button onClick={() => onClickAdvance({ days: 3 })}>+3d</Button>
        <Button onClick={() => onClickAdvance({ days: 4 })}>+4d</Button>
        <Button onClick={() => onClickAdvance({ days: 5 })}>+5d</Button>
        <Button onClick={() => onClickAdvance({ days: 7 })}>+7d</Button>
        <Button onClick={() => onClickAdvance({ days: 30 })}>+7d</Button>
      </HStack>

      <Input
        my={5}
        variant="filled"
        placeholder="Timestamp / Date"
        value={input}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => setInput(event.target.value)}
      />

      <HStack wrap="wrap" spacing={2} isInline>
        <Button onClick={onClickSetNewTimestamp}>Set</Button>
      </HStack>
    </VStack>
  )
}
