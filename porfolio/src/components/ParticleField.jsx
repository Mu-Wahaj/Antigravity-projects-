import { useState, useEffect, Component } from 'react'

// Error boundary
class WebGLErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }
  static getDerivedStateFromError() {
    return { hasError: true }
  }
  componentDidCatch(error) {
    console.warn('3D scene unavailable:', error.message)
  }
  render() {
    if (this.state.hasError) return this.props.fallback || null
    return this.props.children
  }
}

const CSSFallback = () => (
  <div style={{
    position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none',
    background: 'radial-gradient(ellipse at 30% 20%, rgba(0,229,255,0.06) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(124,77,255,0.06) 0%, transparent 50%), #050508',
  }} />
)

const ParticleField = () => {
  const [SceneComponent, setSceneComponent] = useState(null)

  useEffect(() => {
    // Check WebGL support first
    try {
      const c = document.createElement('canvas')
      const gl = c.getContext('webgl2') || c.getContext('webgl')
      if (!gl) return
    } catch {
      return
    }

    // Dynamically import Three.js modules only when WebGL is available
    Promise.all([
      import('@react-three/fiber'),
      import('@react-three/drei'),
      import('three'),
    ]).then(([fiber, drei, THREE]) => {
      const { Canvas, useFrame } = fiber
      const { Float } = drei

      // Build the scene component dynamically
      const BuiltScene = () => {
        const { useRef, useMemo } = require('react')

        function Particles({ count = 1500 }) {
          const mesh = useRef()
          const positions = useMemo(() => {
            const pos = new Float32Array(count * 3)
            for (let i = 0; i < count; i++) {
              pos[i * 3]     = (Math.random() - 0.5) * 25
              pos[i * 3 + 1] = (Math.random() - 0.5) * 25
              pos[i * 3 + 2] = (Math.random() - 0.5) * 25
            }
            return pos
          }, [count])

          useFrame((state) => {
            if (!mesh.current) return
            mesh.current.rotation.y = state.clock.elapsedTime * 0.02
            mesh.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.01) * 0.1
          })

          return (
            <points ref={mesh}>
              <bufferGeometry>
                <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
              </bufferGeometry>
              <pointsMaterial
                size={0.03} color="#00e5ff" transparent opacity={0.6}
                sizeAttenuation blending={THREE.AdditiveBlending} depthWrite={false}
              />
            </points>
          )
        }

        function FloatingShape({ geometry, position, color, speed = 1 }) {
          const meshRef = useRef()
          useFrame((state) => {
            if (!meshRef.current) return
            meshRef.current.rotation.x = state.clock.elapsedTime * 0.15 * speed
            meshRef.current.rotation.y = state.clock.elapsedTime * 0.2 * speed
          })
          return (
            <Float speed={1.5} rotationIntensity={0.3} floatIntensity={1.5} floatingRange={[-0.3, 0.3]}>
              <mesh ref={meshRef} position={position}>
                {geometry}
                <meshBasicMaterial color={color} wireframe transparent opacity={0.15} />
              </mesh>
            </Float>
          )
        }

        function InnerScene() {
          const groupRef = useRef()
          useFrame((state) => {
            if (!groupRef.current) return
            const mx = state.pointer.x * 0.3
            const my = state.pointer.y * 0.2
            groupRef.current.rotation.y += (mx - groupRef.current.rotation.y) * 0.02
            groupRef.current.rotation.x += (-my - groupRef.current.rotation.x) * 0.02
          })
          return (
            <group ref={groupRef}>
              <Particles count={1800} />
              <FloatingShape geometry={<icosahedronGeometry args={[1.5, 1]} />} position={[4, 2, -5]} color="#00e5ff" speed={0.8} />
              <FloatingShape geometry={<octahedronGeometry args={[1.2, 0]} />} position={[-5, -1, -4]} color="#7c4dff" speed={1.2} />
              <FloatingShape geometry={<torusGeometry args={[1.3, 0.2, 8, 32]} />} position={[2, -3, -6]} color="#00ff87" speed={0.6} />
              <FloatingShape geometry={<dodecahedronGeometry args={[0.8, 0]} />} position={[-3, 3, -7]} color="#00e5ff" speed={1} />
            </group>
          )
        }

        return (
          <Canvas
            camera={{ position: [0, 0, 8], fov: 60 }}
            style={{ pointerEvents: 'auto' }}
            dpr={[1, 1.5]}
            gl={{ antialias: true, alpha: true }}
          >
            <color attach="background" args={['#050508']} />
            <fog attach="fog" args={['#050508', 5, 25]} />
            <ambientLight intensity={0.3} />
            <InnerScene />
          </Canvas>
        )
      }

      setSceneComponent(() => BuiltScene)
    }).catch(err => {
      console.warn('Failed to load 3D scene:', err)
    })
  }, [])

  if (!SceneComponent) return <CSSFallback />

  return (
    <WebGLErrorBoundary fallback={<CSSFallback />}>
      <div style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }}>
        <SceneComponent />
      </div>
    </WebGLErrorBoundary>
  )
}

export default ParticleField
