import { motion } from 'framer-motion'
import { MEDIA_CAPABILITIES } from '../lib/data'

export default function MediaPath() {
  return (
    <section className="relative py-32 md:py-40 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10">
        <div className="flex items-center gap-4 mb-6">
          <span className="section-label">11 / Media Path</span>
          <span className="h-px flex-1 bg-bone/10" />
          <span className="text-mono text-xs text-acid">OMNICHANNEL</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-16 items-end">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className="md:col-span-9 text-display text-5xl md:text-7xl lg:text-8xl font-semibold"
          >
            Activation, <span className="italic font-light text-bone/60">everywhere</span> audiences actually are.
          </motion.h2>
          <p className="md:col-span-3 text-bone/60">
            Live signals, real-time bidding, and cross-channel measurement — all managed
            by certified trade desk operators.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-bone/10 rounded-2xl overflow-hidden">
          {MEDIA_CAPABILITIES.map((c, i) => (
            <motion.div
              key={c.t}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group bg-ink p-6 md:p-8 min-h-[220px] flex flex-col justify-between hover:bg-[#0B0D14] transition-colors relative"
            >
              <div className="flex items-center justify-between">
                <span className="text-mono text-xs text-bone/40">M{String(i + 1).padStart(2, '0')}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-acid group-hover:scale-150 transition-transform" />
              </div>
              <div>
                <h3 className="text-display text-xl md:text-2xl font-semibold group-hover:text-acid transition-colors">
                  {c.t}
                </h3>
                <p className="text-sm text-bone/60 mt-2 leading-relaxed">{c.d}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Intent-based video pitch */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div className="glass rounded-3xl p-8 md:p-10">
            <div className="text-mono text-xs text-acid tracking-widest mb-2">SIGNATURE CAPABILITY</div>
            <h3 className="text-display text-3xl md:text-4xl font-semibold mb-4">
              Intent-based <span className="text-acid">video ads</span>
            </h3>
            <p className="text-bone/70 leading-relaxed mb-6">
              Buy against the human intent behind watching videos. Match moods and emotional states.
              Only serve ads where comment sentiment is positive and brand-safe. Buy against viral
              videos before they peak.
            </p>
            <div className="flex flex-wrap gap-2">
              {['Sentiment-Filtered', 'Pre-Viral Targeting', 'Emotional Match', 'Brand-Safe'].map((t) => (
                <span key={t} className="text-xs text-acid border border-acid/30 rounded-full px-3 py-1">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="glass rounded-3xl p-8 md:p-10 bg-gradient-to-br from-acid/10 to-transparent border-acid/30">
            <div className="text-mono text-xs text-bone/40 tracking-widest mb-2">PERFORMANCE</div>
            <h3 className="text-display text-3xl md:text-4xl font-semibold mb-8">
              ROI on every <span className="text-acid italic">dollar</span> of media spend.
            </h3>
            <div className="grid grid-cols-3 gap-4">
              {[
                { k: '2–3×', l: 'vs industry' },
                { k: '100%', l: 'viewability goal' },
                { k: 'Live', l: 'optimization' },
              ].map((s) => (
                <div key={s.l}>
                  <div className="text-display text-3xl font-semibold text-acid">{s.k}</div>
                  <div className="text-[10px] uppercase tracking-widest text-bone/50 mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
