import { motion } from 'framer-motion'
import { AUDIENCE_VERTICALS, AUDIENCE_LIFESTYLES } from '../lib/data'

export default function AudiencePath() {
  return (
    <section className="relative py-32 md:py-40 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10">
        <div className="flex items-center gap-4 mb-6">
          <span className="section-label">09 / Audience Path</span>
          <span className="h-px flex-1 bg-bone/10" />
          <span className="text-mono text-xs text-acid">INTENT-BASED</span>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-display text-5xl md:text-7xl lg:text-8xl font-semibold mb-16 max-w-5xl"
        >
          Target <span className="text-acid italic">intent</span>,<br />
          not just demographics.
        </motion.h2>

        {/* Verticals */}
        <div className="mb-20">
          <h3 className="text-mono text-xs uppercase tracking-[0.3em] text-bone/50 mb-6">
            Verticals & Brands / Transparent Reach
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {AUDIENCE_VERTICALS.map((v, i) => (
              <motion.div
                key={v.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="glass glass-hover rounded-2xl p-6 relative overflow-hidden"
              >
                <div className="text-display text-5xl md:text-6xl font-semibold text-acid">{v.reach}</div>
                <div className="text-mono text-[10px] text-bone/40 mt-1 uppercase tracking-widest">Reach</div>
                <div className="mt-6 text-bone font-medium">{v.label}</div>
                <div className="text-xs text-bone/50 mt-1">{v.sub}</div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {/* Lifestyles */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-8 md:p-10"
          >
            <h3 className="text-mono text-xs uppercase tracking-[0.3em] text-bone/50 mb-4">
              Behavioural Lifestyles
            </h3>
            <p className="text-bone/80 mb-6">
              Move beyond basic age/gender demographics. Understand how people live.
            </p>
            <div className="space-y-3">
              {AUDIENCE_LIFESTYLES.map((l, i) => (
                <motion.div
                  key={l}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center gap-3 py-3 border-b border-bone/10 last:border-0 group"
                >
                  <span className="text-mono text-[10px] text-bone/30">L{String(i + 1).padStart(2, '0')}</span>
                  <span className="flex-1 text-bone/90 group-hover:text-acid transition-colors">{l}</span>
                  <span className="text-acid/60">→</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Geographic */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-8 md:p-10"
          >
            <h3 className="text-mono text-xs uppercase tracking-[0.3em] text-bone/50 mb-4">
              Geographic Precision
            </h3>
            <p className="text-bone/80 mb-8">
              Hyper-local targeting down to sub-county and LGA level. Digital reach meets physical context.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="border border-bone/10 rounded-2xl p-5">
                <div className="text-mono text-[10px] text-bone/40">Kenya</div>
                <div className="text-display text-4xl font-semibold text-acid mt-2">290</div>
                <div className="text-xs text-bone/60 mt-1">Sub-Counties</div>
              </div>
              <div className="border border-bone/10 rounded-2xl p-5">
                <div className="text-mono text-[10px] text-bone/40">Nigeria</div>
                <div className="text-display text-4xl font-semibold text-acid mt-2">774</div>
                <div className="text-xs text-bone/60 mt-1">LGAs</div>
              </div>
            </div>
            <div className="border border-acid/30 bg-acid/5 rounded-2xl p-5">
              <div className="text-mono text-[10px] text-acid uppercase tracking-widest mb-1">Plus</div>
              <div className="text-bone">DOOH inventory integration for physical-world activation</div>
            </div>
          </motion.div>
        </div>

        {/* Activation capabilities */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              t: 'Video Resonance',
              d: 'Target by emotional engagement with video — Inspirational, Knowledge-seeking, Entertainment.',
            },
            {
              t: 'Real-Time Activation',
              d: 'Direct integration with programmatic buying via RTB audience filters.',
            },
            {
              t: '"My Campaigns" Mgmt',
              d: 'Cross-device activation with transparent reach numbers before you spend.',
            },
          ].map((x, i) => (
            <motion.div
              key={x.t}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass glass-hover rounded-2xl p-6"
            >
              <div className="text-acid text-mono text-[10px] tracking-widest">0{i + 1}</div>
              <div className="text-display text-xl font-semibold mt-3">{x.t}</div>
              <div className="text-sm text-bone/60 mt-2 leading-relaxed">{x.d}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
