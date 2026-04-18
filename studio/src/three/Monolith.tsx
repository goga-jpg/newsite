import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'

function Pillar() {
  const ref = useRef<THREE.Mesh>(null)
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    if (ref.current) {
      ref.current.rotation.y = t * 0.3
    }
  })

  return (
    <mesh ref={ref}>
      <cylinderGeometry args={[1, 1.2, 3.4, 6, 16, false]} />
      <MeshDistortMaterial
        color="#ca003d"
        roughness={0.25}
        metalness={0.3}
        distort={0.18}
        speed={1.6}
      />
    </mesh>
  )
}

export default function Monolith() {
  return (
    <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 5], fov: 45 }} gl={{ alpha: true }}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[3, 4, 3]} intensity={1.4} color="#ffffff" />
      <pointLight position={[-3, -1, 2]} intensity={1.2} color="#ca003d" />
      <Pillar />
    </Canvas>
  )
}
