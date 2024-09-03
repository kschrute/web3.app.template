/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useRef } from 'react'

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export default function useThrottle(callback: (...args: any[]) => void, delay: number, dependencies: any[] = []) {
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  const lastExecutedRef = useRef<any>(0)

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  return useCallback(
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    (...args: any) => {
      const now = Date.now()
      const timeSinceLastExecution = now - lastExecutedRef.current

      if (timeSinceLastExecution > delay) {
        callback(...args)
        lastExecutedRef.current = now
      }
    },
    [callback, delay, dependencies],
  )
}
