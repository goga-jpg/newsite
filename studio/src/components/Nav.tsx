import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Logo from './Logo'
import { NAV } from '../lib/data'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [time, setTime] = useState(() => new Date())

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    const t = setInterval(() => setTime(new Date()), 30_000)
    return () => {
      window.removeEventListener('scroll', onScroll)
      clearInterval(t)
    }
  }, [])

  const nairobi = time.toLocaleTimeString('en-GB', {
    timeZone: 'Africa/Nairobi',
    hour: '2-digit',
    minute: '2-digit',
  })

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.8 }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-ink/70 backdrop-blur-xl border-b border-paper/5' : ''
      }`}
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 h-16 md:h-20 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3 group">
          <Logo size={26} />
          <span className="mono text-[11px] tracking-[0.28em] text-paper/70 group-hover:text-crimson transition-colors hidden sm:inline">
            5 D M
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {NAV.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-paper/70 hover:text-paper transition-colors link-underline"
            >
              <span className="mono text-[10px] text-crimson mr-2">0{i + 1}</span>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-2 mono text-[10px] tracking-widest text-paper/50">
            <span className="w-1.5 h-1.5 rounded-full bg-crimson animate-pulse" />
            NBO · {nairobi}
          </div>
          <a href="#contact" className="hidden sm:inline-flex btn-crimson !py-2 !px-5 !text-xs">
            Let's talk
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 border border-paper/20 rounded-full"
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
            className="md:hidden overflow-hidden bg-ink/95 backdrop-blur-xl border-t border-paper/5"
          >
            <div className="px-6 py-6 flex flex-col gap-1">
              {NAV.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="py-4 display text-3xl border-b border-paper/5"
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
