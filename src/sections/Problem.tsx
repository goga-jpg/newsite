import { motion } from 'framer-motion'
import { PROBLEMS } from '../lib/data'

export default function Problem() {
  return (
    <section className="relative py-32 md:py-40 overflow-hidden">
      <div className="absolute inset-0 dot-bg opacity-40" />
      <div className="relative max-w-[1600px] mx-auto px-6 md:px-10">
        <div className="flex items-center gap-4 mb-6">
          <span className="section-label">02 / The Problem</span>
          <span className="h-px flex-1 bg-bone/10" />
          <span className="text-mono text-xs text-ember">[SYSTEM ALERT]</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="md:col-span-8 text-display text-5xl md:text-7xl lg:text-8xl font-semibold"
          >
            Reaching African audiences remains{' '}
            <span className="text-ember italic font-light">fragmented</span> and ineffective.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-4 text-bone/60 md:pt-6"
          >
            Six structural barriers stop global brands from unlocking Africa's consumer opportunity —
            and leave local brands unable to compete.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-bone/10">
          {PROBLEMS.map((p, i) => (
            <motion.div
              key={p.code}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              className="group relative bg-ink p-8 md:p-10 min-h-[260px] flex flex-col justify-between hover:bg-[#0B0D14] transition-colors"
            >
              <div className="flex items-start justify-between">
                <span className="text-mono text-xs text-bone/40 tracking-widest">{p.code}</span>
                <span className="w-2 h-2 rounded-full bg-ember animate-pulse" />
              </div>
              <div>
                <h3 className="text-display text-2xl md:text-3xl mb-3 group-hover:text-acid transition-colors">
                  {p.title}
                </h3>
                <p className="text-sm text-bone/60 leading-relaxed">{p.body}</p>
              </div>
              <div className="absolute bottom-0 left-0 h-px w-0 bg-acid group-hover:w-full transition-all duration-700" />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 border border-ember/30 bg-ember/5 p-8 md:p-10 rounded-2xl flex flex-col md:flex-row items-start md:items-center gap-6"
        >
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full border border-ember flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF4D2E" strokeWidth="2">
                <path d="M12 9v4M12 17h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
              </svg>
            </div>
            <span className="text-mono text-xs uppercase tracking-[0.3em] text-ember">Result</span>
          </div>
          <p className="text-xl md:text-2xl font-light text-bone flex-1">
            Low campaign effectiveness, poor ROI, and an inability to compete with global markets.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
