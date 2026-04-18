import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { PRODUCTS } from '../lib/data'

const ILLUS: Record<string, JSX.Element> = {
  audience: <AudienceIllus />,
  creative: <CreativeIllus />,
  media: <MediaIllus />,
}

function AudienceIllus() {
  return (
    <svg viewBox="0 0 400 400" className="w-full h-full">
      <defs>
        <radialGradient id="ag1" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#C9FF3B" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#C9FF3B" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="200" cy="200" r="180" fill="url(#ag1)" />
      {Array.from({ length: 50 }).map((_, i) => {
        const a = (i / 50) * Math.PI * 2
        const r = 60 + (i % 4) * 30
        return <circle key={i} cx={200 + Math.cos(a) * r} cy={200 + Math.sin(a) * r} r="2.5" fill="#C9FF3B" opacity={0.4 + (i % 3) * 0.2} />
      })}
      <circle cx="200" cy="200" r="18" fill="#C9FF3B" />
      <circle cx="200" cy="200" r="60" fill="none" stroke="#C9FF3B" strokeOpacity="0.4" />
      <circle cx="200" cy="200" r="110" fill="none" stroke="#C9FF3B" strokeOpacity="0.25" />
      <circle cx="200" cy="200" r="160" fill="none" stroke="#C9FF3B" strokeOpacity="0.15" />
    </svg>
  )
}

function CreativeIllus() {
  return (
    <svg viewBox="0 0 400 400" className="w-full h-full">
      <defs>
        <linearGradient id="cg1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#C9FF3B" />
          <stop offset="100%" stopColor="#FF4D2E" />
        </linearGradient>
      </defs>
      <g transform="translate(200, 200)">
        {[0, 30, 60, 90, 120, 150].map((a, i) => (
          <rect
            key={i}
            x="-70"
            y="-70"
            width="140"
            height="140"
            fill="none"
            stroke="url(#cg1)"
            strokeOpacity={0.5 - i * 0.07}
            transform={`rotate(${a})`}
          />
        ))}
        <rect x="-40" y="-40" width="80" height="80" fill="#C9FF3B" opacity="0.9" />
        <circle r="20" fill="#05060A" />
      </g>
    </svg>
  )
}

function MediaIllus() {
  return (
    <svg viewBox="0 0 400 400" className="w-full h-full">
      {Array.from({ length: 8 }).map((_, i) => {
        const y = 60 + i * 40
        return (
          <g key={i}>
            <line x1="40" y1={y} x2="360" y2={y} stroke="#C9FF3B" strokeOpacity={0.15} />
            {Array.from({ length: 6 }).map((_, j) => {
              const x = 60 + j * 56 + (i % 2) * 28
              return <circle key={j} cx={x} cy={y} r={3 + (j % 3)} fill="#C9FF3B" opacity={0.3 + (j % 3) * 0.2} />
            })}
          </g>
        )
      })}
      <circle cx="200" cy="200" r="30" fill="#C9FF3B" />
      <circle cx="200" cy="200" r="30" fill="none" stroke="#C9FF3B" strokeOpacity="0.4">
        <animate attributeName="r" from="30" to="120" dur="2s" repeatCount="indefinite" />
        <animate attributeName="opacity" from="0.6" to="0" dur="2s" repeatCount="indefinite" />
      </circle>
    </svg>
  )
}

export default function Products() {
  const [active, setActive] = useState(0)
  const p = PRODUCTS[active]

  return (
    <section id="products" className="relative py-32 md:py-40 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10">
        <div className="flex items-center gap-4 mb-6">
          <span className="section-label">04 / Our Products</span>
          <span className="h-px flex-1 bg-bone/10" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="md:col-span-8 text-display text-5xl md:text-7xl lg:text-8xl font-semibold"
          >
            Three paths. <br />
            <span className="text-bone/50 italic font-light">One</span> intelligent engine.
          </motion.h2>
          <p className="md:col-span-4 text-bone/60 md:pt-6">
            Audience, Creative, and Media Path are modular yet deeply connected — each one
            feeds the next with live data, creating a compounding advantage.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {PRODUCTS.map((prod, i) => (
            <button
              key={prod.key}
              onClick={() => setActive(i)}
              className={`text-mono text-xs uppercase tracking-widest px-5 py-3 rounded-full border transition-all ${
                active === i
                  ? 'bg-acid text-ink border-acid'
                  : 'border-bone/20 text-bone/60 hover:border-bone/40 hover:text-bone'
              }`}
            >
              <span className="opacity-60 mr-2">0{i + 1}</span>
              {prod.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          <AnimatePresence mode="wait">
            <motion.div
              key={p.key}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.5 }}
              className="md:col-span-7 glass rounded-3xl p-10 md:p-14 relative overflow-hidden min-h-[420px]"
            >
              <div className="absolute inset-0 dot-bg opacity-40" />
              <div className="relative">
                <span className="text-mono text-xs text-acid tracking-widest">{p.sub}</span>
                <h3 className="text-display text-4xl md:text-6xl font-semibold mt-3 mb-6">{p.name}</h3>
                <p className="text-xl md:text-2xl font-light text-bone/90 mb-6 leading-snug max-w-xl">
                  {p.headline}
                </p>
                <p className="text-bone/60 max-w-xl leading-relaxed">{p.body}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          <motion.div
            key={p.key + '-illus'}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-5 rounded-3xl border border-bone/10 bg-ink/40 relative overflow-hidden min-h-[420px] flex items-center justify-center p-8"
          >
            {ILLUS[p.key]}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
