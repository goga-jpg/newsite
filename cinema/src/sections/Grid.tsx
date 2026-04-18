import { motion } from 'framer-motion'
import TiltCard from '../components/TiltCard'
import TileArt from '../components/TileArt'
import { TITLES, Title } from '../lib/data'

function Tile({ title, i }: { title: Title; i: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-12%' }}
      transition={{ duration: 0.9, delay: (i % 3) * 0.08, ease: [0.2, 0.8, 0.2, 1] }}
    >
      <TiltCard max={9} className="group shine-trigger">
        <a
          href={`#${title.key}`}
          data-cursor="Play"
          className="relative block aspect-[3/4] overflow-hidden bg-ink corner text-paper"
        >
          <TileArt title={title} />
          <div className="absolute inset-0 scan opacity-25 mix-blend-overlay" />
          <div className="absolute inset-0 shine pointer-events-none" />

          {/* top chip */}
          <div className="absolute top-5 left-5 right-5 flex items-center justify-between mono text-[10px] tracking-[0.3em] uppercase text-paper/85">
            <span className="inline-flex items-center gap-2">
              <span
                className="w-2 h-2 rounded-full"
                style={{ background: title.hex }}
              />
              0{i + 1}
            </span>
            <span>{title.year}</span>
          </div>

          {/* bottom meta */}
          <div className="absolute inset-x-0 bottom-0 p-6 md:p-7">
            <div className="mono text-[10px] tracking-[0.3em] uppercase text-paper/60 mb-3">
              {title.kicker}
            </div>
            <h3 className="display text-3xl md:text-4xl leading-[0.92]">
              {title.name}
            </h3>
            <p className="mt-3 text-paper/75 text-[13px] leading-relaxed line-clamp-2">
              {title.tagline}
            </p>

            <div className="mt-5 pt-5 border-t border-white/15 flex items-end justify-between gap-4">
              <div>
                <div className="display text-2xl" style={{ color: title.hex }}>
                  {title.stat.k}
                </div>
                <div className="mono text-[9px] uppercase tracking-[0.25em] text-paper/45 mt-1">
                  {title.stat.l}
                </div>
              </div>
              <span className="inline-flex items-center justify-center w-10 h-10 border border-paper/50 group-hover:bg-paper group-hover:text-ink transition-colors">
                <span className="block w-2 h-2 border-t border-r border-current rotate-45 -ml-0.5" />
              </span>
            </div>
          </div>
        </a>
      </TiltCard>
    </motion.article>
  )
}

export default function Grid() {
  return (
    <section id="titles" className="relative py-24 md:py-36 px-6 md:px-10 bg-ink">
      <div className="max-w-[1920px] mx-auto">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-12 md:mb-16">
          <div>
            <div className="eyebrow mb-4">
              <span className="text-crimson mr-2">■</span> The slate · Six titles
            </div>
            <h2 className="display text-5xl md:text-7xl max-w-[18ch]">
              Six worlds. <span className="text-crimson">One universe.</span>
            </h2>
          </div>
          <p className="text-paper/60 max-w-md text-sm md:text-base leading-relaxed">
            Every title is a self-contained product — built on the same intelligence engine,
            shipped with the same creative velocity.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {TITLES.map((t, i) => (
            <Tile key={t.key} title={t} i={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
