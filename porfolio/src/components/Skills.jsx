import { useState, useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Marquee from 'react-fast-marquee'
import { skills, marqueeItems } from '../data/data'

gsap.registerPlugin(ScrollTrigger)

const Skills = () => {
  const [open, setOpen] = useState(null)
  const sectionRef = useRef(null)

  useEffect(() => {
    gsap.fromTo('.skills-title',
      { opacity: 0, y: 60 },
      {
        opacity: 1, y: 0, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 70%', once: true }
      }
    )
    gsap.fromTo('.skill-cat-row',
      { opacity: 0, y: 30 },
      {
        opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: '.skills-accordion', start: 'top 75%', once: true }
      }
    )
  }, [])

  const catColors = ['#00e5ff', '#7c4dff', '#00ff87', '#ff6090']

  return (
    <section id="skills" ref={sectionRef} style={{ padding: '160px 0', position: 'relative', zIndex: 1 }}>
      {/* Marquee */}
      <div style={{
        overflow: 'hidden',
        borderTop: '1px solid var(--grey2)',
        borderBottom: '1px solid var(--grey2)',
        padding: '16px 0', marginBottom: 100,
        background: 'rgba(0,229,255,0.01)',
      }}>
        <Marquee gradient={false} speed={35} pauseOnHover>
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} style={{
              padding: '0 36px',
              fontFamily: 'var(--font-mono)',
              fontSize: 14, fontWeight: 500,
              letterSpacing: '0.08em', textTransform: 'uppercase',
              color: 'var(--grey)', whiteSpace: 'nowrap',
              display: 'inline-flex', alignItems: 'center', gap: 18,
            }}>
              <span style={{
                color: 'var(--accent)', fontSize: 8,
                textShadow: '0 0 10px var(--accent)',
              }}>◆</span>
              {item}
            </span>
          ))}
        </Marquee>
      </div>

      <div className="section-divider" />

      <div className="container" style={{ paddingTop: 80 }}>
        <div className="section-tag">Expertise</div>

        <div className="skills-grid" style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: '60px 80px', alignItems: 'start',
        }}>
          {/* Left: title */}
          <div>
            <h2 className="skills-title" style={{
              fontFamily: 'var(--font-head)',
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
              fontWeight: 700, letterSpacing: '-0.02em',
              color: 'var(--white)', lineHeight: 1.1,
              marginBottom: 24,
            }}>
              Skills &amp;{' '}
              <span className="gradient-text">Technologies</span>
            </h2>
            <p style={{
              fontSize: 16, color: 'var(--grey)',
              lineHeight: 1.8, maxWidth: 420,
              fontFamily: 'var(--font)',
            }}>
              2+ years working with modern web technologies.
              Always learning, always building, always pushing boundaries.
            </p>
          </div>

          {/* Right: accordion */}
          <div className="skills-accordion" style={{ display: 'flex', flexDirection: 'column' }}>
            {skills.map((s, i) => (
              <div key={s.cat} className="skill-cat-row" style={{
                borderBottom: '1px solid var(--grey2)',
                transition: 'all 0.3s',
              }}>
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  data-cursor="link"
                  style={{
                    width: '100%', background: 'none', border: 'none',
                    cursor: 'none', display: 'flex', justifyContent: 'space-between',
                    alignItems: 'center', padding: '24px 0',
                    fontFamily: 'var(--font-head)',
                    fontSize: 'clamp(1.1rem, 1.8vw, 1.3rem)',
                    fontWeight: 600,
                    color: open === i ? catColors[i] : 'var(--white2)',
                    transition: 'color 0.3s',
                  }}
                  onMouseEnter={e => { if (open !== i) e.currentTarget.style.color = 'var(--white)' }}
                  onMouseLeave={e => { if (open !== i) e.currentTarget.style.color = 'var(--white2)' }}
                >
                  <span style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                    <span style={{
                      fontFamily: 'var(--font-mono)', fontSize: 12,
                      color: catColors[i], fontWeight: 400,
                      opacity: 0.5,
                    }}>0{i + 1}</span>
                    {s.cat}
                  </span>
                  <span style={{
                    fontSize: 22, lineHeight: 1,
                    transform: open === i ? 'rotate(45deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s var(--ease)',
                    color: open === i ? catColors[i] : 'var(--grey)',
                  }}>+</span>
                </button>

                {/* Expandable tags */}
                <div style={{
                  maxHeight: open === i ? '200px' : 0,
                  overflow: 'hidden',
                  transition: 'max-height 0.4s var(--ease)',
                }}>
                  <div style={{
                    display: 'flex', flexWrap: 'wrap', gap: 8,
                    paddingBottom: 28,
                  }}>
                    {s.items.map(item => (
                      <span key={item} style={{
                        fontFamily: 'var(--font-mono)',
                        padding: '7px 16px',
                        background: `${catColors[i]}08`,
                        border: `1px solid ${catColors[i]}25`,
                        borderRadius: 8, fontSize: 13,
                        color: 'var(--white)', letterSpacing: '0.02em',
                        transition: 'all 0.3s', fontWeight: 400,
                        cursor: 'default',
                      }}
                        onMouseEnter={e => {
                          e.currentTarget.style.background = `${catColors[i]}15`
                          e.currentTarget.style.borderColor = `${catColors[i]}50`
                          e.currentTarget.style.boxShadow = `0 0 15px ${catColors[i]}15`
                        }}
                        onMouseLeave={e => {
                          e.currentTarget.style.background = `${catColors[i]}08`
                          e.currentTarget.style.borderColor = `${catColors[i]}25`
                          e.currentTarget.style.boxShadow = 'none'
                        }}
                      >{item}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .skills-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  )
}

export default Skills
