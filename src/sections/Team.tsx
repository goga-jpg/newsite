import { motion } from 'framer-motion'
import { TEAM } from '../lib/data'

function initials(name: string) {
  return name
    .split(' ')
    .map((n) => n[0])
    .slice(0, 2)
    .join('')
}

export default function Team() {
  return (
    <section id="team" className="relative py-32 md:py-40 overflow-hidden bg-[#07080E]">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10">
        <div className="flex items-center gap-4 mb-6">
          <span className="section-label">15 / Team</span>
          <span className="h-px flex-1 bg-bone/10" />
          <span className="text-mono text-xs text-acid">LEADERSHIP & EXPERTISE</span>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-display text-5xl md:text-7xl lg:text-8xl font-semibold mb-16 max-w-4xl"
        >
          The humans behind <span className="text-acid italic">5DM</span>.
        </motion.h2>

        {/* Leadership */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {TEAM.leadership.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass glass-hover rounded-3xl p-8 md:p-10 relative overflow-hidden group"
            >
              <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-acid/10 blur-3xl group-hover:bg-acid/20 transition-colors" />
              <div className="relative flex flex-col h-full min-h-[280px] justify-between">
                <div className="flex items-start justify-between">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-acid to-acid/40 flex items-center justify-center text-ink text-display font-bold text-xl">
                    {initials(m.name)}
                  </div>
                  <span className="text-mono text-[10px] text-bone/40 tracking-widest">0{i + 1}</span>
                </div>
                <div>
                  <div className="text-mono text-xs text-acid tracking-widest uppercase">{m.role}</div>
                  <h3 className="text-display text-2xl md:text-3xl font-semibold mt-2">{m.name}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Groups */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TEAM.groups.map((g, i) => (
            <motion.div
              key={g.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="border border-bone/10 rounded-2xl p-6 hover:border-acid/30 transition-colors"
            >
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-display text-lg font-semibold uppercase tracking-wide">{g.name}</h4>
                <span className="text-mono text-[10px] text-bone/40">
                  {g.members.length} MEMBER{g.members.length > 1 ? 'S' : ''}
                </span>
              </div>
              <ul className="space-y-3">
                {g.members.map((member) => (
                  <li key={member.name} className="flex items-center gap-3 py-1">
                    <span className="w-8 h-8 rounded-full bg-bone/5 border border-bone/10 flex items-center justify-center text-[10px] text-bone/70 font-mono">
                      {initials(member.name)}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm text-bone truncate">{member.name}</div>
                      <div className="text-xs text-bone/50 truncate">{member.role}</div>
                    </div>
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
