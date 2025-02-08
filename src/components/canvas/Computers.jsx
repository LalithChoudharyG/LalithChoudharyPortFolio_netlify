import {Suspense,useEffect,useState} from 'react';
import {Canvas} from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';


const Computers = ({isMobile}) => {
  const computer = useGLTF('./desktop_pc/scene.gltf', true, (error) => {
    console.error('Error loading 3D model:', error);
  });
  return (
    < mesh>
      <hemisphereLight intensity={3} 
      groundColor="black" />
      <pointLight intensity={1} />
      <primitive 
      object={computer.scene}
      scale={isMobile ? 0.38 : 0.7}
      position={isMobile ? [0,-2.3,-0.6] : [0, -3.25, -1.5]}
      rotation={[-0.01,-0.2,-0.1]}
      />
    </mesh>
  )
}

const ComputersCanvas = () => {
  const [isMobile,setIsMobile]=useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 700px)');
    
    setIsMobile(mediaQuery.matches);
    console.log('Initial isMobile:', mediaQuery.matches);
    const handleMediaQueryChange = (event) => {
      console.log('Media query changed:', event.matches);
      setIsMobile(event.matches);
    }
    mediaQuery.addEventListener('change',handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change',handleMediaQueryChange);

    }
  },[]);
  console.log('Current isMobile:', isMobile);

  return(
    <Canvas
      frameLoop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov:25}}
      gl={{preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile}/>     
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default ComputersCanvas;