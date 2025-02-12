import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Decal, Float, OrbitControls, Preload, useTexture } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Ball = ({ imgUrl, isMobile }) => {
  const [decal] = useTexture([imgUrl]);

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1.2}>
      <ambientLight intensity={0.8} />
      <directionalLight position={[0, 0, 0.1]} intensity={1} />
      <mesh castShadow receiveShadow scale={isMobile ? 2.0 : 2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial color="#fdfdfe" polygonOffset polygonOffsetFactor={-5} flatShading />
        <Decal position={[0, 0, 1]} rotation={[2 * Math.PI, 0, 6.25]} flatShading map={decal} />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkDevice();
    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  return (
    <Canvas
      dpr={[1, 2]} // Allows adaptive resolution
      frameloop="demand"
      shadows
      gl={{ preserveDrawingBuffer: true, powerPreference: "high-performance" }} // Forces better GPU use
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} enableRotate={!isMobile} />
        <Ball imgUrl={icon} isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
