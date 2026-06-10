import React, { useRef } from 'react'
import { Trail } from '@react-three/drei'
import * as THREE from 'three'

export function Contrail() {
  return (
    <>
      <Trail
        width={0.8}
        length={12}
        color={new THREE.Color('#f9f5ec')}
        attenuation={(t) => t * t}
        decay={1}
      >
        <mesh position={[0, 0, -1.2]} visible={false}>
          <sphereGeometry args={[0.01]} />
          <meshBasicMaterial />
        </mesh>
      </Trail>

      <Trail
        width={0.4}
        length={8}
        color={new THREE.Color('rgba(206,173,132,0.3)')}
        attenuation={(t) => t * t * t}
      >
        <mesh position={[-0.5, -0.1, -1.0]} visible={false}>
          <sphereGeometry args={[0.01]} />
          <meshBasicMaterial />
        </mesh>
      </Trail>

      <Trail
        width={0.4}
        length={8}
        color={new THREE.Color('rgba(206,173,132,0.3)')}
        attenuation={(t) => t * t * t}
      >
        <mesh position={[0.5, -0.1, -1.0]} visible={false}>
          <sphereGeometry args={[0.01]} />
          <meshBasicMaterial />
        </mesh>
      </Trail>
    </>
  )
}
