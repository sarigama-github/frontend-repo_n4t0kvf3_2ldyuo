import { useEffect, useRef } from 'react'

export default function BackgroundFX() {
  const glowRef = useRef(null)

  useEffect(() => {
    const handleMove = (e) => {
      const x = e.clientX
      const y = e.clientY
      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${x - 150}px, ${y - 150}px)`
      }
    }
    window.addEventListener('mousemove', handleMove)
    return () => window.removeEventListener('mousemove', handleMove)
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Soft radial gradient blobs */}
      <div className="absolute -top-32 -left-32 w-[40rem] h-[40rem] rounded-full bg-gradient-to-br from-cyan-500/25 to-blue-500/20 blur-3xl animate-blob" />
      <div className="absolute -bottom-40 -right-20 w-[42rem] h-[42rem] rounded-full bg-gradient-to-tr from-indigo-500/20 to-sky-400/25 blur-3xl animate-blob animation-delay-2000" />
      <div className="absolute top-1/3 -right-40 w-[36rem] h-[36rem] rounded-full bg-gradient-to-tr from-fuchsia-500/10 to-cyan-400/10 blur-3xl animate-blob animation-delay-4000" />

      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.04]" style={{backgroundImage: 'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)', backgroundSize: '48px 48px'}} />

      {/* Moving cursor glow */}
      <div ref={glowRef} className="absolute w-[300px] h-[300px] rounded-full bg-cyan-400/10 blur-2xl mix-blend-screen transition-transform duration-75" />

      {/* Film grain */}
      <div className="absolute inset-0 opacity-[0.06] mix-blend-overlay" style={{backgroundImage: 'url("data:image/svg+xml;utf8,<?xml version=\'1.0\' encoding=\'UTF-8\'?><svg xmlns=\'http://www.w3.org/2000/svg\' width=\'160\' height=\'160\' viewBox=\'0 0 160 160\'><filter id=\'n\'><feTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'4\' stitchTiles=\'stitch\'/><feColorMatrix type=\'saturate\' values=\'0\'/></filter><rect width=\'100%\' height=\'100%\' filter=\'url(%23n)\' opacity=\'0.3\'/></svg>")', backgroundSize: '160px 160px'}} />

      {/* Keyframes for blobs */}
      <style>{`
        @keyframes blob { 0% { transform: translate(0px,0px) scale(1); } 33% { transform: translate(20px,-30px) scale(1.05);} 66% { transform: translate(-10px,20px) scale(0.95);} 100% { transform: translate(0px,0px) scale(1);} }
        .animate-blob { animation: blob 12s ease-in-out infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
      `}</style>
    </div>
  )
}
