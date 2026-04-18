import { motion } from 'framer-motion'
import Logo from '../components/Logo'
import { OFFICES } from '../lib/data'

export default function CTA() {
  return (
    <section id="contact" className="relative py-32 md:py-40 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div
        className="absolute inset-0 opacity-60"
        style={{
          background:
            'radial-gradient(circle at 50% 100%, rgba(201, 255, 59, 0.18), transparent 60%)',
        }}
      />
      <div className="relative max-w-[1600px] mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center max-w-5xl mx-auto"
        >
          <span className="section-label">Ready?</span>
          <h2 className="text-display text-6xl md:text-8xl lg:text-[10rem] font-semibold leading-[0.9] mt-6">
            Transform your <br />
            <span className="text-acid italic font-light">audience</span> strategy.
          </h2>
          <p className="text-bone/70 text-lg mt-8 max-w-xl mx-auto">
            Let's build Africa's most intelligent brand together. Data, creative, media —
            unified from day one.
          </p>
          <div className="mt-10 flex items-center justify-center gap-4 flex-wrap">
            <a href="mailto:hello@5dm.africa" className="btn-primary !px-8 !py-4 !text-sm">
              hello@5dm.africa
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>
            <a href="https://5dm.africa" target="_blank" rel="noreferrer" className="btn-ghost !px-8 !py-4 !text-sm">
              Visit 5dm.africa
            </a>
          </div>
        </motion.div>

        <div className="mt-32 pt-12 border-t border-bone/10 grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-4 flex items-center gap-3">
            <Logo size={44} />
            <div>
              <div className="text-display text-xl font-semibold">5DM Group</div>
              <div className="text-mono text-[10px] tracking-widest text-bone/40 uppercase">
                Audience Intelligence · Africa
              </div>
            </div>
          </div>

          <div className="md:col-span-4 grid grid-cols-2 gap-4">
            {OFFICES.map((o) => (
              <div key={o.city}>
                <div className="text-mono text-[10px] tracking-widest text-bone/40 uppercase">
                  {o.country}
                </div>
                <div className="text-bone mt-1">{o.city}</div>
              </div>
            ))}
          </div>

          <div className="md:col-span-4 flex flex-col md:items-end">
            <div className="text-mono text-[10px] tracking-widest text-bone/40 uppercase">
              Keep in touch
            </div>
            <div className="text-bone mt-1">hello@5dm.africa</div>
            <div className="text-bone/50 mt-1 text-sm">© {new Date().getFullYear()} 5DM Group. All rights reserved.</div>
          </div>
        </div>
      </div>
    </section>
  )
}
