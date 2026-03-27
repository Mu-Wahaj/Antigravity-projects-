import { useEffect, useState, useRef } from 'react'
import gsap from 'gsap'

const bootMessages = [
  '> Initializing system...',
  '> Loading modules: React, Three.js, GSAP',
  '> Compiling shaders...',
  '> Building UI components...',
  '> Connecting to portfolio database...',
  '> Rendering 3D environment...',
  '> System ready.',
]

const Loader = ({ onDone }) => {
  const [pct, setPct] = useState(0)
  const [leaving, setLeaving] = useState(false)
  const [lines, setLines] = useState([])
  const linesRef = useRef(null)

  useEffect(() => {
    let p = 0
    let lineIdx = 0
    const iv = setInterval(() => {
      p += p < 60 ? Math.random() * 6 : Math.random() * 1.5
      if (p >= 92) { clearInterval(iv); finishLoad() }
      else setPct(Math.floor(p))

      // Add boot message
      if (lineIdx < bootMessages.length && p > (lineIdx + 1) * 12) {
        setLines(prev => [...prev, bootMessages[lineIdx]])
        lineIdx++
      }
    }, 80)

    const finishLoad = () => {
      // Show remaining messages
      const remaining = bootMessages.slice(lineIdx)
      remaining.forEach((msg, i) => {
        setTimeout(() => setLines(prev => [...prev, msg]), i * 100)
      })

      let f = 92
      const fin = setInterval(() => {
        f++; setPct(f)
        if (f >= 100) {
          clearInterval(fin)
          setTimeout(() => {
            setLeaving(true)
            setTimeout(onDone, 900)
          }, 500)
        }
      }, 14)
    }

    const onLoad = () => { clearInterval(iv); finishLoad() }
    if (document.readyState === 'complete') setTimeout(onLoad, 500)
    else window.addEventListener('load', onLoad, { once: true })
    return () => clearInterval(iv)
  }, [])

  useEffect(() => {
    if (linesRef.current) {
      linesRef.current.scrollTop = linesRef.current.scrollHeight
    }
  }, [lines])

  return (
    <div style={{
      position: 'fixed', inset: 0, background: '#050508',
      zIndex: 999999, display: 'flex', flexDirection: 'column',
      justifyContent: 'center', alignItems: 'center',
      transform: leaving ? 'translateY(-100%)' : 'translateY(0)',
      transition: 'transform 0.9s cubic-bezier(0.76, 0, 0.24, 1)',
      overflow: 'hidden',
    }}>
      {/* Scan lines overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,229,255,0.01) 2px, rgba(0,229,255,0.01) 4px)',
        pointerEvents: 'none', zIndex: 1,
      }} />

      {/* Terminal log */}
      <div ref={linesRef} style={{
        position: 'absolute', top: 40, left: 40, right: 40,
        maxHeight: 120, overflow: 'hidden',
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: 12, color: 'rgba(0,229,255,0.4)',
        lineHeight: 1.8,
      }}>
        {lines.map((l, i) => (
          <div key={i} style={{
            opacity: 0, animation: 'fadeIn 0.3s forwards',
            animationDelay: `${i * 0.05}s`,
          }}>{l}</div>
        ))}
      </div>

      {/* Center counter */}
      <div style={{ textAlign: 'center', position: 'relative', zIndex: 2 }}>
        <div style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 'clamp(80px, 20vw, 200px)',
          fontWeight: 700, letterSpacing: '-0.04em',
          color: '#eef0f6', lineHeight: 0.85,
          fontVariantNumeric: 'tabular-nums',
          textShadow: '0 0 60px rgba(0,229,255,0.2), 0 0 120px rgba(0,229,255,0.1)',
        }}>
          {String(pct).padStart(2, '0')}
          <span style={{
            fontSize: '0.3em', color: '#00e5ff',
            verticalAlign: 'top', marginTop: '0.3em',
            display: 'inline-block',
          }}>%</span>
        </div>

        {/* Progress bar */}
        <div style={{
          width: 280, height: 2,
          background: 'rgba(255,255,255,0.06)',
          borderRadius: 2, margin: '32px auto 0',
          overflow: 'hidden',
        }}>
          <div style={{
            height: '100%', width: `${pct}%`,
            background: 'linear-gradient(90deg, #00e5ff, #7c4dff)',
            borderRadius: 2, transition: 'width 0.1s linear',
            boxShadow: '0 0 20px rgba(0,229,255,0.5)',
          }} />
        </div>

        {/* Status label */}
        <div style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 11, color: '#8a8fa0',
          letterSpacing: '0.2em', textTransform: 'uppercase',
          marginTop: 20,
        }}>
          {pct < 100 ? 'Loading Environment' : '● System Ready'}
        </div>
      </div>

      {/* Bottom info */}
      <div style={{
        position: 'absolute', bottom: 32, left: 40, right: 40,
        display: 'flex', justifyContent: 'space-between',
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: 11, color: '#2a2d3a', letterSpacing: '0.08em',
      }}>
        <span>Muhammad Wahaj</span>
        <span>v2.0 — Portfolio</span>
      </div>

      <style>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(5px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </div>
  )
}

export default Loader
