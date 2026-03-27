import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { me } from '../data/data'

const Hero = () => {
  const roleRef = useRef(null)
  const roleIdx = useRef(0)
  const sectionRef = useRef(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouse = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      })
    }
    window.addEventListener('mousemove', handleMouse)
    return () => window.removeEventListener('mousemove', handleMouse)
  }, [])

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.8 })
    tl.fromTo('.hero-tag', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, 0)
      .fromTo('.hero-line-1', { y: '110%' }, { y: '0%', duration: 1.2, ease: 'power4.out' }, 0.1)
      .fromTo('.hero-line-2', { y: '110%' }, { y: '0%', duration: 1.2, ease: 'power4.out' }, 0.2)
      .fromTo('.hero-sub', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' }, 0.5)
      .fromTo('.hero-btns', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, 0.65)
      .fromTo('.hero-stats', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, 0.8)
      .fromTo('.hero-scroll', { opacity: 0 }, { opacity: 1, duration: 0.6 }, 1.2)

    // Role cycle
    const roles = me.roles
    const el = roleRef.current
    if (!el) return
    el.textContent = roles[0]
    const cycle = () => {
      gsap.to(el, {
        y: -20, opacity: 0, duration: 0.3, ease: 'power2.in',
        onComplete: () => {
          roleIdx.current = (roleIdx.current + 1) % roles.length
          el.textContent = roles[roleIdx.current]
          gsap.fromTo(el, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4, ease: 'power2.out' })
        }
      })
    }
    const id = setInterval(cycle, 2800)
    return () => clearInterval(id)
  }, [])

  return (
    <section id="hero" ref={sectionRef} style={{
      minHeight: '100vh', display: 'flex', flexDirection: 'column',
      justifyContent: 'center', padding: '120px 0 80px',
      position: 'relative', overflow: 'hidden', zIndex: 1,
    }}>
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Tag */}
        <div className="hero-tag" style={{
          display: 'inline-flex', alignItems: 'center', gap: 12,
          fontFamily: "var(--font-mono)", fontSize: 14, fontWeight: 500,
          letterSpacing: '0.12em', textTransform: 'uppercase',
          color: 'var(--accent)', marginBottom: 32,
          padding: '8px 20px',
          border: '1px solid rgba(0,229,255,0.2)',
          borderRadius: 30,
          background: 'rgba(0,229,255,0.04)',
        }}>
          <span style={{
            width: 8, height: 8, borderRadius: '50%',
            background: 'var(--accent3)',
            boxShadow: '0 0 12px var(--accent3)',
            animation: 'pulse 2s ease-in-out infinite',
          }} />
          Available for Work
        </div>

        {/* Name - massive, readable */}
        <div style={{
          overflow: 'hidden', lineHeight: 0.9, marginBottom: 8,
          transform: `translate(${mousePos.x * 3}px, ${mousePos.y * 2}px)`,
          transition: 'transform 0.3s ease-out',
        }}>
          <h1 className="hero-line-1" style={{
            fontFamily: 'var(--font-head)',
            fontSize: 'clamp(3.5rem, 11vw, 11rem)',
            fontWeight: 700, letterSpacing: '-0.03em',
            color: 'var(--white)', lineHeight: 0.95,
            textShadow: '0 0 80px rgba(0,229,255,0.08)',
          }}>MUHAMMAD</h1>
        </div>
        <div style={{
          overflow: 'hidden', lineHeight: 0.9, marginBottom: 48,
          transform: `translate(${mousePos.x * -2}px, ${mousePos.y * -1}px)`,
          transition: 'transform 0.3s ease-out',
        }}>
          <h1 className="hero-line-2" style={{
            fontFamily: 'var(--font-head)',
            fontSize: 'clamp(3.5rem, 11vw, 11rem)',
            fontWeight: 700, letterSpacing: '-0.03em',
            color: 'transparent',
            WebkitTextStroke: '2px rgba(238,240,246,0.3)',
            lineHeight: 0.95,
          }}>
            WAHAJ
            <span style={{
              color: 'var(--accent)', WebkitTextStroke: '0',
              fontSize: '0.5em',
              textShadow: '0 0 40px rgba(0,229,255,0.5)',
            }}>.</span>
          </h1>
        </div>

        {/* Bottom row */}
        <div style={{
          display: 'flex', alignItems: 'flex-end',
          justifyContent: 'space-between', flexWrap: 'wrap', gap: 40,
        }}>
          {/* Left: role + desc + buttons */}
          <div style={{ maxWidth: 520 }}>
            <div className="hero-sub" style={{
              display: 'flex', alignItems: 'center', gap: 10,
              fontSize: 'clamp(1rem, 2vw, 1.3rem)',
              color: 'var(--white2)', marginBottom: 20,
              height: '2rem', overflow: 'hidden',
              fontFamily: 'var(--font)',
            }}>
              <span style={{ color: 'var(--grey)' }}>I'm a </span>
              <span ref={roleRef} style={{
                color: 'var(--accent)', fontWeight: 600,
                textShadow: '0 0 20px rgba(0,229,255,0.3)',
              }} />
              <span style={{
                display: 'inline-block', width: 2, height: '1.2em',
                background: 'var(--accent)', marginLeft: 2,
                animation: 'blink 1s step-end infinite',
              }} />
            </div>

            <p className="hero-sub" style={{
              fontSize: 'clamp(0.95rem, 1.3vw, 1.1rem)',
              color: 'var(--grey)', lineHeight: 1.8,
              maxWidth: 460, marginBottom: 36,
              fontFamily: 'var(--font)', fontWeight: 400,
            }}>{me.tagline}</p>

            <div className="hero-btns" style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              <button
                onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
                data-cursor="link"
                style={{
                  padding: '16px 36px',
                  background: 'linear-gradient(135deg, var(--accent), #00b8d4)',
                  color: '#050508', border: 'none', borderRadius: 8,
                  fontFamily: 'var(--font)', fontSize: 14, fontWeight: 700,
                  letterSpacing: '0.04em', textTransform: 'uppercase',
                  cursor: 'none', transition: 'all 0.3s',
                  boxShadow: '0 0 30px rgba(0,229,255,0.2)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-2px)'
                  e.currentTarget.style.boxShadow = '0 0 50px rgba(0,229,255,0.4)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = '0 0 30px rgba(0,229,255,0.2)'
                }}
              >
                View Projects
              </button>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                data-cursor="link"
                style={{
                  padding: '16px 36px', background: 'transparent',
                  color: 'var(--white)', border: '1px solid var(--grey2)',
                  borderRadius: 8, fontFamily: 'var(--font)',
                  fontSize: 14, fontWeight: 600, letterSpacing: '0.04em',
                  textTransform: 'uppercase', cursor: 'none',
                  transition: 'all 0.3s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'var(--accent)'
                  e.currentTarget.style.color = 'var(--accent)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'var(--grey2)'
                  e.currentTarget.style.color = 'var(--white)'
                }}
              >
                Contact Me
              </button>
            </div>
          </div>

          {/* Right: Stats cards */}
          <div className="hero-stats" style={{
            display: 'flex', gap: 20, flexShrink: 0, flexWrap: 'wrap',
          }}>
            {[
              { val: '2+', label: 'Years\nExperience', color: 'var(--accent)' },
              { val: '6+', label: 'Projects\nBuilt', color: 'var(--accent2)' },
              { val: '∞', label: 'Passion &\nDrive', color: 'var(--accent3)' },
            ].map(({ val, label, color }) => (
              <div key={label} className="glass-card" style={{
                padding: '24px 28px', textAlign: 'center',
                minWidth: 110,
              }}>
                <div style={{
                  fontFamily: 'var(--font-head)',
                  fontSize: 'clamp(2rem, 3vw, 2.8rem)',
                  fontWeight: 700, color, lineHeight: 1,
                  textShadow: `0 0 30px ${color}40`,
                  marginBottom: 8,
                }}>{val}</div>
                <div style={{
                  fontSize: 11, color: 'var(--grey)',
                  letterSpacing: '0.08em', textTransform: 'uppercase',
                  fontFamily: 'var(--font-mono)',
                  whiteSpace: 'pre-line', lineHeight: 1.4,
                }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll" style={{
        position: 'absolute', bottom: 36, left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10,
        fontFamily: 'var(--font-mono)', fontSize: 10,
        letterSpacing: '0.2em', textTransform: 'uppercase',
        color: 'var(--grey)',
      }}>
        <div style={{
          width: 20, height: 34, borderRadius: 12,
          border: '1.5px solid var(--grey2)',
          display: 'flex', justifyContent: 'center', paddingTop: 6,
        }}>
          <div style={{
            width: 3, height: 8, borderRadius: 3,
            background: 'var(--accent)',
            animation: 'scrollBounce 2s ease-in-out infinite',
          }} />
        </div>
        Scroll
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(0,255,135,0.4); }
          50% { box-shadow: 0 0 0 8px rgba(0,255,135,0); }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes scrollBounce {
          0%, 100% { transform: translateY(0); opacity: 0.5; }
          50% { transform: translateY(10px); opacity: 1; }
        }
      `}</style>
    </section>
  )
}

export default Hero
