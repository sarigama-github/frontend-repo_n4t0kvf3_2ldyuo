import { useEffect, useRef } from 'react'

export default function BackgroundFX() {
  const glowRef = useRef(null)

  useEffect(() => {
    const handleMove = (e) => {
      const x = e.clientX
      const y = e.clientY
      if (glowRef.current) {
        glowRef.current.style.setProperty('--x', `${x}px`)
        glowRef.current.style.setProperty('--y', `${y}px`)
      }
    }
    window.addEventListener('mousemove', handleMove)
    return () => window.removeEventListener('mousemove', handleMove)
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Aurora gradient backdrop */}
      <div className="absolute inset-0 opacity-70">
        <div className="absolute -inset-40 blur-3xl" style={{
          backgroundImage:
            'conic-gradient(from 120deg at 20% 10%, rgba(168,85,247,0.15), transparent 30%), conic-gradient(from 250deg at 80% 20%, rgba(236,72,153,0.18), transparent 40%), radial-gradient(60rem 30rem at 10% 100%, rgba(59,130,246,0.15), transparent 60%), radial-gradient(40rem 20rem at 90% 0%, rgba(20,184,166,0.18), transparent 60%)',
        }} />
      </div>

      {/* Subtle dotted grid */}
      <div className="absolute inset-0 opacity-[0.06]" style={{
        backgroundImage:
          'radial-gradient(currentColor 1px, transparent 1px)',
        backgroundSize: '22px 22px',
        color: 'rgba(255,255,255,0.6)'
      }} />

      {/* Cursor reactive glow */}
      <div ref={glowRef} className="absolute inset-0" style={{
        background: 'radial-gradient(120px 120px at var(--x, 50%) var(--y, 50%), rgba(236,72,153,0.18), transparent 60%)',
        mixBlendMode: 'screen'
      }} />

      {/* Film grain */}
      <div className="absolute inset-0 opacity-[0.05] mix-blend-overlay" style={{backgroundImage: 'url("data:image/svg+xml;utf8,<?xml version=\'1.0\' encoding=\'UTF-8\'?><svg xmlns=\'http://www.w3.org/2000/svg\' width=\'160\' height=\'160\' viewBox=\'0 0 160 160\'><filter id=\'n\'><feTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'4\' stitchTiles=\'stitch\'/><feColorMatrix type=\'saturate\' values=\'0\'/></filter><rect width=\'100%\' height=\'100%\' filter=\'url(%23n)\' opacity=\'0.3\'/></svg>")', backgroundSize: '160px 160px'}} />
    </div>
  )
}
