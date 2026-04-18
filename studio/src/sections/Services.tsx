import { motion } from 'framer-motion'
import { SERVICES } from '../lib/data'
import SectionLabel from '../components/SectionLabel'

export default function Services() {
  return (
    <section className="relative py-32 md:py-40 bg-ink">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10">
        <SectionLabel n="04" label="Services" />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-end mt-8 mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className="md:col-span-8 display text-5xl md:text-7xl font-semibold"
          >
            A full spine of <span className="display-italic text-crimson font-normal">in-house</span> capability.
          </motion.h2>
          <p className="md:col-span-4 text-paper/60 md:pb-3">
            Twelve disciplines. One team. Retained or project-based — structured around
            the work, not the org chart.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ delay: i * 0.04 }}
              className="group relative p-8 md:p-10 border-t border-l border-paper/10 last:border-b lg:[&:nth-child(4n)]:border-r lg:[&:nth-last-child(-n+4)]:border-b hover:bg-paper/[0.02] transition-colors min-h-[200px] flex flex-col justify-between"
            >
              <span className="mono text-[10px] text-crimson tracking-widest">
                S / {String(i + 1).padStart(2, '0')}
              </span>
              <div>
                <h4 className="display text-2xl md:text-3xl font-medium group-hover:text-crimson transition-colors">
                  {s}
                </h4>
                <div className="mt-4 h-px w-6 bg-paper/20 group-hover:w-full group-hover:bg-crimson transition-all duration-700" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
