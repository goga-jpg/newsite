import { motion } from 'framer-motion'
import { PROOF } from '../lib/data'
import Marquee from '../components/Marquee'
import SectionLabel from '../components/SectionLabel'

export default function Proof() {
  return (
    <section className="relative py-32 md:py-40 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10">
        <SectionLabel n="05" label="Selected Clients" />

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="display text-5xl md:text-7xl font-semibold mt-8 mb-16 max-w-4xl"
        >
          In good <span className="display-italic text-crimson font-normal">company</span>.
        </motion.h2>
      </div>

      <div className="border-y border-paper/10 py-10">
        <Marquee items={PROOF} className="display text-4xl md:text-6xl text-paper" />
      </div>

      <div className="max-w-[1600px] mx-auto px-6 md:px-10 mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="display text-3xl md:text-4xl font-light leading-[1.15] text-paper"
        >
          <span className="text-crimson">“</span>
          Data that is loved tends to survive. We apply empathy across data touchpoints to
          delve deeper into audience stories and craft grounded strategies.
          <span className="text-crimson">”</span>
        </motion.blockquote>
        <div className="border-l border-paper/10 pl-8 flex flex-col justify-end">
          <div className="mono text-[10px] uppercase tracking-[0.3em] text-paper/40">
            Working principle
          </div>
          <p className="text-paper/70 mt-3 text-sm leading-relaxed">
            Every engagement begins with a question — never a deliverable. Strategy,
            creative and media arrive in service of the answer.
          </p>
        </div>
      </div>
    </section>
  )
}
