import { motion } from 'framer-motion'

const PILLARS = [
  {
    no: '01',
    label: 'Intelligence-Led Strategy',
    body: 'We don\'t guess. We design with data. Every creative decision — from art direction to messaging — is informed by deep audience insights.',
  },
  {
    no: '02',
    label: 'AI-Accelerated Production',
    body: 'Campaign creative in days, not weeks. Proprietary AI workflows automate asset production and adaptation at the speed of culture.',
  },
  {
    no: '03',
    label: 'Omnichannel Execution',
    body: 'One strategy, infinite adaptations. HTML5, rich media, vertical video, CTV — seamless brand storytelling everywhere.',
  },
]

export default function CreativePath() {
  return (
    <section className="relative py-32 md:py-40 bg-[#07080E] overflow-hidden">
      <div className="absolute inset-0 dot-bg opacity-30" />
      <div className="relative max-w-[1600px] mx-auto px-6 md:px-10">
        <div className="flex items-center gap-4 mb-6">
          <span className="section-label">10 / Creative Path</span>
          <span className="h-px flex-1 bg-bone/10" />
          <span className="text-mono text-xs text-acid">DATA-DRIVEN DESIGN</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-16 items-end">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className="md:col-span-8 text-display text-5xl md:text-7xl lg:text-8xl font-semibold"
          >
            Creativity, <br />
            <span className="text-acid italic font-light">powered by</span> intelligence.
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="md:col-span-4"
          >
            <div className="border-l border-acid pl-5">
              <div className="text-display text-5xl md:text-6xl font-semibold text-acid">72h</div>
              <div className="text-mono text-xs uppercase tracking-widest text-bone/60 mt-1">
                Concept to launch
              </div>
              <div className="text-sm text-bone/60 mt-4">
                Data-driven creative delivers <span className="text-acid font-medium">2–3× better performance</span> than industry benchmarks.
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PILLARS.map((p, i) => (
            <motion.div
              key={p.no}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative glass glass-hover rounded-3xl p-8 md:p-10 min-h-[340px] flex flex-col overflow-hidden"
            >
              <div className="absolute -top-8 -right-8 text-display text-[9rem] font-semibold text-bone/5 leading-none">
                {p.no}
              </div>
              <div className="relative">
                <span className="text-mono text-xs text-acid tracking-widest">{p.no}</span>
                <h3 className="text-display text-2xl md:text-3xl font-semibold mt-3 mb-4 uppercase tracking-tight">
                  {p.label}
                </h3>
                <p className="text-sm text-bone/60 leading-relaxed">{p.body}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Creative capabilities strip */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            'DCO Dynamic Creative',
            'HTML5 & Rich Media',
            'Vertical Video (9:16)',
            'CTV & Rich Video',
          ].map((c, i) => (
            <motion.div
              key={c}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="border border-bone/10 rounded-2xl p-5 hover:border-acid/40 transition-colors"
            >
              <div className="text-mono text-[10px] text-bone/40 tracking-widest">CAP·0{i + 1}</div>
              <div className="text-bone mt-2">{c}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
