import * as THREE from 'three'

// Coordenadas em espaço Three.js:
//   X: -4 (esquerda) → +4 (direita)
//   Y: +4.5 (topo/hero) → -17 (footer)
//   Z: variação de profundidade (-1 → +1)

export const FLIGHT_PATH = new THREE.CatmullRomCurve3([
  // ── HERO (entrada pelo canto superior direito) ──
  new THREE.Vector3( 4.8,  4.5,  0.6),
  new THREE.Vector3( 3.2,  3.6, -0.2),
  new THREE.Vector3( 1.0,  3.0,  0.4),

  // ── PROBLEMA ──
  new THREE.Vector3(-1.2,  2.0,  0.8),
  new THREE.Vector3(-3.2,  1.0, -0.3),
  new THREE.Vector3(-3.0, -0.2,  0.2),

  // ── FUNDADORES ──
  new THREE.Vector3( 0.5, -1.2, -0.6),
  new THREE.Vector3( 3.5, -2.0,  0.5),
  new THREE.Vector3( 3.2, -3.0, -0.1),

  // ── PROCESSO ──
  new THREE.Vector3( 1.5, -4.0,  0.7),
  new THREE.Vector3(-0.8, -5.2, -0.5),
  new THREE.Vector3(-2.8, -6.0,  0.3),

  // ── PILARES ──
  new THREE.Vector3(-2.5, -7.2,  0.8),
  new THREE.Vector3( 0.2, -8.0, -0.4),
  new THREE.Vector3( 2.8, -8.8,  0.2),

  // ── MANIFESTO ──
  new THREE.Vector3( 2.0,-10.0,  0.5),
  new THREE.Vector3( 0.0,-11.2, -0.3),
  new THREE.Vector3(-1.5,-12.0,  0.1),

  // ── FAQ / FORM ──
  new THREE.Vector3( 0.5,-13.5,  0.4),
  new THREE.Vector3( 1.8,-14.8, -0.2),

  // ── FOOTER ──
  new THREE.Vector3(-0.5,-16.0,  0.0),
  new THREE.Vector3(-3.0,-17.0,  0.0),
], false, 'catmullrom', 0.5)

export const PATH_POINTS = FLIGHT_PATH.getPoints(1000)

export function getTangent(t: number) {
  const t1 = Math.min(1, t + 0.003)
  const t2 = Math.max(0, t - 0.003)
  return FLIGHT_PATH.getPoint(t1).sub(FLIGHT_PATH.getPoint(t2)).normalize()
}
