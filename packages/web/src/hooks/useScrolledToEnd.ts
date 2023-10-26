import { useEffect, useState } from 'react'

export default function useScrolledToEnd() {
  const [scrolledToEnd, setScrolledToEnd] = useState(false)

  useEffect(() => {
    function handleScroll() {
      const target = document.body
      const html = document.documentElement
      const scrollPosition = window.scrollY
      const { clientHeight } = html
      const documentHeight = target.scrollHeight
      const isAtBottom = scrollPosition + clientHeight >= documentHeight - 100

      setScrolledToEnd(isAtBottom)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return scrolledToEnd
}
