"use client";

import { Canvas } from "@react-three/fiber";
import React from "react";
import { useGLTF } from "@react-three/drei";
import Experence from "./Experence";

const Scene = () => {
  const computer = useGLTF("/models/model.gltf");
  console.log("computer model", computer);
  return (
    <Canvas>
      <Experence computer={computer} />
    </Canvas>
  );
};

export default Scene;
