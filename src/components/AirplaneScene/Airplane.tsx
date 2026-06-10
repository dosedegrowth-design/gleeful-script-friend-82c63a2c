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
    const tangent = getTangent(t).normalize()
    
    // Matriz de rotação básica baseada na tangente
    const dummy = new THREE.Object3D()
    dummy.position.copy(position)
    dummy.lookAt(position.clone().add(tangent))
    
    // Slerp suave para a rotação base
    groupRef.current.quaternion.slerp(dummy.quaternion, Math.min(delta * 5, 1))

    // Adiciona Bank (inclinação lateral) e Pitch (inclinação vertical) controlados
    const tNext = Math.min(1, t + 0.01)
    const tPrev = Math.max(0, t - 0.01)
    const pNext = FLIGHT_PATH.getPoint(tNext)
    const pPrev = FLIGHT_PATH.getPoint(tPrev)
    
    const deltaX = pNext.x - pPrev.x
    const deltaY = pNext.y - pPrev.y
    
    // Bank baseado na curva horizontal (X)
    const bankAngle = THREE.MathUtils.clamp(deltaX * 2.0, -0.5, 0.5)
    // Pitch baseado na variação de altura (Y)
    const pitchAngle = THREE.MathUtils.clamp(deltaY * 0.5, -0.3, 0.3)

    const extraRot = new THREE.Euler(pitchAngle, 0, -bankAngle)
    groupRef.current.rotateZ(extraRot.z * 0.1)
    groupRef.current.rotateX(extraRot.x * 0.1)

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
