import { motion } from 'framer-motion'

const SECTIONS = [
  {
    tag: 'Mobile First Content',
    kicker: '‘Two Second Scroll’ Content',
    bullets: [
      'Vertical-Native 9:16 (TikTok, Reels, Shorts)',
      'Broadcast-quality AI content in days',
      'Infinite storytelling for high-volume consumption',
    ],
  },
  {
    tag: 'Influencer Engine',
    kicker: 'Distribution & Execution',
    bullets: [
      'Turnkey strategy: selection to buying',
      'Mobile-first premium vertical production',
      'Asset sovereignty via co-creation',
    ],
  },
  {
    tag: 'The Academy',
    kicker: 'Capacity Building',
    bullets: [
      'Upskill teams on strategy, messaging, SMM',
      'AI workflows: 4-hour tasks in 15 minutes',
      'Mobile mastery certification',
    ],
  },
]

export default function ContentCabal() {
  return (
    <section className="relative py-32 md:py-40 overflow-hidden bg-[#07080E]">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10">
        <div className="flex items-center gap-4 mb-6">
          <span className="section-label">13 / Content Cabal</span>
          <span className="h-px flex-1 bg-bone/10" />
          <span className="text-mono text-xs text-acid">MODERN ATTENTION</span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="mb-16"
        >
          <h2 className="text-display text-5xl md:text-7xl lg:text-8xl font-semibold">
            Architects of <span className="text-acid italic">modern</span><br />
            attention.
          </h2>
          <p className="text-bone/70 mt-6 text-lg max-w-2xl">
            Bridging traditional storytelling and the mobile-first future. We don't just create
            content — we architect the systems, upskill the people, and deploy the AI required
            to capture modern attention.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SECTIONS.map((s, i) => (
            <motion.div
              key={s.tag}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative glass rounded-3xl p-8 md:p-10 overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-acid/5 rounded-full blur-3xl group-hover:bg-acid/15 transition-colors" />
              <div className="relative">
                <div className="text-mono text-[10px] text-acid tracking-[0.3em] uppercase">{s.tag}</div>
                <h3 className="text-display text-2xl md:text-3xl font-semibold mt-3 mb-6">{s.kicker}</h3>
                <ul className="space-y-3">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-sm text-bone/75">
                      <span className="text-acid mt-1">●</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
