import { useMemo, useRef } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

/**
 * Cinematic atmospheric scene — drifting 3D totems (abstract African
 * silhouettes formed by extruded crosses) under a crimson rim light,
 * with a particle haze.
 */
function Totem({
  position,
  scale = 1,
  delay = 0,
}: {
  position: [number, number, number]
  scale?: number
  delay?: number
}) {
  const ref = useRef<THREE.Group>(null)
  useFrame(({ clock, pointer }) => {
    const t = clock.getElapsedTime() + delay
    if (ref.current) {
      ref.current.rotation.y = t * 0.15
      ref.current.position.y = position[1] + Math.sin(t * 0.4) * 0.2
      ref.current.rotation.x = pointer.y * 0.1
    }
  })

  return (
    <group ref={ref} position={position} scale={scale}>
      {/* stacked block totem */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[0.8, 1.2, 0.8]} />
        <meshStandardMaterial color="#0a0a0a" roughness={0.8} metalness={0.2} />
      </mesh>
      <mesh position={[0, 0.9, 0]}>
        <boxGeometry args={[1.1, 0.25, 1.1]} />
        <meshStandardMaterial color="#1a0008" roughness={0.5} metalness={0.6} />
      </mesh>
      <mesh position={[0, 1.35, 0]}>
        <boxGeometry args={[0.6, 0.6, 0.2]} />
        <meshStandardMaterial color="#0a0a0a" roughness={0.9} metalness={0.1} />
      </mesh>
      {/* eye slits */}
      <mesh position={[-0.15, 1.35, 0.105]}>
        <boxGeometry args={[0.12, 0.04, 0.02]} />
        <meshStandardMaterial
          color="#ca003d"
          emissive="#ca003d"
          emissiveIntensity={2.5}
        />
      </mesh>
      <mesh position={[0.15, 1.35, 0.105]}>
        <boxGeometry args={[0.12, 0.04, 0.02]} />
        <meshStandardMaterial
          color="#ca003d"
          emissive="#ca003d"
          emissiveIntensity={2.5}
        />
      </mesh>
      {/* base plinth */}
      <mesh position={[0, -0.75, 0]}>
        <boxGeometry args={[1.4, 0.15, 1.4]} />
        <meshStandardMaterial color="#050505" roughness={0.6} metalness={0.8} />
      </mesh>
    </group>
  )
}

function Particles({ count = 800 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null)
  const geometry = useMemo(() => {
    const g = new THREE.BufferGeometry()
    const positions = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 22
      positions[i * 3 + 1] = (Math.random() - 0.5) * 12
      positions[i * 3 + 2] = (Math.random() - 0.5) * 14 - 2
    }
    g.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    return g
  }, [count])

  useFrame(({ clock }) => {
    if (ref.current) {
      const t = clock.getElapsedTime()
      ref.current.rotation.y = t * 0.02
      const pos = ref.current.geometry.attributes.position.array as Float32Array
      for (let i = 0; i < count; i++) {
        pos[i * 3 + 1] += 0.003
        if (pos[i * 3 + 1] > 6) pos[i * 3 + 1] = -6
      }
      ref.current.geometry.attributes.position.needsUpdate = true
    }
  })

  return (
    <points ref={ref} geometry={geometry}>
      <pointsMaterial
        size={0.018}
        color="#ca003d"
        transparent
        opacity={0.6}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  )
}

function Scene() {
  const groupRef = useRef<THREE.Group>(null)
  const { pointer } = useThree()

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.position.x += (pointer.x * 0.3 - groupRef.current.position.x) * 0.05
      groupRef.current.position.y += (-pointer.y * 0.15 - groupRef.current.position.y) * 0.05
    }
  })

  return (
    <>
      <fog attach="fog" args={['#000000', 6, 22]} />
      <ambientLight intensity={0.15} />
      {/* crimson rim */}
      <spotLight
        position={[-8, 4, 6]}
        angle={0.4}
        penumbra={0.8}
        intensity={60}
        color="#ca003d"
        distance={25}
      />
      {/* cool rim */}
      <spotLight
        position={[8, 6, -2]}
        angle={0.5}
        penumbra={1}
        intensity={25}
        color="#4dc3ff"
        distance={25}
      />
      <pointLight position={[0, -2, 2]} intensity={4} color="#ca003d" distance={10} />

      <group ref={groupRef}>
        {/* Foreground totem */}
        <Totem position={[-0.2, -0.5, 0]} scale={1.6} />
        {/* mid-ground */}
        <Totem position={[-4.2, -0.8, -3]} scale={1.1} delay={0.8} />
        <Totem position={[4, -0.7, -2.5]} scale={1.2} delay={1.6} />
        {/* background */}
        <Totem position={[-6.5, -1.1, -6]} scale={0.85} delay={2.2} />
        <Totem position={[6.8, -1, -5.5]} scale={0.95} delay={3.1} />
        <Totem position={[-1.8, -1.3, -8]} scale={0.7} delay={4.2} />
        <Totem position={[2, -1.4, -9]} scale={0.6} delay={5.0} />

        {/* floor */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2.2, 0]}>
          <planeGeometry args={[40, 40]} />
          <meshStandardMaterial color="#000000" metalness={0.9} roughness={0.3} />
        </mesh>
      </group>

      <Particles />
    </>
  )
}

export default function CinemaScene() {
  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ position: [0, 0.6, 5.5], fov: 42 }}
      gl={{ antialias: true, alpha: false, powerPreference: 'high-performance' }}
      style={{ background: 'linear-gradient(180deg, #050005 0%, #000 60%, #1a0008 100%)' }}
    >
      <Scene />
    </Canvas>
  )
}
