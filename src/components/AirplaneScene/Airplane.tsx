'use client'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'
import { FLIGHT_PATH } from './path'

// Note: Using /3D/airplane.glb as per prompt requirement
useGLTF.preload('/3D/airplane.glb')

export function Airplane({
  progressRef,
  targetRef
}: {
  progressRef: React.MutableRefObject<number>
  targetRef:   React.MutableRefObject<number>
}) {
  const groupRef  = useRef<THREE.Group>(null)
  const lightRef  = useRef<THREE.PointLight>(null)

  // Carregar modelo
  // We use scene.clone() because primitive object ownership is tricky in React
  const { scene } = useGLTF('/3D/airplane.glb')

  const tmpQ  = useRef(new THREE.Quaternion())
  const bankQ = useRef(new THREE.Quaternion())
  const bankAx = new THREE.Vector3(0, 0, 1)

  useFrame((_, delta) => {
    if (!groupRef.current) return

    // ── Lerp suave (inércia cinematográfica) ─────────────
    progressRef.current = THREE.MathUtils.lerp(
      progressRef.current,
      targetRef.current,
      Math.min(delta * 3.5, 1)
    )

    const t   = THREE.MathUtils.clamp(progressRef.current, 0, 1)
    const pos = FLIGHT_PATH.getPoint(t)

    // Posição
    groupRef.current.position.copy(pos)
    if (lightRef.current) {
      lightRef.current.position.copy(pos)
      lightRef.current.position.y += 0.35
    }

    // Escala por profundidade Z - Aumentada para garantir visibilidade
    const sc = THREE.MathUtils.lerp(0.04, 0.06, (pos.z + 1) * 0.5)
    groupRef.current.scale.setScalar(sc)

    // Orientação: aponta na direção do movimento
    const tA = Math.min(1, t + 0.005)
    const tB = Math.max(0, t - 0.005)
    const pA = FLIGHT_PATH.getPoint(tA)
    const pB = FLIGHT_PATH.getPoint(tB)
    const tangent = pA.clone().sub(pB).normalize()
    const up      = new THREE.Vector3(0, 1, 0)
    const right   = new THREE.Vector3().crossVectors(tangent, up).normalize()
    const realUp  = new THREE.Vector3().crossVectors(right, tangent).normalize()
    const mat     = new THREE.Matrix4().makeBasis(right, realUp, tangent.clone().negate())
    tmpQ.current.setFromRotationMatrix(mat)
    groupRef.current.quaternion.slerp(tmpQ.current, Math.min(delta * 5, 1))

    // Bank angle — inclina nas curvas, inverte ao subir
    const bank = THREE.MathUtils.clamp((pA.x - pB.x) * 1.1, -0.75, 0.75)
    bankQ.current.setFromAxisAngle(bankAx, -bank)
    groupRef.current.quaternion.multiply(bankQ.current)
  })

  return (
    <>
      {/* Luz dourada que acompanha o avião */}
      <pointLight
        ref={lightRef}
        color="#cead84"
        intensity={1.4}
        distance={5}
        decay={2}
      />

      {/* Modelo do avião */}
      <group ref={groupRef}>
        <primitive object={scene.clone()} dispose={null} />
      </group>
    </>
  )
}
