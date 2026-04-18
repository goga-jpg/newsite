import { motion } from 'framer-motion'
import Logo from '../components/Logo'
import { OFFICES } from '../lib/data'

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden">
      {/* Giant CTA */}
      <div className="relative py-32 md:py-48 bg-gradient-to-b from-ink via-crimson-deep/30 to-ink">
        <div className="absolute inset-0 kente-stripe opacity-60" />
        <div className="relative max-w-[1600px] mx-auto px-6 md:px-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className="max-w-5xl mx-auto"
          >
            <div className="eyebrow mb-6">Contact · 07</div>
            <h2 className="display text-6xl md:text-9xl lg:text-[11rem] font-semibold leading-[0.88]">
              Let's make <br />
              <span className="display-italic text-crimson font-normal">something</span> <br />
              that moves.
            </h2>
            <p className="text-paper/70 text-lg mt-10 max-w-lg mx-auto">
              We take on a small number of engagements each year. Write to us with the
              question you're trying to answer.
            </p>
            <div className="mt-10 flex items-center justify-center gap-3 flex-wrap">
              <a href="mailto:hello@5dm.africa" className="btn-crimson !px-8 !py-4">
                hello@5dm.africa
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M7 17L17 7M17 7H9M17 7V15" />
                </svg>
              </a>
              <a href="https://5dm.africa" target="_blank" rel="noreferrer" className="btn-outline !px-8 !py-4">
                5dm.africa ↗
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-paper/10 py-16">
        <div className="max-w-[1600px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            <div className="md:col-span-4 flex items-start gap-4">
              <Logo size={40} />
              <div>
                <div className="display text-xl font-medium">5DM</div>
                <div className="mono text-[10px] uppercase tracking-[0.3em] text-paper/40 mt-1">
                  Audience Intelligence · Africa
                </div>
              </div>
            </div>
            <div className="md:col-span-4 grid grid-cols-2 gap-4">
              {OFFICES.map((o) => (
                <div key={o.city}>
                  <div className="mono text-[10px] uppercase tracking-widest text-paper/40">
                    {o.country}
                  </div>
                  <div className="text-paper mt-1">{o.city}</div>
                </div>
              ))}
            </div>
            <div className="md:col-span-4 md:text-right">
              <div className="mono text-[10px] uppercase tracking-widest text-paper/40">
                Studio
              </div>
              <div className="text-paper mt-1">hello@5dm.africa</div>
              <div className="text-paper/50 mt-1 text-sm">
                © {new Date().getFullYear()} 5DM Group
              </div>
            </div>
          </div>

          <div className="mt-12 shimmer-line h-px" />

          <div className="mt-10 flex items-center justify-between text-xs text-paper/40 mono uppercase tracking-widest">
            <span>Built in Nairobi</span>
            <span>v1.0 — {new Date().getFullYear()}</span>
          </div>
        </div>
      </footer>
    </section>
  )
}
