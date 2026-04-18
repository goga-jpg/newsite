import { motion } from 'framer-motion'
import { Suspense, lazy } from 'react'
import { DATA_LAYERS, CHANNELS } from '../lib/data'

const IntelligenceCore = lazy(() => import('../three/IntelligenceCore'))

export default function Architecture() {
  return (
    <section className="relative py-32 md:py-40 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="relative max-w-[1600px] mx-auto px-6 md:px-10">
        <div className="flex items-center gap-4 mb-6">
          <span className="section-label">08 / Architecture</span>
          <span className="h-px flex-1 bg-bone/10" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="md:col-span-8 text-display text-5xl md:text-7xl font-semibold"
          >
            Inside <span className="text-acid">5DM's</span> product architecture.
          </motion.h2>
          <p className="md:col-span-4 text-bone/60 md:pt-4">
            A layered stack built for scale: proprietary data feeds an AI intelligence core,
            which powers three modular paths across every major channel.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left: Data Layer */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 space-y-3"
          >
            <div className="text-mono text-xs text-bone/40 uppercase tracking-widest mb-4">
              Proprietary Data Layer
            </div>
            {DATA_LAYERS.map((layer, i) => (
              <motion.div
                key={layer.name}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="glass rounded-2xl p-4 border-l-2 border-l-acid/60"
              >
                <div className="text-mono text-[10px] text-acid">L{i + 1}</div>
                <div className="text-bone font-medium mt-1">{layer.name}</div>
                <div className="text-xs text-bone/50 mt-1">{layer.detail}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Center: Intelligence Core */}
          <div className="lg:col-span-6 relative min-h-[480px] flex flex-col items-center justify-center">
            <div className="absolute inset-0">
              <Suspense fallback={null}>
                <IntelligenceCore />
              </Suspense>
            </div>
            <div className="relative text-center pointer-events-none">
              <div className="text-mono text-[10px] tracking-[0.3em] text-acid uppercase mb-2">
                Intelligence Core
              </div>
              <div className="text-display text-3xl md:text-4xl font-semibold">5DM AI Engine</div>
              <div className="text-xs text-bone/50 mt-2">Predictive Analytics · Consent Manager</div>
              <div className="text-mono text-[10px] text-bone/30 mt-3">GDPR · POPIA compliant</div>
            </div>

            <div className="absolute bottom-4 left-0 right-0 flex flex-wrap justify-center gap-2 px-4">
              {['Audience Path', 'Creative Path', 'Media Path'].map((path, i) => (
                <span
                  key={path}
                  className="text-mono text-[10px] uppercase tracking-widest px-3 py-1 rounded-full border border-acid/30 text-acid bg-ink/60 backdrop-blur"
                >
                  0{i + 1} · {path}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Channels */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="text-mono text-xs text-bone/40 uppercase tracking-widest mb-4">
              Activation Channels
            </div>
            <div className="flex flex-wrap gap-2">
              {CHANNELS.map((ch, i) => (
                <motion.span
                  key={ch}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04 }}
                  className="text-sm px-3 py-2 rounded-full glass text-bone/80 hover:border-acid/40 transition-colors"
                >
                  {ch}
                </motion.span>
              ))}
            </div>
            <div className="mt-6 text-xs text-bone/50 leading-relaxed">
              Social · Search · Programmatic · Open Web · Video · Digital OOH · SMS · Voice.
              Direct reach at scale.
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
