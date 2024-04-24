import { useEffect, useMemo } from 'react'
import { useBlockNumber } from 'wagmi'
import { QueryKey, useQueryClient } from '@tanstack/react-query'

export function useRefreshOnNewBlock(queryKey: QueryKey) {
  const queryClient = useQueryClient()
  const { data: blockNumber } = useBlockNumber({ watch: true })

  useEffect(() => {
    queryClient.invalidateQueries({ queryKey })
  }, [blockNumber, queryClient, queryKey])
}
