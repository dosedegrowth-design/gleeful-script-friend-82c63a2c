'use client'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { FLIGHT_PATH } from './FlightPath'

const TRAIL_LENGTH = 80

interface Props {
  progressRef: React.MutableRefObject<number>
}

export function Contrail({ progressRef }: Props) {
  const lineRef      = useRef<any>(null)
  const historyRef   = useRef<THREE.Vector3[]>([])
  const geoRef       = useRef(new THREE.BufferGeometry())

  const positions = useRef(new Float32Array(TRAIL_LENGTH * 3))
  const colors    = useRef(new Float32Array(TRAIL_LENGTH * 3))

  useFrame(() => {
    if (!lineRef.current) return
    const t = THREE.MathUtils.clamp(progressRef.current, 0, 1)

    const pos = FLIGHT_PATH.getPoint(t).clone()
    pos.y -= 0.03
    historyRef.current.unshift(pos)
    if (historyRef.current.length > TRAIL_LENGTH) historyRef.current.pop()

    const hist = historyRef.current
    for (let i = 0; i < TRAIL_LENGTH; i++) {
      const p = hist[i] ?? pos
      positions.current[i*3]   = p.x
      positions.current[i*3+1] = p.y
      positions.current[i*3+2] = p.z

      const fade = 1 - (i / TRAIL_LENGTH)
      if (fade > 0.6) {
        const f = (fade - 0.6) / 0.4
        colors.current[i*3]   = THREE.MathUtils.lerp(0.81, 0.98, f)
        colors.current[i*3+1] = THREE.MathUtils.lerp(0.68, 0.96, f)
        colors.current[i*3+2] = THREE.MathUtils.lerp(0.52, 0.92, f)
      } else {
        const f = fade / 0.6
        colors.current[i*3]   = 0.68 * f
        colors.current[i*3+1] = 0.54 * f
        colors.current[i*3+2] = 0.34 * f
      }
    }

    geoRef.current.setAttribute('position', new THREE.BufferAttribute(positions.current, 3))
    geoRef.current.setAttribute('color',    new THREE.BufferAttribute(colors.current, 3))
    geoRef.current.setDrawRange(0, Math.min(TRAIL_LENGTH, hist.length))
    geoRef.current.attributes.position.needsUpdate = true
    geoRef.current.attributes.color.needsUpdate    = true
  })

  return (
    <line ref={lineRef} geometry={geoRef.current}>
      <lineBasicMaterial vertexColors transparent opacity={0.75} />
    </line>
  )
}
