import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function CarModel({ url, scale = [3, 3, 3] }) {
  const group = useRef();
  const { scene } = useGLTF(url);

  useFrame(() => {
    if (group.current) {
      group.current.rotation.y += 0.004;
    }
  });

  return (
    <group ref={group} position={[0, -0.5, 0]}>
      <primitive object={scene} scale={scale} />
    </group>
  );
}

export default function Car3D({ url, scale }) {
  return (
    <div
      className="w-full flex justify-center items-center bg-indigo-200 rounded-lg shadow-lg p-0"
      style={{ minHeight: 400 }}
    >
      <Canvas
        camera={{ position: [0, 1.2, 5], fov: 50 }}
        style={{ width: "100%", height: "400px" }}
      >
        <ambientLight intensity={4} />
        <directionalLight position={[0, 4, 6]} intensity={2.3} />
        <Suspense fallback={null}>
          <CarModel url={url} scale={scale || [3, 3, 3]} />
        </Suspense>
        <OrbitControls enablePan={false} enableZoom={false} />
      </Canvas>
    </div>
  );
}
