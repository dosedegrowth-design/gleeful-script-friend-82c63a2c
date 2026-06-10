import { useEffect, useRef } from 'react'

export function useScrollSync() {
  const progressRef = useRef(0)
  const targetRef   = useRef(0)

  useEffect(() => {
    const onScroll = () => {
      const max = document.body.scrollHeight - window.innerHeight
      targetRef.current = max > 0 ? window.scrollY / max : 0
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    // Initial check
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return { progressRef, targetRef }
}
