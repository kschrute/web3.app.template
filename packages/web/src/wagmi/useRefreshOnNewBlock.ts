import { type QueryKey, useQueryClient } from '@tanstack/react-query'
import { useEffect } from 'react'
import { useBlockNumber } from 'wagmi'

export function useRefreshOnNewBlock(queryKey: QueryKey) {
  const queryClient = useQueryClient()
  const { data: blockNumber } = useBlockNumber({ watch: true })

  useEffect(() => {
    blockNumber && queryClient.invalidateQueries({ queryKey })
  }, [blockNumber, queryClient, queryKey])
}
