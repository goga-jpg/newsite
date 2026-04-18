import { motion } from 'framer-motion'
import TiltCard from '../components/TiltCard'
import TileArt from '../components/TileArt'
import { TITLES } from '../lib/data'

export default function Featured() {
  const t = TITLES[0] // Audience Path — flagship

  return (
    <section id="featured" className="relative py-24 md:py-36 px-6 md:px-10">
      <div className="max-w-[1920px] mx-auto">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-10 md:mb-16">
          <div>
            <div className="eyebrow mb-4">
              <span className="text-crimson mr-2">■</span> Now showing · Flagship
            </div>
            <h2 className="display text-5xl md:text-7xl">Feature title</h2>
          </div>
          <a href="#titles" data-cursor="View all" className="mono text-[11px] tracking-[0.3em] uppercase text-paper/60 hover:text-crimson transition-colors">
            View all titles →
          </a>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-15%' }}
          transition={{ duration: 1, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <TiltCard max={6} className="group">
            <a
              href="#titles"
              data-cursor="Enter"
              className="relative block aspect-[16/9] w-full overflow-hidden bg-ink corner text-paper"
            >
              <TileArt title={t} />
              <div className="absolute inset-0 scan opacity-30 mix-blend-overlay" />

              {/* meta top */}
              <div className="absolute top-6 md:top-8 left-6 md:left-10 right-6 md:right-10 flex items-center justify-between mono text-[10px] md:text-[11px] tracking-[0.3em] uppercase text-paper/80">
                <span>
                  <span className="text-crimson">▲</span> {t.kicker}
                </span>
                <span>{t.year} · Flagship</span>
              </div>

              {/* bottom meta */}
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-10 lg:p-14 flex flex-col gap-6">
                <div className="max-w-3xl">
                  <div className="mono text-[11px] tracking-[0.3em] uppercase text-paper/70 mb-4">
                    {t.tagline}
                  </div>
                  <h3 className="display text-[10vw] md:text-[7vw] leading-[0.88]">
                    {t.name}
                  </h3>
                </div>

                <div className="flex flex-wrap items-end justify-between gap-6">
                  <p className="text-paper/80 max-w-md text-sm md:text-base leading-relaxed">
                    {t.description}
                  </p>

                  <div className="flex items-end gap-8">
                    <div>
                      <div className="display text-4xl md:text-5xl" style={{ color: t.hex }}>
                        {t.stat.k}
                      </div>
                      <div className="mono text-[10px] uppercase tracking-[0.25em] text-paper/50 mt-1">
                        {t.stat.l}
                      </div>
                    </div>
                    <div className="inline-flex items-center gap-3 mono text-[11px] tracking-[0.3em] uppercase border border-paper px-5 py-3 group-hover:bg-paper group-hover:text-ink transition-colors">
                      Enter title
                      <span className="inline-block w-2 h-2 border-t border-r border-current rotate-45" />
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </TiltCard>
        </motion.div>

        {/* supporting rail */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 border border-white/10">
          {[
            { k: '6', l: 'Titles in the slate' },
            { k: '4', l: 'African studios' },
            { k: '200+', l: 'Campaigns shipped' },
            { k: '250M+', l: 'Continental reach' },
          ].map((it) => (
            <div key={it.l} className="bg-ink p-6 md:p-8">
              <div className="display text-3xl md:text-4xl">{it.k}</div>
              <div className="mono text-[10px] uppercase tracking-[0.3em] text-paper/50 mt-2">{it.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
