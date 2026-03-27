import { useState, useEffect } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Loader       from './components/Loader'
import ParticleField from './components/ParticleField'
import Cursor       from './components/Cursor'
import Navbar       from './components/Navbar'
import SocialBar    from './components/SocialBar'
import Hero         from './components/Hero'
import About        from './components/About'
import Projects     from './components/Projects'
import Skills       from './components/Skills'
import Contact      from './components/Contact'
import './styles/global.css'

gsap.registerPlugin(ScrollTrigger)

export default function App() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    if (!loaded) return

    const lenis = new Lenis({
      duration:    1.4,
      easing:      t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    lenis.on('scroll', ScrollTrigger.update)
    gsap.ticker.add(t => lenis.raf(t * 1000))
    gsap.ticker.lagSmoothing(0)

    lenis.on('scroll', ({ progress }) => {
      document.documentElement.style.setProperty('--sp', `${progress * 100}%`)
    })

    return () => {
      lenis.destroy()
    }
  }, [loaded])

  return (
    <>
      {!loaded && <Loader onDone={() => setLoaded(true)} />}

      {/* Scroll progress line */}
      <div style={{
        position: 'fixed', top: 0, left: 0, zIndex: 9999,
        height: 2, width: 'var(--sp, 0%)',
        background: 'linear-gradient(90deg, #00e5ff, #7c4dff)',
        pointerEvents: 'none', transition: 'width 0.08s linear',
        boxShadow: '0 0 10px rgba(0,229,255,0.5)',
      }} />

      <div style={{ opacity: loaded ? 1 : 0, transition: 'opacity 0.5s' }}>
        {/* 3D Background */}
        <ParticleField />

        {/* Background grid */}
        <div className="bg-grid" />

        {/* UI */}
        <Cursor />
        <Navbar />
        <SocialBar />
        <main style={{ position: 'relative', zIndex: 1 }}>
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Contact />
        </main>
      </div>
    </>
  )
}
