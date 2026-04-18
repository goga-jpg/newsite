import { useEffect, useState } from 'react'

export default function ScrollProgress() {
  const [p, setP] = useState(0)
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement
      const scrolled = h.scrollTop / (h.scrollHeight - h.clientHeight)
      setP(Math.max(0, Math.min(1, scrolled)))
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <div className="fixed top-0 left-0 right-0 h-[2px] z-[60] bg-transparent">
      <div className="h-full bg-acid transition-[width] duration-100" style={{ width: `${p * 100}%` }} />
    </div>
  )
}
