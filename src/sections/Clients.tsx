import { motion } from 'framer-motion'
import { CLIENTS, PARTNERS } from '../lib/data'

export default function Clients() {
  const loop = [...CLIENTS, ...CLIENTS]

  return (
    <section id="clients" className="relative py-32 md:py-40 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10">
        <div className="flex items-center gap-4 mb-6">
          <span className="section-label">06 / Clients & Partners</span>
          <span className="h-px flex-1 bg-bone/10" />
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-display text-5xl md:text-7xl font-semibold mb-16 max-w-4xl"
        >
          Trusted by leaders <span className="italic font-light text-bone/60">across</span> the continent.
        </motion.h2>
      </div>

      <div className="relative mask-fade-r overflow-hidden py-8 border-y border-bone/10">
        <div className="flex gap-16 w-max animate-marquee text-display text-4xl md:text-6xl text-bone/70">
          {loop.map((c, i) => (
            <span key={i} className="whitespace-nowrap flex items-center gap-16">
              {c}
              <span className="text-acid text-2xl">✺</span>
            </span>
          ))}
        </div>
      </div>

      <div className="relative mask-fade-r overflow-hidden py-8 border-b border-bone/10">
        <div className="flex gap-16 w-max animate-marquee-slow text-display text-3xl md:text-5xl text-bone/40">
          {[...PARTNERS, ...PARTNERS, ...PARTNERS].map((c, i) => (
            <span key={i} className="whitespace-nowrap flex items-center gap-16">
              {c}
              <span className="text-bone/20 text-xl">/</span>
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto px-6 md:px-10 mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { k: '200+', l: 'Campaigns shipped' },
          { k: '4', l: 'Global agency networks' },
          { k: '5', l: 'Platform certifications' },
        ].map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex items-baseline gap-6 border-t border-bone/10 pt-6"
          >
            <span className="text-display text-5xl md:text-6xl text-acid">{stat.k}</span>
            <span className="text-bone/60">{stat.l}</span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
