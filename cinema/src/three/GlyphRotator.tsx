import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

// A subtly rotating Adinkra-style glyph (cross-like node) rendered in 3D.
// Used as decorative eyebrow element next to section headings.
function Glyph({ color = '#ca003d' }: { color?: string }) {
  const ref = useRef<THREE.Group>(null)
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    if (ref.current) {
      ref.current.rotation.z = t * 0.4
      ref.current.rotation.x = Math.sin(t * 0.6) * 0.3
    }
  })
  return (
    <group ref={ref}>
      <mesh>
        <boxGeometry args={[1.1, 0.22, 0.22]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} />
      </mesh>
      <mesh rotation={[0, 0, Math.PI / 2]}>
        <boxGeometry args={[1.1, 0.22, 0.22]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} />
      </mesh>
      <mesh>
        <boxGeometry args={[0.35, 0.35, 0.35]} />
        <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.4} />
      </mesh>
    </group>
  )
}

export default function GlyphRotator({ color }: { color?: string }) {
  return (
    <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 3], fov: 40 }} gl={{ alpha: true }}>
      <ambientLight intensity={0.4} />
      <pointLight position={[2, 2, 2]} intensity={2} color="#ffffff" />
      <Glyph color={color} />
    </Canvas>
  )
}
