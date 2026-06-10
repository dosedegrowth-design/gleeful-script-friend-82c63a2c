import React, { useRef, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF, Sparkles } from '@react-three/drei'
import * as THREE from 'three'
import { FLIGHT_PATH } from './FlightPath'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { AirplaneGeometry } from './AirplaneGeometry'
import { Contrail } from './Contrail'

gsap.registerPlugin(ScrollTrigger)

export function Airplane() {
  const airplaneRef = useRef<THREE.Group>(null)
  const lightRef = useRef<THREE.PointLight>(null)
  const progressRef = useRef(0)
  const targetProgressRef = useRef(0)

  useEffect(() => {
    const trigger = ScrollTrigger.create({
      trigger: 'body',
      start: 'top top',
      end: 'bottom bottom',
      onUpdate: (self) => {
        targetProgressRef.current = self.progress
      }
    })
    return () => trigger.kill()
  }, [])

  useFrame((state, delta) => {
    if (!airplaneRef.current) return

    // Lerp suave do progresso (inércia cinematográfica)
    progressRef.current = THREE.MathUtils.lerp(
      progressRef.current,
      targetProgressRef.current,
      Math.min(delta * 3.5, 1)
    )

    const t = progressRef.current

    // Posição na curva
    const position = FLIGHT_PATH.getPoint(t)
    airplaneRef.current.position.copy(position)

    // Orientação: tangente da curva
    const tangent = FLIGHT_PATH.getTangent(t).normalize()
    const up = new THREE.Vector3(0, 1, 0)
    const quaternion = new THREE.Quaternion()
    const matrix = new THREE.Matrix4()
    matrix.lookAt(
      new THREE.Vector3(0, 0, 0),
      tangent,
      up
    )
    quaternion.setFromRotationMatrix(matrix)
    airplaneRef.current.quaternion.slerp(quaternion, Math.min(delta * 4, 1))

    // Bank angle (inclina nas curvas)
    const tNext = Math.min(t + 0.005, 1)
    const tPrev = Math.max(t - 0.005, 0)
    const pNext = FLIGHT_PATH.getPoint(tNext)
    const pPrev = FLIGHT_PATH.getPoint(tPrev)
    const curvature = pNext.x - pPrev.x
    const bankAngle = THREE.MathUtils.clamp(curvature * 0.8, -0.6, 0.6)

    airplaneRef.current.rotation.z = THREE.MathUtils.lerp(
      airplaneRef.current.rotation.z,
      bankAngle,
      Math.min(delta * 3, 1)
    )

    // Scale
    const depth = position.z
    const scale = THREE.MathUtils.lerp(0.18, 0.24, (depth + 1) / 2)
    airplaneRef.current.scale.setScalar(scale)

    // Luz que segue o avião
    if (lightRef.current) {
      lightRef.current.position.copy(position)
      lightRef.current.position.y += 0.5
    }
  })

  return (
    <>
      <pointLight
        ref={lightRef}
        color="#cead84"
        intensity={1.5}
        distance={6}
        decay={2}
      />
      <group ref={airplaneRef}>
        <AirplaneGeometry />
        <Contrail />
        <Sparkles
          count={20}
          scale={1.5}
          size={0.4}
          speed={0.3}
          color="#cead84"
          opacity={0.4}
        />
      </group>
    </>
  )
}
