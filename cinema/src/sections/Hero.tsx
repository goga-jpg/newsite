import { lazy, Suspense } from 'react'
import { motion } from 'framer-motion'

const CinemaScene = lazy(() => import('../three/CinemaScene'))

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden">
      {/* 3D cinematic background */}
      <div className="absolute inset-0">
        <Suspense fallback={<div className="absolute inset-0 bg-[linear-gradient(180deg,#050005,#000,#1a0008)]" />}>
          <CinemaScene />
        </Suspense>
      </div>

      {/* vignette + scrim */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.75)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-80 scrim-b pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-40 scrim-t pointer-events-none" />
      <div className="grain" />

      {/* overlay content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        <div className="flex-1 flex flex-col justify-end pb-16 md:pb-24 px-6 md:px-10 max-w-[1920px] mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1.2, ease: [0.2, 0.8, 0.2, 1] }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="mono text-[11px] tracking-[0.4em] uppercase text-crimson">
              Feature presentation
            </span>
            <span className="w-16 h-px bg-crimson" />
            <span className="mono text-[11px] tracking-[0.4em] uppercase text-paper/50">
              2026
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 1.1, ease: [0.2, 0.8, 0.2, 1] }}
            className="display text-[14vw] md:text-[11vw] leading-[0.88] max-w-[20ch]"
          >
            The <span className="text-crimson">architects</span>
            <br />
            of <span className="italic font-light">modern attention.</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.9 }}
            className="mt-10 grid grid-cols-1 md:grid-cols-[1fr_auto_auto] items-end gap-8 md:gap-12"
          >
            <p className="text-paper/70 text-base md:text-lg max-w-xl leading-relaxed">
              A cinematic studio for African audiences — six titles, one universe. Intelligence,
              creative, media, and ventures built for two-second scrolls and twenty-year brands.
            </p>
            <a
              href="#featured"
              data-cursor="Watch"
              className="btn-crimson group shine-trigger relative"
            >
              <span className="absolute inset-0 shine" />
              <span className="relative">Watch Reel</span>
              <span className="relative inline-block w-2 h-2 border-t border-r border-paper rotate-45" />
            </a>
            <a href="#titles" data-cursor="Explore" className="btn-outline">
              Explore Titles
            </a>
          </motion.div>
        </div>

        {/* bottom ticker */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="border-t border-white/10 bg-ink/40 backdrop-blur-sm"
        >
          <div className="max-w-[1920px] mx-auto px-6 md:px-10 h-14 flex items-center justify-between gap-8 mono text-[10px] uppercase tracking-[0.3em] text-paper/50">
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-2 text-crimson">
                <span className="w-1.5 h-1.5 rounded-full bg-crimson animate-pulse" />
                Live
              </span>
              <span className="hidden sm:inline">Nairobi · Lagos · Johannesburg · Cape Town</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <span>EST. 2014</span>
              <span>250M+ continental reach</span>
              <span className="text-paper/30">↓ scroll</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
