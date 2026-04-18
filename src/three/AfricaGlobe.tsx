import { useMemo, useRef } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Float, Line, Sphere } from '@react-three/drei'
import * as THREE from 'three'
import { OFFICES } from '../lib/data'

// Convert lat/lng to 3D coordinates on sphere
function latLngToVec3(lat: number, lng: number, radius: number) {
  const phi = (90 - lat) * (Math.PI / 180)
  const theta = (lng + 180) * (Math.PI / 180)
  return new THREE.Vector3(
    -radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta)
  )
}

function DotGlobe({ radius = 2 }: { radius?: number }) {
  const points = useMemo(() => {
    const pts: THREE.Vector3[] = []
    const count = 3000
    for (let i = 0; i < count; i++) {
      const phi = Math.acos(-1 + (2 * i) / count)
      const theta = Math.sqrt(count * Math.PI) * phi
      pts.push(
        new THREE.Vector3(
          radius * Math.cos(theta) * Math.sin(phi),
          radius * Math.sin(theta) * Math.sin(phi),
          radius * Math.cos(phi)
        )
      )
    }
    return pts
  }, [radius])

  const geometry = useMemo(() => {
    const g = new THREE.BufferGeometry()
    const arr = new Float32Array(points.length * 3)
    const colors = new Float32Array(points.length * 3)
    points.forEach((p, i) => {
      arr[i * 3] = p.x
      arr[i * 3 + 1] = p.y
      arr[i * 3 + 2] = p.z
      // Highlight Africa region roughly
      const lat = Math.asin(p.y / radius) * (180 / Math.PI)
      const lng = Math.atan2(p.z, -p.x) * (180 / Math.PI) - 180
      const isAfrica = lat > -35 && lat < 38 && lng > -20 && lng < 52
      if (isAfrica) {
        colors[i * 3] = 0.79
        colors[i * 3 + 1] = 1.0
        colors[i * 3 + 2] = 0.23
      } else {
        colors[i * 3] = 0.4
        colors[i * 3 + 1] = 0.45
        colors[i * 3 + 2] = 0.55
      }
    })
    g.setAttribute('position', new THREE.BufferAttribute(arr, 3))
    g.setAttribute('color', new THREE.BufferAttribute(colors, 3))
    return g
  }, [points, radius])

  return (
    <points geometry={geometry}>
      <pointsMaterial
        size={0.025}
        vertexColors
        transparent
        opacity={0.9}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  )
}

function OfficeMarker({ position }: { position: THREE.Vector3 }) {
  const ref = useRef<THREE.Mesh>(null)
  useFrame(({ clock }) => {
    if (ref.current) {
      const t = clock.getElapsedTime()
      const s = 1 + Math.sin(t * 2) * 0.25
      ref.current.scale.setScalar(s)
    }
  })
  return (
    <group position={position}>
      <mesh ref={ref}>
        <sphereGeometry args={[0.035, 16, 16]} />
        <meshBasicMaterial color="#C9FF3B" />
      </mesh>
      <mesh>
        <ringGeometry args={[0.05, 0.08, 32]} />
        <meshBasicMaterial color="#C9FF3B" transparent opacity={0.5} side={THREE.DoubleSide} />
      </mesh>
    </group>
  )
}

function Arcs({ radius }: { radius: number }) {
  const arcs = useMemo(() => {
    const pairs: [THREE.Vector3, THREE.Vector3][] = []
    for (let i = 0; i < OFFICES.length; i++) {
      for (let j = i + 1; j < OFFICES.length; j++) {
        pairs.push([
          latLngToVec3(OFFICES[i].coords.lat, OFFICES[i].coords.lng, radius * 1.01),
          latLngToVec3(OFFICES[j].coords.lat, OFFICES[j].coords.lng, radius * 1.01),
        ])
      }
    }
    return pairs.map(([a, b]) => {
      const mid = a.clone().add(b).multiplyScalar(0.5).normalize().multiplyScalar(radius * 1.5)
      const curve = new THREE.QuadraticBezierCurve3(a, mid, b)
      return curve.getPoints(40)
    })
  }, [radius])

  return (
    <>
      {arcs.map((pts, i) => (
        <Line
          key={i}
          points={pts as unknown as [number, number, number][]}
          color="#C9FF3B"
          lineWidth={1}
          transparent
          opacity={0.35}
        />
      ))}
    </>
  )
}

function Scene() {
  const groupRef = useRef<THREE.Group>(null)
  const { viewport, pointer } = useThree()

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.08
      // parallax on pointer
      const tx = pointer.x * 0.25
      const ty = -pointer.y * 0.15
      groupRef.current.rotation.x += (ty - groupRef.current.rotation.x) * 0.05
      groupRef.current.position.x += (tx - groupRef.current.position.x) * 0.05
    }
  })

  const radius = Math.min(2.2, viewport.width / 4)

  return (
    <>
      <ambientLight intensity={0.6} />
      <pointLight position={[5, 5, 5]} intensity={1.2} color="#C9FF3B" />
      <pointLight position={[-5, -3, -5]} intensity={0.6} color="#4D7CFE" />

      <Float speed={1} rotationIntensity={0.1} floatIntensity={0.3}>
        <group ref={groupRef} rotation={[0.1, 0, 0]}>
          <Sphere args={[radius * 0.99, 64, 64]}>
            <meshBasicMaterial color="#05060A" />
          </Sphere>

          <DotGlobe radius={radius} />
          <Arcs radius={radius} />

          {OFFICES.map((o, i) => (
            <OfficeMarker key={i} position={latLngToVec3(o.coords.lat, o.coords.lng, radius * 1.015)} />
          ))}

          {/* outer glow ring */}
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <ringGeometry args={[radius * 1.15, radius * 1.16, 128]} />
            <meshBasicMaterial color="#C9FF3B" transparent opacity={0.25} side={THREE.DoubleSide} />
          </mesh>
          <mesh rotation={[Math.PI / 3, Math.PI / 4, 0]}>
            <ringGeometry args={[radius * 1.3, radius * 1.305, 128]} />
            <meshBasicMaterial color="#4D7CFE" transparent opacity={0.15} side={THREE.DoubleSide} />
          </mesh>
        </group>
      </Float>
    </>
  )
}

export default function AfricaGlobe() {
  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ position: [0, 0, 6], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
    >
      <Scene />
    </Canvas>
  )
}
