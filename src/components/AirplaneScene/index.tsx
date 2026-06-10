'use client'
import { Canvas }    from '@react-three/fiber'
import { Suspense, useState, useEffect }  from 'react'
import { Airplane }  from './Airplane'
import { Contrail }  from './Contrail'
import { useScrollSync } from './useScrollSync'

export function AirplaneScene() {
  const { progressRef, targetRef } = useScrollSync()
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  if (isMobile) return null

  return (
    <div style={{
      position:      'fixed',
      inset:         0,
      zIndex:        50,
      pointerEvents: 'none',
    }}>
      <Canvas
        camera={{ position: [0, 0, 10], fov: 45 }}
        gl={{
          alpha:      true,
          antialias:  true,
          powerPreference: 'high-performance',
        }}
        dpr={[1, 1.5]}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.55} color="#f9f5ec" />
        <directionalLight position={[5, 8, 5]}  intensity={1.1} color="#ffffff"  />
        <directionalLight position={[-4,-2,-4]} intensity={0.3} color="#cead84"  />
        <directionalLight position={[0,  5,-5]} intensity={0.2} color="#407e8d"  />

        <Suspense fallback={null}>
          <Contrail progressRef={progressRef} />
          <Airplane progressRef={progressRef} targetRef={targetRef} />
        </Suspense>
      </Canvas>
    </div>
  )
}
