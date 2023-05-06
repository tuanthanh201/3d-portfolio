import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Earth = () => {
  const earth = useGLTF("./nasa/scene.gltf");

  return (
    <primitive object={earth.scene} scale={2.5} position-y={0} rotation-y={0} />
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 100],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
      <ambientLight intensity={0.1} />
      {/* <ambientLight intensity={10} color='#345ae2' /> */}
      <ambientLight intensity={10} color='#345ae2' />
      {/* <hemisphereLight intensity={0.7} color='#1a65e8' /> */}
      {/* <spotLight intensity={0.5} position={[0, 0, 100]} /> */}
      {/* <pointLight intensity={1} position={[0, 0, 100]} /> */}
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;