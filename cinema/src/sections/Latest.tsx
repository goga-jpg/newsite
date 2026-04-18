import { useRef } from 'react'
import { motion } from 'framer-motion'
import { LATEST } from '../lib/data'

const ACCENT: Record<string, string> = {
  crimson: '#ca003d',
  acid: '#C9FF3B',
  magenta: '#FF4DA6',
  electric: '#4DC3FF',
  ember: '#FF6B2C',
  violet: '#9B5CFF',
  jade: '#3BFF91',
}

export default function Latest() {
  const railRef = useRef<HTMLDivElement>(null)

  const scrollBy = (dir: number) => {
    const el = railRef.current
    if (!el) return
    el.scrollBy({ left: dir * (el.clientWidth * 0.8), behavior: 'smooth' })
  }

  return (
    <section id="latest" className="relative py-24 md:py-36 bg-ink border-t border-white/5">
      <div className="max-w-[1920px] mx-auto px-6 md:px-10">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-10 md:mb-14">
          <div>
            <div className="eyebrow mb-4">
              <span className="text-crimson mr-2">■</span> Newsroom · Latest
            </div>
            <h2 className="display text-5xl md:text-7xl">Dispatches.</h2>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => scrollBy(-1)}
              data-cursor="Prev"
              className="w-12 h-12 border border-white/20 flex items-center justify-center hover:border-crimson hover:text-crimson transition-colors"
              aria-label="Previous"
            >
              <span className="block w-2 h-2 border-l border-b border-current rotate-45" />
            </button>
            <button
              onClick={() => scrollBy(1)}
              data-cursor="Next"
              className="w-12 h-12 border border-white/20 flex items-center justify-center hover:border-crimson hover:text-crimson transition-colors"
              aria-label="Next"
            >
              <span className="block w-2 h-2 border-t border-r border-current rotate-45" />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={railRef}
        className="drag-x flex gap-5 md:gap-6 overflow-x-auto snap-x snap-mandatory px-6 md:px-10 mask-fade-r"
      >
        {LATEST.map((item, i) => {
          const hex = ACCENT[item.color] ?? '#ca003d'
          return (
            <motion.a
              key={item.title}
              href="#latest"
              data-cursor="Read"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.7, delay: (i % 4) * 0.06 }}
              className="group snap-start shrink-0 w-[82vw] sm:w-[62vw] md:w-[42vw] lg:w-[30vw] xl:w-[22vw] relative block"
            >
              <div className="relative aspect-[4/5] overflow-hidden corner bg-[#0a0a0a] text-paper">
                {/* color wash */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: `radial-gradient(ellipse at 30% 30%, ${hex}40, transparent 55%), radial-gradient(ellipse at 70% 80%, ${hex}20, transparent 50%), #0a0a0a`,
                  }}
                />
                {/* grid */}
                <div
                  className="absolute inset-0 opacity-40"
                  style={{
                    backgroundImage:
                      'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)',
                    backgroundSize: '28px 28px',
                  }}
                />

                {/* number */}
                <div className="absolute top-6 left-6 right-6 flex items-start justify-between">
                  <span className="mono text-[10px] tracking-[0.3em] uppercase text-paper/80">
                    {String(i + 1).padStart(2, '0')} / {String(LATEST.length).padStart(2, '0')}
                  </span>
                  <span
                    className="mono text-[10px] tracking-[0.3em] uppercase px-2 py-1"
                    style={{ background: hex, color: '#000' }}
                  >
                    {item.tag}
                  </span>
                </div>

                {/* glyph */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className="display text-[30vw] md:text-[14vw] lg:text-[10vw] leading-none opacity-20 group-hover:opacity-50 transition-opacity duration-500"
                    style={{ color: hex }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </div>
                </div>

                <div className="absolute inset-x-0 bottom-0 h-2/3 scrim-b pointer-events-none" />

                <div className="absolute inset-x-0 bottom-0 p-6">
                  <div className="mono text-[10px] tracking-[0.3em] uppercase text-paper/60 mb-3">
                    {item.meta}
                  </div>
                  <h3 className="display text-2xl md:text-[1.8rem] leading-[0.95]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-paper/70 text-sm leading-relaxed line-clamp-3">
                    {item.blurb}
                  </p>

                  <div className="mt-5 inline-flex items-center gap-2 mono text-[11px] tracking-[0.3em] uppercase group-hover:gap-4 transition-all" style={{ color: hex }}>
                    Read
                    <span className="inline-block w-2 h-2 border-t border-r border-current rotate-45" />
                  </div>
                </div>
              </div>
            </motion.a>
          )
        })}
        <div className="shrink-0 w-6 md:w-10" aria-hidden />
      </div>
    </section>
  )
}
