import * as THREE from 'three'

export const FLIGHT_PATH = new THREE.CatmullRomCurve3([
  // Ponto 0 — Entrada pelo topo direito (hero)
  new THREE.Vector3(3.5, 4.5, 0.5),

  // Ponto 1 — Curva suave entrando na página
  new THREE.Vector3(2.0, 3.2, -0.2),

  // Ponto 2 — Mergulho pela seção problema
  new THREE.Vector3(-1.5, 1.8, 0.8),

  // Ponto 3 — Vira à direita
  new THREE.Vector3(2.8, 0.2, -0.5),

  // Ponto 4 — Grande curva descendente pelo processo
  new THREE.Vector3(0.5, -1.8, 0.3),

  // Ponto 5 — Mergulha pela esquerda (Assessment)
  new THREE.Vector3(-2.5, -3.5, -0.8),

  // Ponto 6 — Sobe brevemente e passa sobre os pilares
  new THREE.Vector3(1.2, -5.2, 0.4),

  // Ponto 7 — Vira novamente, passa por trás dos pilares
  new THREE.Vector3(-0.8, -7.0, -0.3),

  // Ponto 8 — Longo deslize pelo manifesto
  new THREE.Vector3(2.2, -9.0, 0.6),

  // Ponto 9 — Curva final pelo FAQ
  new THREE.Vector3(-1.0, -11.5, -0.4),

  // Ponto 10 — Aproximação ao formulário
  new THREE.Vector3(0.5, -13.8, 0.2),

  // Ponto 11 — Pouso no footer
  new THREE.Vector3(-2.5, -16.0, 0.0),
], false, 'catmullrom', 0.5)

export const FLIGHT_POINTS = FLIGHT_PATH.getPoints(500)
