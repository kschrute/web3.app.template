import { useEffect, useMemo, useState } from 'react'
import useDebounce from './useDebounce'

export const useHasReachedBottom = (ready = true, callback?: () => any) => {
  const [hasReachedBottom, setHasReachedBottom] = useState<boolean>(false)
  const hasReachedBottomDebounced = useDebounce<boolean>(hasReachedBottom, 500)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleScroll = () => {
    const target = document.body
    const html = document.documentElement
    const scrollPosition = window.scrollY
    const clientHeight = html.clientHeight
    const documentHeight = target.scrollHeight
    const isBottom = scrollPosition + clientHeight >= documentHeight - 100

    setHasReachedBottom(isBottom)
  }

  useEffect(() => {
    if (hasReachedBottomDebounced && ready && callback) {
      callback()
    }
  }, [hasReachedBottomDebounced, ready, callback])

  return useMemo(() => hasReachedBottomDebounced, [hasReachedBottomDebounced])
}
