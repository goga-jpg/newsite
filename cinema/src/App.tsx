import { useEffect } from 'react'
import Lenis from 'lenis'
import Nav from './components/Nav'
import Cursor from './components/Cursor'
import ScrollProgress from './components/ScrollProgress'
import Hero from './sections/Hero'
import Featured from './sections/Featured'
import Marquee from './sections/Marquee'
import Grid from './sections/Grid'
import Latest from './sections/Latest'
import Studio from './sections/Studio'
import Footer from './sections/Footer'

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
      wheelMultiplier: 1,
    })
    let raf = 0
    const loop = (time: number) => {
      lenis.raf(time)
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    return () => {
      cancelAnimationFrame(raf)
      lenis.destroy()
    }
  }, [])

  return (
    <div className="relative">
      <ScrollProgress />
      <Cursor />
      <Nav />
      <main>
        <Hero />
        <Featured />
        <Marquee />
        <Grid />
        <Latest />
        <Studio />
      </main>
      <Footer />
    </div>
  )
}
