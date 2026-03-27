import { useEffect, useRef } from 'react'
import gsap from 'gsap'

const Cursor = () => {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const labelRef = useRef(null)

  useEffect(() => {
    const dot = dotRef.current
    const ring = ringRef.current
    const label = labelRef.current
    if (!dot || !ring) return

    let mx = 0, my = 0, rx = 0, ry = 0

    const onMove = (e) => {
      mx = e.clientX; my = e.clientY
      gsap.set(dot, { x: mx, y: my })
    }
    window.addEventListener('mousemove', onMove)

    const loop = () => {
      rx += (mx - rx) * 0.08
      ry += (my - ry) * 0.08
      gsap.set(ring, { x: rx, y: ry })
      requestAnimationFrame(loop)
    }
    loop()

    const onEnter = (e) => {
      const type = e.currentTarget.dataset.cursor
      if (type === 'view') {
        gsap.to(ring, { scale: 4, borderColor: 'rgba(0,229,255,0.3)', duration: 0.4, ease: 'power2.out' })
        gsap.to(label, { opacity: 1, duration: 0.3 })
      } else if (type === 'link') {
        gsap.to(ring, { scale: 2.5, borderColor: 'rgba(0,229,255,0.4)', duration: 0.4, ease: 'power2.out' })
        gsap.to(dot, { scale: 0, duration: 0.3 })
      } else if (type === 'hide') {
        gsap.to([dot, ring], { scale: 0, duration: 0.3 })
      }
    }
    const onLeave = () => {
      gsap.to(ring, { scale: 1, borderColor: 'rgba(0,229,255,0.2)', duration: 0.4, ease: 'power2.out' })
      gsap.to(dot, { scale: 1, duration: 0.3 })
      gsap.to(label, { opacity: 0, duration: 0.2 })
    }

    const attach = () => {
      document.querySelectorAll('[data-cursor]').forEach(el => {
        el.addEventListener('mouseenter', onEnter)
        el.addEventListener('mouseleave', onLeave)
      })
    }
    attach()
    const obs = new MutationObserver(attach)
    obs.observe(document.body, { childList: true, subtree: true })

    return () => {
      window.removeEventListener('mousemove', onMove)
      obs.disconnect()
    }
  }, [])

  return (
    <>
      <div ref={dotRef} style={{
        position: 'fixed', top: -5, left: -5,
        width: 10, height: 10, borderRadius: '50%',
        background: 'var(--accent)',
        boxShadow: '0 0 15px rgba(0,229,255,0.5)',
        pointerEvents: 'none', zIndex: 99999,
        willChange: 'transform',
        mixBlendMode: 'difference',
      }} />
      <div ref={ringRef} style={{
        position: 'fixed', top: -22, left: -22,
        width: 44, height: 44, borderRadius: '50%',
        border: '1.5px solid rgba(0,229,255,0.2)',
        pointerEvents: 'none', zIndex: 99998,
        willChange: 'transform',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <span ref={labelRef} style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 9, fontWeight: 600,
          letterSpacing: '0.12em', textTransform: 'uppercase',
          color: 'var(--accent)', opacity: 0,
          whiteSpace: 'nowrap', pointerEvents: 'none',
        }}>View</span>
      </div>
    </>
  )
}

export default Cursor
