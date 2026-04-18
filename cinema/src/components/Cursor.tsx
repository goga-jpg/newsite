import { useEffect, useRef, useState } from 'react'

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const [label, setLabel] = useState<string | null>(null)
  const [hover, setHover] = useState(false)

  useEffect(() => {
    document.body.classList.add('has-cursor')
    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    let mx = 0, my = 0
    let dx = 0, dy = 0, rx = 0, ry = 0
    const onMove = (e: MouseEvent) => {
      mx = e.clientX
      my = e.clientY
      const t = e.target as HTMLElement
      const interactive = t && (t.closest('a') || t.closest('button'))
      setHover(!!interactive)
      const el = interactive as HTMLElement | null
      setLabel(el?.getAttribute('data-cursor') || null)
    }
    let raf = 0
    const loop = () => {
      dx += (mx - dx) * 0.7
      dy += (my - dy) * 0.7
      rx += (mx - rx) * 0.18
      ry += (my - ry) * 0.18
      dot.style.transform = `translate(${dx}px, ${dy}px)`
      ring.style.transform = `translate(${rx}px, ${ry}px)`
      raf = requestAnimationFrame(loop)
    }
    window.addEventListener('mousemove', onMove)
    loop()
    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
      document.body.classList.remove('has-cursor')
    }
  }, [])

  return (
    <>
      <div
        ref={dotRef}
        className="pointer-events-none fixed top-0 left-0 z-[100] hidden md:block -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-crimson"
      />
      <div
        ref={ringRef}
        className={`pointer-events-none fixed top-0 left-0 z-[100] hidden md:flex items-center justify-center -translate-x-1/2 -translate-y-1/2 rounded-full border transition-all duration-200 mono text-[9px] uppercase tracking-widest ${
          label
            ? 'w-20 h-20 border-paper bg-paper text-ink'
            : hover
            ? 'w-14 h-14 border-crimson bg-crimson/10'
            : 'w-8 h-8 border-paper/30'
        }`}
      >
        {label}
      </div>
    </>
  )
}
