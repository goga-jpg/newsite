import { useMemo, useRef } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Float, MeshTransmissionMaterial, Environment } from '@react-three/drei'
import * as THREE from 'three'

/**
 * Sankofa-inspired 3D sculpture. The Sankofa bird — an Akan symbol meaning
 * "go back and get it" — is stylised here as a layered, twisting ring
 * formed by extruded segments. Glass body in crimson + a floating ink core.
 */
function SankofaRing() {
  const ref = useRef<THREE.Group>(null)
  const innerRef = useRef<THREE.Mesh>(null)

  const segments = useMemo(() => {
    // arrange N twisted planes along a circle
    const arr: { pos: [number, number, number]; rot: [number, number, number]; scale: number }[] = []
    const count = 18
    for (let i = 0; i < count; i++) {
      const a = (i / count) * Math.PI * 2
      const r = 1.7
      const twist = (i / count) * Math.PI * 1.2
      arr.push({
        pos: [Math.cos(a) * r, Math.sin(a * 2) * 0.2, Math.sin(a) * r],
        rot: [twist, a + Math.PI / 2, Math.sin(a) * 0.5],
        scale: 0.6 + Math.sin(a * 3) * 0.15,
      })
    }
    return arr
  }, [])

  useFrame(({ clock, pointer }) => {
    const t = clock.getElapsedTime()
    if (ref.current) {
      ref.current.rotation.y = t * 0.18
      ref.current.rotation.x = Math.sin(t * 0.3) * 0.12 + pointer.y * 0.2
      ref.current.rotation.z = Math.cos(t * 0.2) * 0.06 + pointer.x * 0.15
    }
    if (innerRef.current) {
      innerRef.current.rotation.x = t * 0.5
      innerRef.current.rotation.y = t * 0.7
    }
  })

  return (
    <group ref={ref}>
      {segments.map((s, i) => (
        <mesh key={i} position={s.pos} rotation={s.rot} scale={[s.scale, s.scale * 1.8, 0.12]}>
          <boxGeometry args={[1, 1, 1]} />
          <MeshTransmissionMaterial
            color="#ca003d"
            samples={4}
            thickness={0.6}
            roughness={0.15}
            transmission={0.95}
            ior={1.5}
            chromaticAberration={0.05}
            backside
            resolution={256}
          />
        </mesh>
      ))}

      {/* Inner crystalline core */}
      <mesh ref={innerRef}>
        <octahedronGeometry args={[0.6, 0]} />
        <meshStandardMaterial
          color="#ffffff"
          emissive="#ca003d"
          emissiveIntensity={0.35}
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>

      {/* Thin orbital ring */}
      <mesh rotation={[Math.PI / 2.2, 0, 0]}>
        <torusGeometry args={[2.3, 0.008, 12, 128]} />
        <meshBasicMaterial color="#ca003d" />
      </mesh>
      <mesh rotation={[Math.PI / 3, Math.PI / 4, 0]}>
        <torusGeometry args={[2.8, 0.004, 12, 128]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.4} />
      </mesh>
    </group>
  )
}

function Scene() {
  const { viewport } = useThree()
  const scale = Math.min(1, viewport.width / 10)
  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} color="#ffffff" />
      <pointLight position={[-4, -2, -3]} intensity={2} color="#ca003d" />
      <pointLight position={[4, 3, 2]} intensity={1.2} color="#ffffff" />

      <Float speed={1.2} rotationIntensity={0.3} floatIntensity={0.6}>
        <group scale={scale}>
          <SankofaRing />
        </group>
      </Float>

      <Environment preset="studio" />
    </>
  )
}

export default function HeroSculpture() {
  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ position: [0, 0.5, 7], fov: 38 }}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
    >
      <Scene />
    </Canvas>
  )
}
