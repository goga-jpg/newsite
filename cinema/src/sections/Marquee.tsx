const WORDS = [
  'Intelligence',
  'Creative',
  'Media',
  'Ventures',
  'Audience Path',
  'Creative Path',
  'Media Path',
  'Happy Hour',
  'Content Cabal',
  'Chlorophyll',
]

export default function Marquee() {
  const row = WORDS.concat(WORDS)
  return (
    <section className="relative border-y border-white/10 overflow-hidden bg-crimson text-ink">
      <div className="flex gap-12 py-6 md:py-8 whitespace-nowrap animate-[marquee_38s_linear_infinite]">
        {row.map((w, i) => (
          <span key={i} className="display text-4xl md:text-6xl inline-flex items-center gap-12">
            {w}
            <span className="w-2 h-2 rounded-full bg-ink shrink-0" />
          </span>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  )
}
