import { motion } from 'framer-motion'

const PILLARS = [
  {
    t: 'Data Intelligence',
    d: 'Curating farmer audiences by crop, region, behavior, and digital readiness.',
  },
  {
    t: 'Marketing Cloud',
    d: 'Cross-channel advertising & attribution across SMS, WhatsApp, and Radio.',
  },
  {
    t: 'AgriPath Learning',
    d: 'Education platform for data-driven agribusiness communication strategies.',
  },
]

export default function Chlorophyll() {
  return (
    <section className="relative py-32 md:py-40 overflow-hidden">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: 'radial-gradient(circle at 30% 50%, rgba(120, 200, 80, 0.2), transparent 50%)',
        }}
      />
      <div className="relative max-w-[1600px] mx-auto px-6 md:px-10">
        <div className="flex items-center gap-4 mb-6">
          <span className="section-label">14 / Chlorophyll</span>
          <span className="h-px flex-1 bg-bone/10" />
          <span className="text-mono text-xs text-acid">AGRI PLATFORM</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className="md:col-span-8 text-display text-5xl md:text-7xl lg:text-8xl font-semibold"
          >
            Africa's <span className="text-acid italic">farmer</span> <br />audience platform.
          </motion.h2>
          <p className="md:col-span-4 text-bone/60 md:pt-4">
            Bridging the information gap for Africa's 250M+ smallholder farmers through
            precision data intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {[
            { k: '250M+', l: 'Smallholder farmers (TAM)' },
            { k: '13K+', l: 'Segmented leads' },
            { k: '3', l: 'Key markets (KE · UG · TZ)' },
          ].map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass rounded-2xl p-6 md:p-8 border-l-2 border-l-acid"
            >
              <div className="text-display text-5xl md:text-6xl font-semibold text-acid">{s.k}</div>
              <div className="text-mono text-xs uppercase tracking-widest text-bone/50 mt-2">{s.l}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-bone/10 rounded-2xl overflow-hidden">
          {PILLARS.map((p, i) => (
            <motion.div
              key={p.t}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group bg-ink p-8 md:p-10 min-h-[220px] hover:bg-[#0B0D14] transition-colors"
            >
              <div className="text-mono text-xs text-acid tracking-widest">0{i + 1}</div>
              <h3 className="text-display text-2xl md:text-3xl font-semibold mt-3 group-hover:text-acid transition-colors">
                {p.t}
              </h3>
              <p className="text-sm text-bone/60 mt-3 leading-relaxed">{p.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
