import { motion } from 'framer-motion'
import { NUMBERS } from '../lib/data'

// Split paragraph into words for stagger reveal
function Words({ text }: { text: string }) {
  const words = text.split(' ')
  return (
    <>
      {words.map((w, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0.15 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-20%' }}
          transition={{ duration: 0.4, delay: i * 0.03 }}
          className="inline-block mr-[0.25em]"
        >
          {w}
        </motion.span>
      ))}
    </>
  )
}

export default function Manifesto() {
  return (
    <section className="relative py-32 md:py-48 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-3">
            <div className="sticky top-28">
              <div className="eyebrow mb-4">§ 01 · Manifesto</div>
              <div className="h-px w-16 bg-crimson mb-4" />
              <p className="text-paper/50 text-sm leading-relaxed">
                A short word on how we work, and why.
              </p>
            </div>
          </div>

          <div className="md:col-span-9">
            <h2 className="display text-4xl md:text-6xl lg:text-7xl font-medium leading-[1.05]">
              <Words text="Africa is the most misunderstood audience on earth — not for lack of data, but for lack of intimacy with it." />{' '}
              <span className="display-italic text-crimson font-normal">
                <Words text="We build that intimacy, in code and in craft." />
              </span>
            </h2>

            <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 border-t border-paper/10 pt-10">
              {NUMBERS.map((n, i) => (
                <motion.div
                  key={n.l}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  <div className="display text-5xl md:text-6xl font-semibold text-paper">{n.k}</div>
                  <div className="mono text-[10px] uppercase tracking-[0.25em] text-paper/50 mt-3">
                    {n.l}
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
