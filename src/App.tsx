import { useEffect } from 'react'
import Lenis from 'lenis'

import Nav from './components/Nav'
import Cursor from './components/Cursor'
import ScrollProgress from './components/ScrollProgress'

import Hero from './sections/Hero'
import Problem from './sections/Problem'
import Solution from './sections/Solution'
import Products from './sections/Products'
import Services from './sections/Services'
import Clients from './sections/Clients'
import Presence from './sections/Presence'
import Architecture from './sections/Architecture'
import AudiencePath from './sections/AudiencePath'
import CreativePath from './sections/CreativePath'
import MediaPath from './sections/MediaPath'
import HappyHour from './sections/HappyHour'
import ContentCabal from './sections/ContentCabal'
import Chlorophyll from './sections/Chlorophyll'
import Team from './sections/Team'
import CTA from './sections/CTA'

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
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
        <Problem />
        <Solution />
        <Products />
        <Services />
        <Architecture />
        <AudiencePath />
        <CreativePath />
        <MediaPath />
        <HappyHour />
        <ContentCabal />
        <Chlorophyll />
        <Clients />
        <Presence />
        <Team />
        <CTA />
      </main>
    </div>
  )
}
