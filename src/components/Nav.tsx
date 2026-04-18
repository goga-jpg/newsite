import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Logo from './Logo'
import { NAV } from '../lib/data'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.8 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-ink/70 backdrop-blur-xl border-b border-bone/5' : ''
      }`}
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 h-16 md:h-20 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3 group">
          <Logo size={28} />
          <span className="text-mono text-xs tracking-[0.3em] text-bone/70 group-hover:text-acid transition-colors hidden sm:inline">
            5DM / GROUP
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative px-4 py-2 text-sm text-bone/70 hover:text-bone transition-colors group"
            >
              {item.label}
              <span className="absolute bottom-1 left-4 right-4 h-px bg-acid scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden lg:flex text-mono text-[11px] text-bone/40 uppercase tracking-widest">
            <span className="text-acid mr-2">●</span>
            Nairobi · Lagos · Jo'burg
          </div>
          <a href="#contact" className="hidden sm:inline-flex btn-primary !px-4 !py-2 !text-xs">
            Start a Project
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 border border-bone/20 rounded-full"
            aria-label="Menu"
          >
            <span className={`block h-px w-4 bg-bone transition ${open ? 'rotate-45 translate-y-1.5' : ''}`} />
            <span className={`block h-px w-4 bg-bone transition ${open ? '-rotate-45 -translate-y-0.5' : ''}`} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            className="md:hidden overflow-hidden bg-ink/95 backdrop-blur-xl border-t border-bone/5"
          >
            <div className="px-6 py-6 flex flex-col gap-2">
              {NAV.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="py-3 text-display text-2xl border-b border-bone/5"
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
