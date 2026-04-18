import { useEffect } from 'react'
import Lenis from 'lenis'

import Nav from './components/Nav'
import Cursor from './components/Cursor'
import ScrollProgress from './components/ScrollProgress'

import Hero from './sections/Hero'
import Manifesto from './sections/Manifesto'
import Capabilities from './sections/Capabilities'
import Work from './sections/Work'
import Services from './sections/Services'
import Proof from './sections/Proof'
import Studio from './sections/Studio'
import Contact from './sections/Contact'

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.3,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })
    let id = 0
    const raf = (time: number) => {
      lenis.raf(time)
      id = requestAnimationFrame(raf)
    }
    id = requestAnimationFrame(raf)
    return () => {
      cancelAnimationFrame(id)
      lenis.destroy()
    }
  }, [])

  return (
    <div className="relative">
      <ScrollProgress />
      <Nav />
      <Cursor />
      <main>
        <Hero />
        <Manifesto />
        <Capabilities />
        <Work />
        <Services />
        <Proof />
        <Studio />
        <Contact />
      </main>
    </div>
  )
}
