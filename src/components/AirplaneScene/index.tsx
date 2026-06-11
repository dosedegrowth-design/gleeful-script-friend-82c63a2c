'use client'

import { useEffect, useRef, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { Airplane } from './Airplane'
import { Trail }    from './Trail'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export function AirplaneScene() {
  const progressRef = useRef(0)
  const targetRef   = useRef(0)

  useEffect(() => {
    // Drive airplane progress with GSAP ScrollTrigger for perfect sync with Lenis
    ScrollTrigger.create({
      trigger: "body",
      start: "top top",
      end: "bottom bottom",
      onUpdate: (self) => {
        targetRef.current = self.progress;
      }
    });
  }, [])

  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    setIsMobile(window.innerWidth < 768)
  }, [])
  if (isMobile) return null

  return (
    <div
      style={{
        position:      'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex:        10,
        pointerEvents: 'none',
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 10], fov: 45 }}
        gl={{ alpha: true, antialias: true, powerPreference: 'high-performance', preserveDrawingBuffer: true }}
        dpr={typeof window !== 'undefined' ? Math.min(window.devicePixelRatio, 1.5) : 1}
        style={{ background: 'transparent', pointerEvents: 'none' }}
      >
        <ambientLight    intensity={0.6}  color="#f9f5ec" />
        <directionalLight position={[ 5, 8, 5]} intensity={1.1} />
        <directionalLight position={[-4,-2,-4]} intensity={0.3} color="#ad8957" />

        <Suspense fallback={null}>
          <Trail    progressRef={progressRef} />
          <Airplane progressRef={progressRef} targetRef={targetRef} />
        </Suspense>
      </Canvas>
    </div>
  )
}
