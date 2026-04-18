import { useRef, MouseEvent, ReactNode } from 'react'

export default function TiltCard({
  children,
  className = '',
  max = 8,
  glare = true,
  style,
  ...rest
}: {
  children: ReactNode
  className?: string
  max?: number
  glare?: boolean
  style?: React.CSSProperties
} & React.HTMLAttributes<HTMLDivElement>) {
  const ref = useRef<HTMLDivElement>(null)
  const glareRef = useRef<HTMLDivElement>(null)

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height
    const rx = (y - 0.5) * -2 * max
    const ry = (x - 0.5) * 2 * max
    el.style.transform = `perspective(1200px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(0)`
    if (glareRef.current) {
      glareRef.current.style.background = `radial-gradient(circle at ${x * 100}% ${y * 100}%, rgba(255,255,255,0.25), rgba(255,255,255,0) 55%)`
    }
  }

  const onLeave = () => {
    const el = ref.current
    if (el) el.style.transform = 'perspective(1200px) rotateX(0) rotateY(0) translateZ(0)'
    if (glareRef.current) glareRef.current.style.background = 'transparent'
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`relative transition-transform duration-300 ease-out will-change-transform ${className}`}
      style={{ transformStyle: 'preserve-3d', ...style }}
      {...rest}
    >
      {children}
      {glare && (
        <div
          ref={glareRef}
          className="absolute inset-0 pointer-events-none transition-[background] duration-150"
        />
      )}
    </div>
  )
}
