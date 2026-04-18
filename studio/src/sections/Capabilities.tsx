import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { CAPABILITIES } from '../lib/data'
import SectionLabel from '../components/SectionLabel'

function CapabilityCard({ cap, i }: { cap: typeof CAPABILITIES[0]; i: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [40, -40])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-15%' }}
      transition={{ duration: 0.7, delay: i * 0.1 }}
      style={{ y }}
      className="group relative border-t border-paper/10 py-10 md:py-14"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-start">
        <div className="md:col-span-2">
          <span className="mono text-[11px] tracking-[0.3em] text-crimson">{cap.n}</span>
        </div>
        <div className="md:col-span-5">
          <h3 className="display text-4xl md:text-6xl font-medium leading-tight">
            {cap.name}
          </h3>
          <div className="display-italic text-paper/60 text-xl md:text-2xl mt-3">
            {cap.tagline}
          </div>
        </div>
        <div className="md:col-span-5 md:pt-4">
          <p className="text-paper/70 text-base md:text-lg leading-relaxed">{cap.body}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {cap.tags.map((t) => (
              <span
                key={t}
                className="mono text-[10px] uppercase tracking-widest px-3 py-1.5 border border-paper/15 rounded-full hover:border-crimson hover:text-crimson transition-colors"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
      {/* hover line */}
      <div className="absolute left-0 top-0 h-px w-0 bg-crimson group-hover:w-full transition-all duration-1000" />
    </motion.div>
  )
}

export default function Capabilities() {
  return (
    <section id="capabilities" className="relative py-32 md:py-40 bg-ink">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10">
        <SectionLabel n="02" label="Capabilities" />

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="display text-5xl md:text-7xl lg:text-8xl font-semibold mt-8 mb-20 max-w-5xl"
        >
          Three paths.{' '}
          <span className="display-italic text-crimson font-normal">One</span>{' '}
          intelligence engine.
        </motion.h2>

        <div>
          {CAPABILITIES.map((c, i) => (
            <CapabilityCard key={c.n} cap={c} i={i} />
          ))}
          <div className="border-t border-paper/10" />
        </div>
      </div>
    </section>
  )
}
