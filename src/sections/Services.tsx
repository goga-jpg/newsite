import { motion } from 'framer-motion'
import { SERVICES } from '../lib/data'

export default function Services() {
  return (
    <section className="relative py-32 md:py-40 bg-[#07080E]">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10">
        <div className="flex items-center gap-4 mb-6">
          <span className="section-label">05 / Services</span>
          <span className="h-px flex-1 bg-bone/10" />
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-display text-5xl md:text-7xl font-semibold mb-16 max-w-4xl"
        >
          Full-stack capabilities for <span className="text-acid italic font-light">modern</span> marketing.
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-bone/10">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * 0.07 }}
              className="group bg-[#07080E] p-8 md:p-10 min-h-[260px] flex flex-col justify-between hover:bg-ink transition-colors"
            >
              <div>
                <span className="text-mono text-xs text-acid tracking-widest">0{i + 1}</span>
                <h3 className="text-display text-3xl font-semibold mt-4 group-hover:text-acid transition-colors">
                  {s.name}
                </h3>
              </div>
              <ul className="mt-6 space-y-2">
                {s.items.map((it) => (
                  <li key={it} className="flex items-start gap-3 text-sm text-bone/70">
                    <span className="text-acid mt-1">—</span>
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
