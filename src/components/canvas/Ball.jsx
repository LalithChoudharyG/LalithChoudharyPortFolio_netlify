import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Decal, Float, OrbitControls, Preload, useTexture } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float speed={1.75} rotationIntensity={0.75} floatIntensity={1.4}>
      <ambientLight intensity={0.7} />
      <directionalLight position={[0, 0, 0.05]} intensity={1.5} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial color="#fdfdfe" polygonOffset polygonOffsetFactor={-5} flatShading />
        <Decal position={[0, 0, 1]} rotation={[2 * Math.PI, 0, 6.25]} flatShading map={decal} />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  const [pixelRatio, setPixelRatio] = useState(1);

  useEffect(() => {
    setPixelRatio(Math.min(window.devicePixelRatio, 1.5)); // Optimized for mobile performance

    const handleResize = () => {
      window.location.reload(); // Force re-render on resize
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Canvas frameLoop="demand" dpr={pixelRatio} gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
