import { useState, useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { MdArrowOutward } from 'react-icons/md'
import { FaGithub, FaLinkedinIn, FaXTwitter, FaInstagram } from 'react-icons/fa6'
import { me } from '../data/data'

gsap.registerPlugin(ScrollTrigger)

const Contact = () => {
  const sectionRef = useRef(null)
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState({ type: '', msg: '' })
  const [sending, setSending] = useState(false)

  useEffect(() => {
    gsap.fromTo('.contact-title',
      { opacity: 0, y: 60 },
      {
        opacity: 1, y: 0, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 70%', once: true }
      }
    )
    gsap.fromTo('.contact-col',
      { opacity: 0, y: 40 },
      {
        opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: '.contact-grid', start: 'top 75%', once: true }
      }
    )
  }, [])

  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    if (status.type) setStatus({ type: '', msg: '' })
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus({ type: 'error', msg: 'Please fill in all fields.' }); return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setStatus({ type: 'error', msg: 'Enter a valid email.' }); return
    }
    setSending(true)
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_KEY || 'a9feaeb7-e604-46f9-b6cc-563d9d206efc',
          name: form.name.trim(), email: form.email.trim(),
          message: form.message.trim(),
          from_name: 'Muhammad Wahaj Portfolio', reply_to: form.email.trim(),
        }),
      })
      const data = await res.json()
      if (res.ok && data.success) {
        setStatus({ type: 'success', msg: "Message sent! I'll reply soon." })
        setForm({ name: '', email: '', message: '' })
        setTimeout(() => setStatus({ type: '', msg: '' }), 5000)
      } else throw new Error(data.message || 'Failed')
    } catch (err) {
      setStatus({ type: 'error', msg: err.message || 'Something went wrong.' })
    } finally { setSending(false) }
  }

  const socials = [
    { icon: FaGithub, label: 'GitHub', href: me.socials.github },
    { icon: FaLinkedinIn, label: 'LinkedIn', href: me.socials.linkedin },
    { icon: FaXTwitter, label: 'Twitter / X', href: me.socials.twitter },
    { icon: FaInstagram, label: 'Instagram', href: me.socials.instagram },
  ]

  const inputStyle = {
    width: '100%', padding: '14px 16px',
    background: 'rgba(255,255,255,0.03)',
    border: '1px solid var(--grey2)',
    borderRadius: 10, color: 'var(--white)',
    fontFamily: 'var(--font)', fontSize: 15,
    outline: 'none', resize: 'none',
    transition: 'all 0.3s',
  }

  return (
    <section id="contact" ref={sectionRef} style={{
      padding: '160px 0 80px', position: 'relative', zIndex: 1,
    }}>
      <div className="section-divider" />
      <div className="container" style={{ paddingTop: 80 }}>
        <div className="section-tag">Contact</div>

        {/* Big CTA heading */}
        <h2 className="contact-title" style={{
          fontFamily: 'var(--font-head)',
          fontSize: 'clamp(2.5rem, 6vw, 5.5rem)',
          fontWeight: 700, letterSpacing: '-0.02em',
          lineHeight: 1.1, color: 'var(--white)', marginBottom: 80,
          maxWidth: 800,
        }}>
          Let's build something{' '}
          <span className="gradient-text">extraordinary</span>
          <span style={{ color: 'var(--accent)' }}>.</span>
        </h2>

        {/* 3 columns */}
        <div className="contact-grid" style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr 1.3fr',
          gap: 40, paddingTop: 40,
          borderTop: '1px solid var(--grey2)',
        }}>
          {/* Col 1 — contact info */}
          <div className="contact-col" style={{
            display: 'flex', flexDirection: 'column', gap: 24,
          }}>
            {[
              { label: 'Email', val: me.email, href: `mailto:${me.email}` },
              { label: 'Phone', val: me.phone, href: `tel:${me.phone}` },
              { label: 'Location', val: me.location },
              { label: 'Education', val: me.education },
            ].map(({ label, val, href }) => (
              <div key={label}>
                <p style={{
                  fontFamily: 'var(--font-mono)', fontSize: 11,
                  color: 'var(--grey)', letterSpacing: '0.12em',
                  textTransform: 'uppercase', marginBottom: 6,
                }}>{label}</p>
                {href ? (
                  <a href={href} data-cursor="link" style={{
                    fontSize: 15, color: 'var(--white)',
                    fontWeight: 500, transition: 'color 0.2s',
                    fontFamily: 'var(--font)',
                  }}
                    onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
                    onMouseLeave={e => e.currentTarget.style.color = 'var(--white)'}
                  >{val}</a>
                ) : (
                  <p style={{
                    fontSize: 15, color: 'var(--white)',
                    fontWeight: 500, lineHeight: 1.5,
                    fontFamily: 'var(--font)',
                  }}>{val}</p>
                )}
              </div>
            ))}

            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              padding: '10px 18px',
              background: 'rgba(0,255,135,0.04)',
              border: '1px solid rgba(0,255,135,0.15)',
              borderRadius: 10, fontSize: 13, fontWeight: 500,
              color: 'var(--accent3)',
              fontFamily: 'var(--font)',
            }}>
              <span style={{
                width: 8, height: 8, borderRadius: '50%',
                background: 'var(--accent3)',
                boxShadow: '0 0 12px var(--accent3)',
                animation: 'availBlink 2s ease-in-out infinite',
                flexShrink: 0,
              }} />
              Available for Work
            </div>
          </div>

          {/* Col 2 — socials */}
          <div className="contact-col" style={{ display: 'flex', flexDirection: 'column' }}>
            <p style={{
              fontFamily: 'var(--font-mono)', fontSize: 11,
              color: 'var(--grey)', letterSpacing: '0.12em',
              textTransform: 'uppercase', marginBottom: 20,
            }}>Follow Me</p>
            {socials.map(({ icon: Icon, label, href }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                data-cursor="link"
                className="glass-card"
                style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  padding: '16px 20px', marginBottom: 8,
                  borderRadius: 12,
                  fontSize: 15, fontWeight: 500,
                  color: 'var(--white2)', transition: 'all 0.3s',
                  fontFamily: 'var(--font)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.color = 'var(--accent)'
                  e.currentTarget.style.borderColor = 'rgba(0,229,255,0.15)'
                  e.currentTarget.style.background = 'rgba(0,229,255,0.03)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.color = 'var(--white2)'
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'
                  e.currentTarget.style.background = 'var(--bg-card)'
                }}
              >
                <span style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <Icon size={18} /> {label}
                </span>
                <MdArrowOutward size={16} />
              </a>
            ))}
          </div>

          {/* Col 3 — form */}
          <div className="contact-col">
            <form onSubmit={onSubmit} noValidate style={{
              display: 'flex', flexDirection: 'column', gap: 20,
            }}>
              {[
                { name: 'name', label: 'Full Name', type: 'text', placeholder: 'Your name' },
                { name: 'email', label: 'Email', type: 'email', placeholder: 'your@email.com' },
              ].map(f => (
                <div key={f.name}>
                  <label style={{
                    fontFamily: 'var(--font-mono)', fontSize: 11,
                    color: 'var(--accent)', letterSpacing: '0.12em',
                    textTransform: 'uppercase', display: 'block', marginBottom: 8,
                  }}>{f.label}</label>
                  <input
                    type={f.type} name={f.name} value={form[f.name]}
                    onChange={onChange} placeholder={f.placeholder}
                    disabled={sending} data-cursor="hide"
                    style={inputStyle}
                    onFocus={e => {
                      e.target.style.borderColor = 'var(--accent)'
                      e.target.style.boxShadow = '0 0 20px rgba(0,229,255,0.08)'
                    }}
                    onBlur={e => {
                      e.target.style.borderColor = 'var(--grey2)'
                      e.target.style.boxShadow = 'none'
                    }}
                  />
                </div>
              ))}
              <div>
                <label style={{
                  fontFamily: 'var(--font-mono)', fontSize: 11,
                  color: 'var(--accent)', letterSpacing: '0.12em',
                  textTransform: 'uppercase', display: 'block', marginBottom: 8,
                }}>Message</label>
                <textarea name="message" value={form.message} onChange={onChange}
                  rows={4} placeholder="Tell me about your project..."
                  disabled={sending} data-cursor="hide"
                  style={inputStyle}
                  onFocus={e => {
                    e.target.style.borderColor = 'var(--accent)'
                    e.target.style.boxShadow = '0 0 20px rgba(0,229,255,0.08)'
                  }}
                  onBlur={e => {
                    e.target.style.borderColor = 'var(--grey2)'
                    e.target.style.boxShadow = 'none'
                  }}
                />
              </div>

              {status.msg && (
                <p style={{
                  fontSize: 14,
                  color: status.type === 'success' ? 'var(--accent3)' : '#ff6b6b',
                  fontFamily: 'var(--font)',
                }}>{status.msg}</p>
              )}

              <button type="submit" disabled={sending} data-cursor="link"
                style={{
                  padding: '16px 36px',
                  background: 'linear-gradient(135deg, var(--accent), #00b8d4)',
                  color: '#050508', border: 'none', borderRadius: 10,
                  fontFamily: 'var(--font)', fontSize: 14, fontWeight: 700,
                  letterSpacing: '0.04em', textTransform: 'uppercase',
                  cursor: 'none', transition: 'all 0.3s',
                  alignSelf: 'flex-start', opacity: sending ? 0.6 : 1,
                  boxShadow: '0 0 30px rgba(0,229,255,0.15)',
                }}
                onMouseEnter={e => {
                  if (!sending) {
                    e.currentTarget.style.transform = 'translateY(-2px)'
                    e.currentTarget.style.boxShadow = '0 0 50px rgba(0,229,255,0.3)'
                  }
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = '0 0 30px rgba(0,229,255,0.15)'
                }}
              >
                {sending ? 'Sending…' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          marginTop: 100, paddingTop: 32,
          borderTop: '1px solid var(--grey2)',
          flexWrap: 'wrap', gap: 16,
        }}>
          <span style={{
            fontSize: 14, color: 'var(--grey)',
            fontFamily: 'var(--font)',
          }}>
            Designed & Built by{' '}
            <span style={{ color: 'var(--white)', fontWeight: 600 }}>Muhammad Wahaj</span>{' '}
            · {new Date().getFullYear()}
          </span>
          <span style={{
            fontFamily: 'var(--font-mono)', fontSize: 12,
            color: 'var(--grey2)', letterSpacing: '0.04em',
          }}>
            React · Three.js · GSAP · Vite
          </span>
        </div>
      </div>

      <style>{`
        @keyframes availBlink {
          0%, 100% { box-shadow: 0 0 0 0 rgba(0,255,135,0.4); }
          50% { box-shadow: 0 0 0 8px rgba(0,255,135,0); }
        }
        @media (max-width: 1024px) {
          .contact-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 640px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}

export default Contact
