import { motion } from 'framer-motion'
import { OFFICES } from '../lib/data'

export default function Presence() {
  return (
    <section className="relative py-32 md:py-40 overflow-hidden bg-[#07080E]">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10">
        <div className="flex items-center gap-4 mb-6">
          <span className="section-label">07 / Presence</span>
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
            Operating from <span className="text-acid">four</span> African capitals.
          </motion.h2>
          <p className="md:col-span-4 text-bone/60 md:pt-4">
            Boots on the ground across East, West and Southern Africa — with network partners
            extending our reach across every major market.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-bone/10 rounded-2xl overflow-hidden">
          {OFFICES.map((o, i) => (
            <motion.div
              key={o.city}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-[#07080E] p-8 min-h-[300px] flex flex-col justify-between hover:bg-ink transition-colors relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 text-mono text-[9px] text-bone/30 p-4">
                {o.coords.lat.toFixed(3)}°, {o.coords.lng.toFixed(3)}°
              </div>
              <div>
                <span className="text-mono text-xs text-bone/40 tracking-widest">0{i + 1}</span>
              </div>
              <div>
                <h3 className="text-display text-4xl font-semibold group-hover:text-acid transition-colors">
                  {o.city}
                </h3>
                <p className="text-bone/50 mt-2">{o.country}</p>
                <div className="mt-6 h-px w-0 bg-acid group-hover:w-full transition-all duration-700" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
