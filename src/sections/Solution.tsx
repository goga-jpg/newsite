import { motion } from 'framer-motion'
import { Suspense, lazy } from 'react'
import { SOLUTION } from '../lib/data'

const DataMesh = lazy(() => import('../three/DataMesh'))

export default function Solution() {
  return (
    <section id="solution" className="relative py-32 md:py-40 overflow-hidden">
      <div className="relative max-w-[1600px] mx-auto px-6 md:px-10">
        <div className="flex items-center gap-4 mb-6">
          <span className="section-label">03 / Our Solution</span>
          <span className="h-px flex-1 bg-bone/10" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-20 md:mb-28">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="md:col-span-7 text-display text-5xl md:text-7xl lg:text-8xl font-semibold"
          >
            One integrated <span className="text-acid">intelligence</span> cloud.
            From data to doing.
          </motion.h2>

          <div className="md:col-span-5 relative h-[340px] md:h-auto md:min-h-[340px]">
            <Suspense fallback={null}>
              <DataMesh />
            </Suspense>
            <div className="absolute inset-0 pointer-events-none"
              style={{ background: 'radial-gradient(ellipse at center, transparent 40%, #05060A 100%)' }}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {SOLUTION.map((s, i) => (
            <motion.div
              key={s.no}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: i * 0.15, duration: 0.7 }}
              className="glass glass-hover rounded-3xl p-8 md:p-10 flex flex-col h-full min-h-[380px]"
            >
              <div className="flex items-center justify-between mb-8">
                <span className="text-mono text-xs tracking-widest text-acid">{s.no}</span>
                <div className="w-10 h-10 rounded-full border border-bone/10 flex items-center justify-center">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </div>
              </div>
              <h3 className="text-display text-3xl md:text-4xl font-semibold mb-4">{s.title}</h3>
              <p className="text-bone/60 text-sm leading-relaxed flex-1">{s.body}</p>
              <div className="mt-8 h-px bg-gradient-to-r from-acid/40 via-bone/10 to-transparent" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
