import { motion } from 'framer-motion'
import { Suspense, lazy } from 'react'

const HeroSculpture = lazy(() => import('../three/HeroSculpture'))

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[100dvh] w-full overflow-hidden">
      {/* 3D centerpiece */}
      <div className="absolute inset-0">
        <Suspense fallback={null}>
          <HeroSculpture />
        </Suspense>
      </div>

      {/* vertical rules */}
      <div className="absolute inset-0 rules-bg opacity-50 pointer-events-none" />

      {/* vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 50% 55%, transparent 0%, rgba(0,0,0,0.75) 100%)',
        }}
      />

      <div className="grain" />

      {/* top meta strip */}
      <div className="absolute top-20 md:top-24 left-0 right-0 px-6 md:px-10 z-10">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="max-w-[1600px] mx-auto flex items-center justify-between"
        >
          <span className="mono text-[10px] tracking-[0.3em] uppercase text-paper/40">
            Audience Intelligence · Africa
          </span>
          <span className="mono text-[10px] tracking-[0.3em] uppercase text-paper/40 hidden md:inline">
            Est. in Nairobi · Continental
          </span>
        </motion.div>
      </div>

      {/* Main headline bottom-anchored for cinematic feel */}
      <div className="relative z-10 h-[100dvh] flex flex-col justify-end">
        <div className="max-w-[1600px] mx-auto w-full px-6 md:px-10 pb-24 md:pb-32">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="eyebrow mb-6 flex items-center gap-3"
          >
            <span className="w-8 h-px bg-crimson" />
            A studio for the African century
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="display text-[14vw] md:text-[9.5vw] lg:text-[8.2rem] font-semibold tracking-hero max-w-[14ch]"
          >
            We turn{' '}
            <span className="text-crimson">signal</span>{' '}
            <span className="display-italic font-normal">into</span>{' '}
            <span className="display-italic font-normal">strategy.</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 items-end"
          >
            <p className="md:col-span-2 text-paper/70 max-w-xl text-base md:text-lg leading-relaxed">
              5DM is an audience intelligence studio — building the continent's largest
              repository of actionable audiences, and making bold work for the brands who
              use them.
            </p>
            <div className="flex items-center gap-3 md:justify-end">
              <a href="#work" className="btn-crimson">
                See the work
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M7 17L17 7M17 7H9M17 7V15" />
                </svg>
              </a>
              <a href="#contact" className="btn-outline">Contact</a>
            </div>
          </motion.div>
        </div>

        {/* bottom ticker */}
        <div className="border-t border-paper/10 py-4">
          <div className="max-w-[1600px] mx-auto px-6 md:px-10 flex items-center justify-between gap-6 mono text-[10px] tracking-[0.28em] uppercase text-paper/40">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-crimson animate-pulse" />
              Accepting 2026 engagements
            </span>
            <span className="hidden md:inline">Nairobi · Lagos · Johannesburg · Cape Town</span>
            <span>Scroll ↓</span>
          </div>
        </div>
      </div>
    </section>
  )
}
