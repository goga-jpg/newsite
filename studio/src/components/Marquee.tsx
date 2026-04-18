export default function Marquee({
  items,
  reverse = false,
  className = '',
}: {
  items: string[]
  reverse?: boolean
  className?: string
}) {
  const loop = [...items, ...items]
  return (
    <div className={`overflow-hidden mask-fade-r ${className}`}>
      <div
        className={`flex gap-16 w-max ${reverse ? 'animate-marquee-r' : 'animate-marquee'}`}
      >
        {loop.map((t, i) => (
          <span key={i} className="whitespace-nowrap flex items-center gap-16">
            {t}
            <span className="text-crimson">✺</span>
          </span>
        ))}
      </div>
    </div>
  )
}
