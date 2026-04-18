import { motion } from 'framer-motion'
import { Suspense, lazy } from 'react'
import { WORK } from '../lib/data'
import SectionLabel from '../components/SectionLabel'

const Monolith = lazy(() => import('../three/Monolith'))

export default function Work() {
  return (
    <section id="work" className="relative py-32 md:py-40 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10">
        <SectionLabel n="03" label="Work / Ventures" />

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="display text-5xl md:text-7xl lg:text-8xl font-semibold mt-8 mb-20 max-w-4xl"
        >
          Product ventures, <br />
          <span className="display-italic text-crimson font-normal">built in-house</span>.
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Big featured with 3D */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 relative border border-paper/10 rounded-3xl overflow-hidden min-h-[420px] md:min-h-[560px] bg-gradient-to-br from-crimson/20 via-ink to-ink group"
          >
            <div className="absolute inset-0">
              <Suspense fallback={null}>
                <Monolith />
              </Suspense>
            </div>
            <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-between">
              <div>
                <div className="mono text-[10px] uppercase tracking-[0.3em] text-paper/50">
                  Featured Venture
                </div>
              </div>
              <div>
                <div className="mono text-[11px] text-crimson tracking-[0.3em] mb-3">
                  {WORK[0].kind}
                </div>
                <h3 className="display text-5xl md:text-7xl font-medium">{WORK[0].title}</h3>
                <p className="text-paper/70 mt-4 max-w-md">{WORK[0].body}</p>
                <div className="mt-6 flex items-center gap-3">
                  <span className="mono text-[10px] uppercase tracking-widest text-paper/40">
                    View case study
                  </span>
                  <span className="w-8 h-px bg-crimson group-hover:w-16 transition-all duration-500" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Two stacked */}
          <div className="lg:col-span-5 flex flex-col gap-6 lg:gap-8">
            {WORK.slice(1).map((w, i) => (
              <motion.div
                key={w.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex-1 relative border border-paper/10 rounded-3xl overflow-hidden min-h-[250px] p-8 md:p-10 flex flex-col justify-between bg-ink hover:border-crimson/40 transition-colors group"
              >
                <div className="absolute inset-0 kente-stripe opacity-50 group-hover:opacity-100 transition-opacity pointer-events-none" />
                <div className="relative flex items-start justify-between">
                  <span className="mono text-[10px] uppercase tracking-[0.3em] text-paper/50">
                    0{i + 2} / Venture
                  </span>
                  <span className="text-crimson opacity-0 group-hover:opacity-100 transition-opacity">
                    →
                  </span>
                </div>
                <div className="relative">
                  <div className="mono text-[11px] text-crimson tracking-[0.3em] mb-2">
                    {w.kind}
                  </div>
                  <h3 className="display text-3xl md:text-4xl font-medium">{w.title}</h3>
                  <p className="text-paper/60 text-sm mt-3">{w.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
