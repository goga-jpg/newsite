import { motion } from 'framer-motion'
import { Suspense, lazy } from 'react'

const AfricaGlobe = lazy(() => import('../three/AfricaGlobe'))

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen w-full overflow-hidden">
      {/* 3D background */}
      <div className="absolute inset-0">
        <Suspense fallback={null}>
          <AfricaGlobe />
        </Suspense>
      </div>

      {/* grid overlay */}
      <div className="absolute inset-0 grid-bg opacity-60 mask-fade-b pointer-events-none" />

      {/* gradient vignette */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 30%, #05060A 90%), linear-gradient(to bottom, rgba(5,6,10,0.3), rgba(5,6,10,0.9))',
        }}
      />

      <div className="noise" />

      {/* Content */}
      <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-10 pt-32 md:pt-40 pb-20 min-h-screen flex flex-col">
        {/* Top strip */}
        <div className="flex items-center justify-between mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex items-center gap-3"
          >
            <span className="text-mono text-xs tracking-[0.3em] text-bone/40">COMPANY PROFILE</span>
            <span className="h-px w-12 bg-bone/20" />
            <span className="text-mono text-xs tracking-[0.3em] text-acid">2026</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="hidden md:flex text-mono text-[10px] tracking-[0.25em] uppercase text-bone/40"
          >
            Strictly Confidential · For Recipient Only
          </motion.div>
        </div>

        {/* Main headline */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="md:col-span-8"
          >
            <h1 className="text-display text-[12vw] md:text-[8.5vw] lg:text-[7.5rem] font-semibold leading-[0.88]">
              We are the <br />
              <span className="relative inline-block">
                <span className="relative z-10 shine-text animate-shine">audience</span>
              </span>{' '}
              <span className="text-bone/60 italic font-light">intelligence</span><br />
              partner for Africa.
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="md:col-span-4 md:pb-4"
          >
            <p className="text-bone/70 text-base md:text-lg leading-relaxed max-w-md">
              We digitize the consumer supply chain and build the continent's largest repository of unique,
              actionable audiences — powering real-time activation across every channel.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <a href="#solution" className="btn-primary">
                Explore Solution
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </a>
              <a href="#contact" className="btn-ghost">Talk to us</a>
            </div>
          </motion.div>
        </div>

        {/* Bottom strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mt-16 md:mt-20 pt-6 border-t border-bone/10 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { k: '3', v: 'Core Markets' },
            { k: '290+', v: 'Sub-Counties (Kenya)' },
            { k: '774', v: 'LGAs (Nigeria)' },
            { k: '13K+', v: 'Farmer Segments' },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col">
              <span className="text-display text-3xl md:text-4xl text-acid">{stat.k}</span>
              <span className="text-mono text-xs uppercase tracking-widest text-bone/50 mt-1">
                {stat.v}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-bone/40"
        >
          <span className="text-mono text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-bone/40 to-transparent animate-pulse" />
        </motion.div>
      </div>
    </section>
  )
}
