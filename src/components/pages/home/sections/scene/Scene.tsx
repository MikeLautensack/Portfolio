import { Canvas } from "@react-three/fiber";
import React from "react";
import { Model } from "../../../../../../Model";

const Scene = () => {
  return (
    <Canvas className="">
      <ambientLight intensity={4.5} />
      <directionalLight position={[-2, 5, 2]} intensity={1} />
      <Model />
    </Canvas>
  );
};

export default Scene;
