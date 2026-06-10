'use client'
import { useRef } from 'react'
import { useFrame }  from '@react-three/fiber'
import { useGLTF }   from '@react-three/drei'
import * as THREE    from 'three'
import { FLIGHT_PATH, getTangent } from './FlightPath'

// Preload para evitar pop-in
useGLTF.preload('/3D/scene.gltf')

interface Props {
  progressRef: React.MutableRefObject<number>
  targetRef:   React.MutableRefObject<number>
}

export function Airplane({ progressRef, targetRef }: Props) {
  const groupRef   = useRef<THREE.Group>(null)
  const lightRef   = useRef<THREE.PointLight>(null)

  // Carregar o modelo
  const { scene } = useGLTF('/3D/scene.gltf')

  useFrame((_, delta) => {
    if (!groupRef.current) return

    // Lerp suave (inércia cinematográfica)
    progressRef.current = THREE.MathUtils.lerp(
      progressRef.current,
      targetRef.current,
      Math.min(delta * 3.5, 1)
    )
    const t = THREE.MathUtils.clamp(progressRef.current, 0, 1)

    // Posição na curva
    const position = FLIGHT_PATH.getPoint(t)
    groupRef.current.position.copy(position)

    // Luz dourada que acompanha
    if (lightRef.current) {
      lightRef.current.position.copy(position)
      lightRef.current.position.y += 0.4
    }

    // Orientação: aponta na direção do movimento
    const tangent = getTangent(t)
    const up      = new THREE.Vector3(0, 1, 0)
    const right   = new THREE.Vector3().crossVectors(tangent, up).normalize()
    const realUp  = new THREE.Vector3().crossVectors(right, tangent).normalize()
    const rotMat  = new THREE.Matrix4().makeBasis(right, realUp, tangent.negate())
    const targetQ = new THREE.Quaternion().setFromRotationMatrix(rotMat)
    groupRef.current.quaternion.slerp(targetQ, Math.min(delta * 5, 1))

    // Bank angle suave e controlado
    const tNext = Math.min(1, t + 0.005)
    const tPrev = Math.max(0, t - 0.005)
    const pNext = FLIGHT_PATH.getPoint(tNext)
    const pPrev = FLIGHT_PATH.getPoint(tPrev)
    
    // Calcula curvatura horizontal para o bank (inclinação lateral)
    const deltaX = pNext.x - pPrev.x
    const bankAngle = THREE.MathUtils.clamp(deltaX * 0.5, -0.4, 0.4)
    
    // Calcula inclinação vertical (pitch) baseada na subida/descida
    const deltaY = pNext.y - pPrev.y
    const pitchAngle = THREE.MathUtils.clamp(deltaY * 0.2, -0.2, 0.2)

    const bankQ = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 0, 1), -bankAngle)
    const pitchQ = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1, 0, 0), pitchAngle)
    
    groupRef.current.quaternion.multiply(bankQ).multiply(pitchQ)

    // Escala dinâmica massivamente aumentada para visibilidade cinematográfica
    const baseScale = 0.6; // Aumentado em ~7.5x da escala anterior
    const depthFactor = THREE.MathUtils.lerp(baseScale, baseScale * 1.5, (position.z + 1) * 0.5)
    groupRef.current.scale.setScalar(depthFactor)
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
      <group ref={groupRef}>
        <primitive object={scene.clone()} />
      </group>
    </>
  )
}
