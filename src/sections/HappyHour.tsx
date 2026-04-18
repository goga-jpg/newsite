import { motion } from 'framer-motion'

export default function HappyHour() {
  return (
    <section className="relative py-32 md:py-40 overflow-hidden bg-gradient-to-br from-ember/10 via-ink to-ink">
      <div className="absolute inset-0 dot-bg opacity-40" />
      <div className="relative max-w-[1600px] mx-auto px-6 md:px-10">
        <div className="flex items-center gap-4 mb-6">
          <span className="section-label">12 / Happy Hour</span>
          <span className="h-px flex-1 bg-bone/10" />
          <span className="text-mono text-xs text-ember">BRAND VERTICAL</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className="md:col-span-7"
          >
            <div className="text-mono text-xs text-ember tracking-widest mb-3">HAPPY HOUR</div>
            <h2 className="text-display text-5xl md:text-7xl font-semibold leading-[0.95]">
              The ultimate <br />
              <span className="text-ember italic">drinks</span> experience.
            </h2>
            <p className="text-bone/70 mt-6 text-lg max-w-xl">
              More than delivery. We deliver the full experience — drinks, vibes, recipes, and community.
            </p>

            <div className="mt-10 space-y-6">
              {[
                {
                  t: 'Experience-Driven Commerce',
                  d: 'Seamless D2C platform merging online shopping with social features — curated playlists, party games, mixology guides.',
                },
                {
                  t: 'Direct Brand Connection',
                  d: 'Zero channel dilution. Brands control their presentation and engage directly, maximizing equity and margins.',
                },
                {
                  t: 'Intelligence Engine',
                  d: 'Captures high-intent consumption data to fuel Audience Path. Build precise "Party Planner" and "Socializer" segments.',
                },
              ].map((x, i) => (
                <motion.div
                  key={x.t}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-6 pb-6 border-b border-bone/10"
                >
                  <span className="text-mono text-xs text-ember tracking-widest pt-1">0{i + 1}</span>
                  <div className="flex-1">
                    <h4 className="text-display text-xl font-semibold">{x.t}</h4>
                    <p className="text-sm text-bone/60 mt-1 leading-relaxed">{x.d}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-5 relative rounded-3xl bg-gradient-to-br from-ember/30 via-ember/10 to-transparent border border-ember/20 p-10 min-h-[500px] overflow-hidden"
          >
            <div className="absolute inset-0 flex items-center justify-center opacity-20">
              <div className="text-display text-[12rem] font-bold text-ember leading-none">HH</div>
            </div>
            <div className="relative h-full flex flex-col justify-between">
              <div>
                <div className="text-mono text-[10px] text-ember/80 tracking-[0.3em] uppercase">Segments</div>
                <div className="mt-4 space-y-2">
                  {['Party Planners', 'Socializers', 'Premium Sippers', 'Event Curators'].map((s, i) => (
                    <div key={s} className="flex items-center justify-between py-2 border-b border-bone/10">
                      <span className="text-bone/90">{s}</span>
                      <span className="text-mono text-xs text-ember">SEG·0{i + 1}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-8">
                <div className="text-mono text-[10px] text-ember/80 tracking-widest">Experience Stack</div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {['Playlists', 'Games', 'Mixology', 'Community', 'Delivery'].map((t) => (
                    <span key={t} className="text-xs border border-bone/15 rounded-full px-3 py-1 bg-ink/50">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
