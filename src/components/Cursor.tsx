import { useEffect, useRef, useState } from 'react'

export default function Cursor() {
  const ref = useRef<HTMLDivElement>(null)
  const [hover, setHover] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    let x = 0,
      y = 0,
      tx = 0,
      ty = 0
    const onMove = (e: MouseEvent) => {
      tx = e.clientX
      ty = e.clientY
      const t = e.target as HTMLElement
      if (t && (t.closest('a') || t.closest('button'))) {
        setHover(true)
      } else {
        setHover(false)
      }
    }
    let raf = 0
    const loop = () => {
      x += (tx - x) * 0.18
      y += (ty - y) * 0.18
      el.style.transform = `translate(${x}px, ${y}px)`
      raf = requestAnimationFrame(loop)
    }
    window.addEventListener('mousemove', onMove)
    loop()
    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div
      ref={ref}
      className="pointer-events-none fixed top-0 left-0 z-[100] hidden md:block -translate-x-1/2 -translate-y-1/2 transition-all duration-200"
      style={{
        width: hover ? 56 : 14,
        height: hover ? 56 : 14,
        marginLeft: hover ? -28 : -7,
        marginTop: hover ? -28 : -7,
        borderRadius: '50%',
        border: '1px solid #C9FF3B',
        mixBlendMode: 'difference',
        background: hover ? 'rgba(201, 255, 59, 0.1)' : 'transparent',
      }}
    />
  )
}
