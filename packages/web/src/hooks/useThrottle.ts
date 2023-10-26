// eslint-disable @typescript-eslint/no-explicit-any
import { useCallback, useRef } from 'react'

export default function useThrottle(callback: (...args: any[]) => void, delay: number, dependencies: any[] = []) {
  const lastExecutedRef = useRef<any>(0)

  return useCallback(
    (...args: any) => {
      const now = Date.now()
      const timeSinceLastExecution = now - lastExecutedRef.current

      if (timeSinceLastExecution > delay) {
        callback(...args)
        lastExecutedRef.current = now
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [callback, delay, dependencies],
  )
}
