import { useToast } from '@chakra-ui/react'
import { DateTime } from 'luxon'
import { useCallback, useEffect, useRef } from 'react'
import { useBlock, useClient } from 'wagmi'
import { useRefreshOnNewBlock } from '../../wagmi'

export default function useDevHelpers() {
  const publicClient = useClient()
  const toast = useToast()
  const now = useRef<DateTime>()
  const { data: currentBlock, queryKey } = useBlock()
  useRefreshOnNewBlock(queryKey)

  useEffect(() => {
    if (currentBlock) {
      now.current = DateTime.fromSeconds(Number(currentBlock.timestamp))
    }
  }, [currentBlock])

  const mineBlockAt = useCallback(
    async (timestamp: number) => {
      try {
        publicClient &&
          (await publicClient.request({
            // @ts-ignore
            method: 'evm_mine',
            // @ts-ignore
            params: [timestamp],
          }))
      } catch (e) {
        console.error(e)
      }
    },
    [publicClient],
  )

  const advance = useCallback(
    async (days = 1, hours = 0) => {
      if (!now.current) {
        return
      }

      const to =
        !days && !hours ? now.current.endOf('day').plus({ minutes: 1 }) : now.current.plus({ days }).plus({ hours })

      console.log('------------------------------------------------------------------')
      // console.log(`Current block      : ${currentBlock}`)
      // console.log(`Current timestamp  : ${currentBlockTimestamp}`)
      // console.log(`Current time       : ${bcTimestampToDate(currentBlockTimestamp!).toLocaleString()}`)
      console.log(`Advancing ${days} days and ${hours} hours to ${to.toLocaleString(DateTime.DATETIME_SHORT)}`)
      console.log('------------------------------------------------------------------')

      await mineBlockAt(to.toSeconds())
      now.current = to
      const description = `Successfully advanced to ${to.toLocaleString(DateTime.DATETIME_SHORT)}`
      // console.log(description)

      toast({
        title: 'Success',
        description,
        status: 'success',
        position: 'top',
        duration: 2000,
      })
    },
    [mineBlockAt, toast],
  )

  return { advance, mineBlockAt }
}
