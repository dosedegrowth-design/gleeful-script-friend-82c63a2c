'use client'
import { useEffect, useRef, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { Airplane } from './Airplane'
import { Trail }    from './Trail'

export function AirplaneScene() {
  const progressRef = useRef(0)   // progresso atual (lerpeado)
  const targetRef   = useRef(0)   // progresso alvo (do scroll)

  // Sync scroll → targetRef
  useEffect(() => {
    const onScroll = () => {
      const max = document.body.scrollHeight - window.innerHeight
      targetRef.current = max > 0 ? window.scrollY / max : 0
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Não renderizar em mobile
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    setIsMobile(window.innerWidth < 768)
  }, [])
  if (isMobile) return null

  return (
    <div
      style={{
        position:      'fixed',
        inset:         0,
        zIndex:        50,        // ← ENTRE fundo (z-1) e cards (z-100)
        pointerEvents: 'none',
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 10], fov: 45 }}
        gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }}
        dpr={[1, 1.5]}
        style={{ background: 'transparent' }}
      >
        <ambientLight    intensity={0.6}  color="#f9f5ec" />
        <directionalLight position={[ 5, 8, 5]} intensity={1.1} />
        <directionalLight position={[-4,-2,-4]} intensity={0.3} color="#cead84" />

        <Suspense fallback={null}>
          <Trail    progressRef={progressRef} />
          <Airplane progressRef={progressRef} targetRef={targetRef} />
        </Suspense>
      </Canvas>
    </div>
  )
}
