import { useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function Mesh() {
  const ref = useRef<THREE.Mesh>(null)
  const geo = useMemo(() => {
    const g = new THREE.IcosahedronGeometry(1.4, 20)
    return g
  }, [])

  const original = useMemo(() => {
    return new Float32Array(geo.attributes.position.array)
  }, [geo])

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    const positions = geo.attributes.position.array as Float32Array
    for (let i = 0; i < positions.length; i += 3) {
      const ox = original[i]
      const oy = original[i + 1]
      const oz = original[i + 2]
      const n =
        Math.sin(ox * 2 + t) * 0.08 +
        Math.cos(oy * 2 + t * 1.1) * 0.08 +
        Math.sin(oz * 2 + t * 0.9) * 0.08
      const scale = 1 + n
      positions[i] = ox * scale
      positions[i + 1] = oy * scale
      positions[i + 2] = oz * scale
    }
    geo.attributes.position.needsUpdate = true
    geo.computeVertexNormals()
    if (ref.current) {
      ref.current.rotation.y = t * 0.15
      ref.current.rotation.x = Math.sin(t * 0.3) * 0.2
    }
  })

  return (
    <>
      <mesh ref={ref} geometry={geo}>
        <meshStandardMaterial
          color="#C9FF3B"
          wireframe
          emissive="#C9FF3B"
          emissiveIntensity={0.3}
        />
      </mesh>
      <mesh geometry={geo} scale={0.98}>
        <meshBasicMaterial color="#05060A" />
      </mesh>
    </>
  )
}

export default function DataMesh() {
  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ position: [0, 0, 4], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.4} />
      <pointLight position={[3, 3, 3]} intensity={1} color="#C9FF3B" />
      <Mesh />
    </Canvas>
  )
}
