import { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import CanvasLoader from '../Loader'
import { ErrorBoundary } from 'react-error-boundary'

// Fallback UI if an error occurs
const ErrorFallback = ({ error }) => (
  <div className="text-white p-4 bg-red-500">
    <h2>Something went wrong!</h2>
    <pre>{error.message}</pre>
  </div>
)

const Computers = ({ isMobile }) => {
  // Use process.env.PUBLIC_URL to ensure the correct absolute path to the model.
  const { scene } = useGLTF('/desktop_pc/scene.gltf')

  // Traverse the loaded scene and fix any NaN values in the position attribute.
  useEffect(() => {
    if (scene) {
      scene.traverse((child) => {
        if (child.isMesh && child.geometry && child.geometry.attributes.position) {
          // First, compute bounding box and sphere.
          child.geometry.computeBoundingBox()
          child.geometry.computeBoundingSphere()

          // If the bounding sphere radius is NaN, fix the positions.
          if (isNaN(child.geometry.boundingSphere.radius)) {
            console.warn('NaN detected in bounding sphere. Fixing position attributes for:', child)
            const positions = child.geometry.attributes.position.array
            for (let i = 0; i < positions.length; i++) {
              if (isNaN(positions[i])) {
                positions[i] = 0
              }
            }
            child.geometry.attributes.position.needsUpdate = true
            child.geometry.computeBoundingBox()
            child.geometry.computeBoundingSphere()
            if (isNaN(child.geometry.boundingSphere.radius)) {
              console.error('Still computed NaN radius for geometry:', child.geometry)
            } else {
              console.log('Successfully fixed bounding sphere for:', child)
            }
          }
        }
      })
    }
  }, [scene])

  if (!scene) {
    console.error('3D model failed to load or is empty.')
    return null
  }

  return (
    <mesh>
      <hemisphereLight intensity={1.5} groundColor="black" />
      <pointLight intensity={0.8} />
      <primitive
        object={scene}
        scale={isMobile ? 0.2 : 0.7}
        position={isMobile ? [0, -2.3, -0.6] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  )
}

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false)

  // Media query to detect mobile devices.
  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 700px)')
    setIsMobile(mediaQuery.matches)
    const handleMediaQueryChange = (event) => setIsMobile(event.matches)
    mediaQuery.addEventListener('change', handleMediaQueryChange)
    return () => mediaQuery.removeEventListener('change', handleMediaQueryChange)
  }, [])

  return (
    <Canvas
      frameLoop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <OrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Computers isMobile={isMobile} />
        </ErrorBoundary>
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default ComputersCanvas
