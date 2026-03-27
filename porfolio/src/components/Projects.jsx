import { useState, useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { MdArrowOutward } from 'react-icons/md'
import { FaGithub } from 'react-icons/fa'
import { projects } from '../data/data'

gsap.registerPlugin(ScrollTrigger)

const Projects = () => {
  const [hovered, setHovered] = useState(null)
  const sectionRef = useRef(null)

  useEffect(() => {
    gsap.fromTo('.projects-title',
      { opacity: 0, y: 60 },
      {
        opacity: 1, y: 0, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%', once: true }
      }
    )
    gsap.fromTo('.project-card',
      { opacity: 0, y: 50 },
      {
        opacity: 1, y: 0, duration: 0.8, stagger: 0.12, ease: 'power3.out',
        scrollTrigger: { trigger: '.projects-grid', start: 'top 75%', once: true }
      }
    )
  }, [])

  return (
    <section id="work" ref={sectionRef} style={{ padding: '160px 0', position: 'relative', zIndex: 1 }}>
      <div className="section-divider" />
      <div className="container" style={{ paddingTop: 80 }}>
        <div className="section-tag">Selected Work</div>

        <div style={{
          display: 'flex', justifyContent: 'space-between',
          alignItems: 'flex-end', marginBottom: 60,
          flexWrap: 'wrap', gap: 20,
        }}>
          <h2 className="projects-title" style={{
            fontFamily: 'var(--font-head)',
            fontSize: 'clamp(2.5rem, 6vw, 5.5rem)',
            fontWeight: 700, letterSpacing: '-0.02em',
            lineHeight: 1.05, color: 'var(--white)',
          }}>
            Featured{' '}
            <span className="gradient-text">Projects</span>
          </h2>

          <a href="https://github.com/Mu-Wahaj" target="_blank" rel="noopener noreferrer"
            data-cursor="link"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              fontFamily: 'var(--font-mono)', fontSize: 13, fontWeight: 500,
              color: 'var(--grey)', padding: '8px 16px',
              border: '1px solid var(--grey2)', borderRadius: 8,
              transition: 'all 0.3s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.color = 'var(--accent)'
              e.currentTarget.style.borderColor = 'var(--accent)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.color = 'var(--grey)'
              e.currentTarget.style.borderColor = 'var(--grey2)'
            }}
          >
            <FaGithub size={16} /> View All <MdArrowOutward size={14} />
          </a>
        </div>

        {/* Project cards - 2 column grid */}
        <div className="projects-grid" style={{
          display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)',
          gap: 24,
        }}>
          {projects.map((p, i) => (
            <div
              key={p.id}
              className="project-card glass-card"
              data-cursor="view"
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                padding: 32, borderRadius: 20,
                cursor: 'none', transition: 'all 0.4s',
                transform: hovered === i ? 'translateY(-4px)' : 'translateY(0)',
                borderColor: hovered === i ? 'rgba(0,229,255,0.15)' : 'rgba(255,255,255,0.06)',
                boxShadow: hovered === i ? '0 20px 60px rgba(0,0,0,0.4), 0 0 40px rgba(0,229,255,0.05)' : 'none',
              }}
            >
              {/* Top row: number + year */}
              <div style={{
                display: 'flex', justifyContent: 'space-between',
                alignItems: 'center', marginBottom: 24,
              }}>
                <span style={{
                  fontFamily: 'var(--font-mono)', fontSize: 13,
                  color: 'var(--accent)', fontWeight: 500,
                  opacity: 0.6,
                }}>{p.num}</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{
                    fontFamily: 'var(--font-mono)', fontSize: 12,
                    color: 'var(--grey)', letterSpacing: '0.05em',
                  }}>{p.year}</span>
                  {p.status === 'wip' && (
                    <span style={{
                      fontSize: 10, padding: '3px 10px',
                      background: 'rgba(124,77,255,0.1)',
                      border: '1px solid rgba(124,77,255,0.2)',
                      borderRadius: 20, color: 'var(--accent2)',
                      fontFamily: 'var(--font-mono)', fontWeight: 500,
                      letterSpacing: '0.05em',
                    }}>In Progress</span>
                  )}
                </div>
              </div>

              {/* Title */}
              <h3 style={{
                fontFamily: 'var(--font-head)',
                fontSize: 'clamp(1.4rem, 2.5vw, 2rem)',
                fontWeight: 700, letterSpacing: '-0.02em',
                color: 'var(--white)', marginBottom: 6,
                transition: 'color 0.3s',
              }}>{p.title}</h3>

              {/* Tag */}
              <div style={{
                fontFamily: 'var(--font-mono)', fontSize: 13,
                color: 'var(--accent)', letterSpacing: '0.04em',
                marginBottom: 16, fontWeight: 500,
              }}>{p.tag}</div>

              {/* Description */}
              <p style={{
                fontSize: 15, color: 'var(--grey)',
                lineHeight: 1.75, marginBottom: 24,
                fontFamily: 'var(--font)', fontWeight: 400,
              }}>{p.desc}</p>

              {/* Tech tags */}
              <div style={{
                display: 'flex', flexWrap: 'wrap', gap: 8,
                marginBottom: 24,
              }}>
                {p.tech.map(t => (
                  <span key={t} style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 11, padding: '4px 12px',
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid var(--grey2)',
                    borderRadius: 6, color: 'var(--white2)',
                    letterSpacing: '0.03em', fontWeight: 400,
                  }}>{t}</span>
                ))}
              </div>

              {/* Links */}
              <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                {p.status === 'live' ? (
                  <>
                    {p.github && (
                      <a href={p.github} target="_blank" rel="noopener noreferrer"
                        data-cursor="link" onClick={e => e.stopPropagation()}
                        style={{
                          display: 'inline-flex', alignItems: 'center', gap: 6,
                          padding: '8px 16px', border: '1px solid var(--grey2)',
                          borderRadius: 8, fontSize: 12, color: 'var(--grey)',
                          fontFamily: 'var(--font-mono)',
                          transition: 'all 0.3s',
                        }}
                        onMouseEnter={e => {
                          e.currentTarget.style.color = 'var(--white)'
                          e.currentTarget.style.borderColor = 'var(--white)'
                        }}
                        onMouseLeave={e => {
                          e.currentTarget.style.color = 'var(--grey)'
                          e.currentTarget.style.borderColor = 'var(--grey2)'
                        }}
                      ><FaGithub size={14} /> Code</a>
                    )}
                    {p.live && (
                      <a href={p.live} target="_blank" rel="noopener noreferrer"
                        data-cursor="link" onClick={e => e.stopPropagation()}
                        style={{
                          display: 'inline-flex', alignItems: 'center', gap: 6,
                          padding: '8px 16px',
                          background: 'linear-gradient(135deg, var(--accent), #00b8d4)',
                          borderRadius: 8, fontSize: 12, fontWeight: 600,
                          color: '#050508', fontFamily: 'var(--font-mono)',
                          transition: 'all 0.3s',
                          boxShadow: '0 0 20px rgba(0,229,255,0.15)',
                        }}
                        onMouseEnter={e => {
                          e.currentTarget.style.boxShadow = '0 0 30px rgba(0,229,255,0.3)'
                          e.currentTarget.style.transform = 'translateY(-1px)'
                        }}
                        onMouseLeave={e => {
                          e.currentTarget.style.boxShadow = '0 0 20px rgba(0,229,255,0.15)'
                          e.currentTarget.style.transform = 'translateY(0)'
                        }}
                      >Live <MdArrowOutward size={12} /></a>
                    )}
                  </>
                ) : (
                  <span style={{
                    fontFamily: 'var(--font-mono)', fontSize: 11,
                    color: 'var(--grey2)', letterSpacing: '0.08em',
                  }}>Coming Soon</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .projects-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}

export default Projects
