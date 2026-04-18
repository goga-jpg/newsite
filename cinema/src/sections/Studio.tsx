import { lazy, Suspense } from 'react'
import { motion } from 'framer-motion'
import { OFFICES, STATS } from '../lib/data'

const GlyphRotator = lazy(() => import('../three/GlyphRotator'))

export default function Studio() {
  return (
    <section id="studio" className="relative py-28 md:py-40 overflow-hidden bg-ink border-t border-white/5">
      {/* giant watermark wordmark */}
      <div className="absolute inset-x-0 top-10 md:top-20 flex justify-center pointer-events-none select-none">
        <div className="display text-[28vw] leading-none text-white/[0.025] whitespace-nowrap">
          STUDIO · 5DM
        </div>
      </div>

      <div className="relative max-w-[1920px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-16 lg:gap-24 items-start">
          <div>
            <div className="flex items-center gap-3 eyebrow mb-6">
              <div className="w-8 h-8">
                <Suspense fallback={null}>
                  <GlyphRotator color="#ca003d" />
                </Suspense>
              </div>
              <span>The studio · Est. 2014</span>
            </div>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-15%' }}
              transition={{ duration: 1, ease: [0.2, 0.8, 0.2, 1] }}
              className="display text-[10vw] md:text-[6.5vw] leading-[0.92]"
            >
              Built for
              <br />
              <span className="text-crimson">two-second</span>
              <br />
              scrolls &
              <br />
              <span className="italic font-light">twenty-year</span>
              <br />
              brands.
            </motion.h2>

            <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 border border-white/10 max-w-2xl">
              {STATS.map((s) => (
                <div key={s.l} className="bg-ink p-5">
                  <div className="display text-2xl md:text-3xl">{s.k}</div>
                  <div className="mono text-[9px] uppercase tracking-[0.25em] text-paper/50 mt-2">
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:pt-20">
            <p className="text-paper/75 text-base md:text-lg leading-relaxed max-w-md">
              A pan-African cinematic studio. We don't sell campaigns — we ship titles. Products
              that outlive the media buy. Each one a universe built on the same intelligence
              engine, crewed by producers fluent in twenty-three languages across four studios.
            </p>

            <div className="mt-10 border-t border-white/10 pt-8">
              <div className="eyebrow mb-5">Our studios</div>
              <ul className="divide-y divide-white/10">
                {OFFICES.map((o) => (
                  <li key={o.city} className="py-4 flex items-baseline justify-between gap-4 group">
                    <div>
                      <div className="display text-xl md:text-2xl group-hover:text-crimson transition-colors">
                        {o.city}
                      </div>
                      <div className="mono text-[10px] uppercase tracking-[0.25em] text-paper/45">
                        {o.country}
                      </div>
                    </div>
                    <div className="mono text-[11px] text-paper/60">{o.tz}</div>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="#contact"
              data-cursor="Talk"
              className="mt-10 inline-flex items-center gap-4 mono text-[11px] tracking-[0.3em] uppercase border border-white/25 text-paper px-6 py-4 hover:bg-crimson hover:border-crimson transition-colors"
            >
              Start a project
              <span className="inline-block w-2 h-2 border-t border-r border-current rotate-45" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
