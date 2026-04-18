import { motion } from 'framer-motion'
import { LEADERSHIP, TEAM_GROUPS, OFFICES } from '../lib/data'
import SectionLabel from '../components/SectionLabel'

function initials(name: string) {
  return name.split(' ').map((n) => n[0]).slice(0, 2).join('')
}

export default function Studio() {
  return (
    <section id="studio" className="relative py-32 md:py-40 bg-ink overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10">
        <SectionLabel n="06" label="The Studio" />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-end mt-8 mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className="md:col-span-8 display text-5xl md:text-7xl font-semibold"
          >
            A studio of{' '}
            <span className="display-italic text-crimson font-normal">
              strategists, technologists
            </span>{' '}
            & storytellers.
          </motion.h2>
          <p className="md:col-span-4 text-paper/60 md:pb-2">
            Led from Nairobi, operating across four African capitals.
          </p>
        </div>

        {/* Leadership */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-16">
          {LEADERSHIP.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative border border-paper/10 rounded-2xl p-8 md:p-10 min-h-[280px] flex flex-col justify-between overflow-hidden group hover:border-crimson/60 transition-colors"
            >
              <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-crimson/10 blur-3xl group-hover:bg-crimson/20 transition-colors" />
              <div className="relative flex items-center justify-between">
                <div className="w-14 h-14 rounded-full bg-crimson text-paper flex items-center justify-center display text-lg font-semibold">
                  {initials(m.name)}
                </div>
                <span className="mono text-[10px] text-paper/40 tracking-widest">P·0{i + 1}</span>
              </div>
              <div className="relative">
                <div className="mono text-[10px] uppercase tracking-[0.3em] text-crimson">
                  {m.role}
                </div>
                <h3 className="display text-2xl md:text-3xl font-medium mt-2">{m.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Team groups + offices */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7">
            <div className="mono text-[10px] uppercase tracking-[0.3em] text-paper/40 mb-4">
              Disciplines
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-paper/10 rounded-2xl overflow-hidden">
              {TEAM_GROUPS.map((g, i) => (
                <motion.div
                  key={g.name}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04 }}
                  className="bg-ink p-6 md:p-8 flex items-center justify-between group hover:bg-paper/[0.02] transition-colors"
                >
                  <div>
                    <h4 className="display text-xl md:text-2xl font-medium group-hover:text-crimson transition-colors">
                      {g.name}
                    </h4>
                    <div className="text-xs text-paper/50 mt-1">Led by {g.lead}</div>
                  </div>
                  <span className="mono text-[10px] text-paper/30">
                    0{i + 1} / {TEAM_GROUPS.length}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="mono text-[10px] uppercase tracking-[0.3em] text-paper/40 mb-4">
              Offices
            </div>
            <div className="space-y-px bg-paper/10 rounded-2xl overflow-hidden">
              {OFFICES.map((o, i) => (
                <motion.div
                  key={o.city}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="bg-ink p-6 md:p-8 flex items-center justify-between group hover:bg-paper/[0.02] transition-colors"
                >
                  <div>
                    <h4 className="display text-xl md:text-2xl font-medium">{o.city}</h4>
                    <div className="text-xs text-paper/50 mt-1">{o.country}</div>
                  </div>
                  <div className="mono text-[10px] text-paper/40 tracking-widest">
                    {o.tz}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
