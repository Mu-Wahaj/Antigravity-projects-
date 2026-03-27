import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { me } from '../data/data'

gsap.registerPlugin(ScrollTrigger)

const About = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.about-headline',
        { opacity: 0, y: 60 },
        {
          opacity: 1, y: 0, duration: 1.2, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 70%', once: true }
        }
      )
      gsap.fromTo('.about-bio',
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: '.about-bio', start: 'top 80%', once: true }
        }
      )
      gsap.fromTo('.about-info-item',
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: 'power3.out',
          scrollTrigger: { trigger: '.about-grid', start: 'top 75%', once: true }
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const infoItems = [
    { label: 'Education', val: me.education, icon: '🎓' },
    { label: 'Location', val: me.location + ' · Remote Available', icon: '📍' },
    { label: 'Email', val: me.email, href: `mailto:${me.email}`, icon: '✉️' },
    { label: 'Phone', val: me.phone, href: `tel:${me.phone}`, icon: '📱' },
    { label: 'Status', val: 'Open to Opportunities', accent: true, icon: '🟢' },
  ]

  return (
    <section id="about" ref={sectionRef} style={{ padding: '160px 0', position: 'relative', zIndex: 1 }}>
      <div className="section-divider" />
      <div className="container" style={{ paddingTop: 80 }}>
        <div className="section-tag">About Me</div>

        {/* Headline */}
        <h2 className="about-headline" style={{
          fontFamily: 'var(--font-head)',
          fontSize: 'clamp(2.5rem, 6vw, 5.5rem)',
          fontWeight: 700, letterSpacing: '-0.02em',
          lineHeight: 1.1, color: 'var(--white)',
          marginBottom: 80, maxWidth: 900,
        }}>
          Building the web{' '}
          <span style={{
            color: 'transparent',
            WebkitTextStroke: '1.5px var(--grey)',
          }}>one pixel</span>{' '}
          <span className="gradient-text">at a time.</span>
        </h2>

        {/* Two column grid */}
        <div className="about-grid" style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: 80, alignItems: 'start',
        }}>
          {/* Left: bio */}
          <div className="about-bio">
            <p style={{
              fontSize: 'clamp(1.05rem, 1.4vw, 1.2rem)',
              color: 'var(--white2)', lineHeight: 1.9,
              marginBottom: 40, fontFamily: 'var(--font)',
              fontWeight: 400,
            }}>{me.bio}</p>

            <a href={`mailto:${me.email}`}
              data-cursor="link"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 10,
                padding: '14px 30px',
                background: 'rgba(0,229,255,0.06)',
                border: '1px solid rgba(0,229,255,0.2)',
                borderRadius: 10, fontSize: 14, fontWeight: 600,
                letterSpacing: '0.04em',
                color: 'var(--accent)', transition: 'all 0.3s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'var(--accent)'
                e.currentTarget.style.color = '#050508'
                e.currentTarget.style.boxShadow = '0 0 30px rgba(0,229,255,0.3)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'rgba(0,229,255,0.06)'
                e.currentTarget.style.color = 'var(--accent)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              Let's Work Together
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

          {/* Right: info list */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {infoItems.map(({ label, val, href, accent, icon }) => (
              <div key={label} className="about-info-item glass-card" style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '20px 24px', marginBottom: 8,
                borderRadius: 12, gap: 20, flexWrap: 'wrap',
                transition: 'all 0.3s',
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'rgba(0,229,255,0.15)'
                  e.currentTarget.style.background = 'rgba(0,229,255,0.03)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'
                  e.currentTarget.style.background = 'var(--bg-card)'
                }}
              >
                <span style={{
                  fontFamily: 'var(--font-mono)', fontSize: 12,
                  letterSpacing: '0.1em', textTransform: 'uppercase',
                  color: 'var(--grey)', flexShrink: 0,
                  display: 'flex', alignItems: 'center', gap: 8,
                }}>
                  <span>{icon}</span> {label}
                </span>
                {href ? (
                  <a href={href} data-cursor="link" style={{
                    fontSize: 15, color: accent ? 'var(--accent)' : 'var(--white)',
                    fontWeight: 500, transition: 'color 0.2s', textAlign: 'right',
                  }}
                    onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
                    onMouseLeave={e => e.currentTarget.style.color = accent ? 'var(--accent)' : 'var(--white)'}
                  >{val}</a>
                ) : (
                  <span style={{
                    fontSize: 15,
                    color: accent ? 'var(--accent3)' : 'var(--white)',
                    fontWeight: 500, textAlign: 'right',
                    textShadow: accent ? '0 0 20px rgba(0,255,135,0.3)' : 'none',
                  }}>{val}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  )
}

export default About
