import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Torus, MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'

function Core() {
  const g1 = useRef<THREE.Mesh>(null)
  const g2 = useRef<THREE.Group>(null)
  const g3 = useRef<THREE.Group>(null)
  const g4 = useRef<THREE.Group>(null)

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    if (g1.current) g1.current.rotation.y = t * 0.3
    if (g2.current) g2.current.rotation.z = t * 0.4
    if (g3.current) g3.current.rotation.x = t * 0.25
    if (g4.current) g4.current.rotation.y = -t * 0.2
  })

  return (
    <>
      <mesh ref={g1}>
        <icosahedronGeometry args={[0.8, 2]} />
        <MeshDistortMaterial
          color="#C9FF3B"
          emissive="#C9FF3B"
          emissiveIntensity={0.6}
          distort={0.4}
          speed={2}
          roughness={0.2}
        />
      </mesh>
      <group ref={g2}>
        <Torus args={[1.3, 0.008, 12, 96]}>
          <meshBasicMaterial color="#C9FF3B" transparent opacity={0.4} />
        </Torus>
      </group>
      <group ref={g3}>
        <Torus args={[1.7, 0.006, 12, 96]} rotation={[Math.PI / 3, 0, 0]}>
          <meshBasicMaterial color="#4D7CFE" transparent opacity={0.35} />
        </Torus>
      </group>
      <group ref={g4}>
        <Torus args={[2.1, 0.004, 12, 96]} rotation={[Math.PI / 4, Math.PI / 3, 0]}>
          <meshBasicMaterial color="#FF4D2E" transparent opacity={0.25} />
        </Torus>
      </group>
    </>
  )
}

export default function IntelligenceCore() {
  return (
    <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 4.5], fov: 50 }} gl={{ alpha: true }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[3, 3, 3]} intensity={1.5} color="#C9FF3B" />
      <pointLight position={[-3, -2, 2]} intensity={0.6} color="#4D7CFE" />
      <Core />
    </Canvas>
  )
}
