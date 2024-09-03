import { useEffect } from 'react'

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export default function useDebouncedEffect(effect: () => void, deps: any[], delay: number) {
  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    const handler = setTimeout(() => effect(), delay)

    return () => clearTimeout(handler)
  }, [...(deps || []), delay])
}
