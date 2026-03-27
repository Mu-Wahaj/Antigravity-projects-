import { useEffect, useState } from 'react'
import gsap from 'gsap'
import { me } from '../data/data'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    gsap.fromTo('.nav-wrap',
      { y: -30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.5 }
    )
    const onScroll = () => {
      setScrolled(window.scrollY > 80)
      // Detect active section
      const sections = ['hero', 'about', 'work', 'skills', 'contact']
      for (const id of sections.reverse()) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 200) {
          setActiveSection(id)
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    setMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const links = [
    { id: 'about', label: 'About' },
    { id: 'work', label: 'Work' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ]

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0,
        zIndex: 100, padding: scrolled ? '12px 0' : '20px 0',
        transition: 'all 0.4s',
        background: scrolled ? 'rgba(5,5,8,0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(24px) saturate(180%)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(24px) saturate(180%)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(0,229,255,0.06)' : '1px solid transparent',
      }}>
        <div className="container nav-wrap" style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            data-cursor="link"
            style={{
              background: 'none', border: 'none', cursor: 'none',
              fontFamily: 'var(--font-head)', fontSize: 20, fontWeight: 700,
              color: 'var(--white)', letterSpacing: '0.04em',
              display: 'flex', alignItems: 'center', gap: 4,
            }}
          >
            {me.initials}
            <span style={{ color: 'var(--accent)', fontSize: '0.6em' }}>●</span>
          </button>

          {/* Desktop links */}
          <ul style={{
            display: 'flex', listStyle: 'none', gap: 4, alignItems: 'center',
          }} className="nav-links-desktop">
            {links.map(l => (
              <li key={l.id}>
                <button
                  onClick={() => scrollTo(l.id)}
                  data-cursor="link"
                  style={{
                    background: 'none', border: 'none', cursor: 'none',
                    fontFamily: 'var(--font)', fontSize: 13, fontWeight: 500,
                    letterSpacing: '0.04em',
                    color: activeSection === l.id ? 'var(--accent)' : 'var(--grey)',
                    padding: '8px 16px', borderRadius: 6,
                    transition: 'all 0.3s',
                    position: 'relative',
                  }}
                  onMouseEnter={e => e.target.style.color = 'var(--white)'}
                  onMouseLeave={e => {
                    e.target.style.color = activeSection === l.id ? 'var(--accent)' : 'var(--grey)'
                  }}
                >
                  {l.label}
                </button>
              </li>
            ))}
            <li>
              <a href={`mailto:${me.email}`}
                data-cursor="link"
                style={{
                  padding: '10px 22px',
                  background: 'rgba(0,229,255,0.08)',
                  border: '1px solid rgba(0,229,255,0.2)',
                  borderRadius: 8, fontSize: 13, fontWeight: 600,
                  letterSpacing: '0.02em',
                  color: 'var(--accent)', marginLeft: 12,
                  transition: 'all 0.3s', display: 'inline-block',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'var(--accent)'
                  e.currentTarget.style.color = '#050508'
                  e.currentTarget.style.boxShadow = '0 0 30px rgba(0,229,255,0.3)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'rgba(0,229,255,0.08)'
                  e.currentTarget.style.color = 'var(--accent)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                Let's Talk
              </a>
            </li>
          </ul>

          {/* Burger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="nav-burger"
            data-cursor="link"
            style={{
              background: 'none', border: 'none', cursor: 'none',
              display: 'none', flexDirection: 'column', gap: 5, padding: 4,
            }}
          >
            {[0, 1, 2].map(i => (
              <span key={i} style={{
                display: 'block', width: 24, height: 2,
                background: 'var(--white)', borderRadius: 2,
                transition: 'all 0.3s',
                transform: menuOpen
                  ? i === 0 ? 'translateY(7px) rotate(45deg)'
                    : i === 2 ? 'translateY(-7px) rotate(-45deg)' : 'scaleX(0)'
                  : 'none',
                opacity: menuOpen && i === 1 ? 0 : 1,
              }} />
            ))}
          </button>
        </div>

        {/* Mobile menu */}
        <div style={{
          overflow: 'hidden', maxHeight: menuOpen ? 400 : 0,
          transition: 'max-height 0.4s var(--ease)',
          background: 'rgba(5,5,8,0.98)',
          backdropFilter: 'blur(30px)',
          borderTop: menuOpen ? '1px solid var(--grey2)' : 'none',
        }}>
          {links.map((l, i) => (
            <button key={l.id} onClick={() => scrollTo(l.id)} style={{
              display: 'flex', alignItems: 'center', gap: 16,
              width: '100%', background: 'none', border: 'none',
              cursor: 'pointer', padding: '22px 28px',
              fontFamily: 'var(--font-head)', fontSize: '1.4rem', fontWeight: 600,
              color: activeSection === l.id ? 'var(--accent)' : 'var(--grey)',
              borderBottom: '1px solid var(--grey2)',
              transition: 'color 0.2s',
            }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--white)'}
              onMouseLeave={e => {
                e.currentTarget.style.color = activeSection === l.id ? 'var(--accent)' : 'var(--grey)'
              }}
            >
              <span style={{
                fontFamily: 'var(--font-mono)', fontSize: '0.6rem',
                color: 'var(--grey2)', fontWeight: 400,
              }}>0{i + 1}</span>
              {l.label}
            </button>
          ))}
        </div>
      </nav>

      <style>{`
        @media (max-width: 768px) {
          .nav-links-desktop { display: none !important; }
          .nav-burger { display: flex !important; }
        }
      `}</style>
    </>
  )
}

export default Navbar
