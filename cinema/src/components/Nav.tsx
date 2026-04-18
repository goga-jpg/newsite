import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Logo from './Logo'
import { NAV } from '../lib/data'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.15, duration: 0.7 }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-ink/80 backdrop-blur-xl border-b border-white/5' : ''
      }`}
    >
      <div className="max-w-[1920px] mx-auto px-6 md:px-10 h-16 md:h-[4.5rem] flex items-center justify-between gap-6">
        <a href="#top" className="flex items-center gap-3 group shrink-0">
          <Logo size={28} />
          <span className="mono text-[10px] tracking-[0.4em] text-paper/70 group-hover:text-crimson transition-colors hidden sm:inline">
            5DM
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="mono text-[11px] tracking-[0.25em] uppercase text-paper/70 hover:text-paper transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <span className="hidden lg:flex items-center gap-2 mono text-[10px] uppercase tracking-[0.25em] text-paper/40">
            <span className="w-1.5 h-1.5 rounded-full bg-crimson animate-pulse" />
            On air
          </span>
          <a
            href="#contact"
            className="hidden sm:inline-flex mono text-[11px] uppercase tracking-[0.2em] bg-crimson text-paper px-4 py-2 hover:bg-crimson-deep transition-colors"
          >
            Insider
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 border border-white/20"
            aria-label="Menu"
          >
            <span className={`block h-px w-4 bg-paper transition ${open ? 'rotate-45 translate-y-1.5' : ''}`} />
            <span className={`block h-px w-4 bg-paper transition ${open ? '-rotate-45 -translate-y-0.5' : ''}`} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            className="md:hidden overflow-hidden bg-ink/95 backdrop-blur-xl border-t border-white/5"
          >
            <div className="px-6 py-6 flex flex-col gap-1">
              {NAV.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="py-4 display text-3xl border-b border-white/5"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
