import React, { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { Airplane } from './Airplane'

export function AirplaneScene() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  if (isMobile) {
    return (
      <div className="airplane-mobile fixed top-20 right-6 w-12 opacity-40 z-50 pointer-events-none" style={{ animation: 'floatMobile 4s ease-in-out infinite' }}>
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 16.5L13 11.5V3.5C13 2.67 12.33 2 11.5 2C10.67 2 10 2.67 10 3.5V11.5L2 16.5V18.5L10 16V21L8 22.5V24L11.5 23L15 24V22.5L13 21V16L21 18.5V16.5Z" fill="#cead84"/>
        </svg>
        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes floatMobile {
            0%, 100% { transform: translateY(0) rotate(-10deg); }
            50%       { transform: translateY(-8px) rotate(-8deg); }
          }
        `}} />
      </div>
    )
  }

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 50,
      pointerEvents: 'none',
      overflow: 'hidden',
    }}>
      <Canvas
        camera={{ position: [0, 0, 10], fov: 45 }}
        gl={{ alpha: true, antialias: true }}
        style={{ background: 'transparent' }}
        dpr={[1, 1.5]}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[5, 8, 5]} intensity={1.2} castShadow />
          <directionalLight position={[-3, -2, -3]} intensity={0.3} color="#cead84" />
          <Airplane />
        </Suspense>
      </Canvas>
    </div>
  )
}
