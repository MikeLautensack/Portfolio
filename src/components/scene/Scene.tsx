"use client";

import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import { Model } from "../../../Model";

const Scene = () => {
  return (
    <Canvas
      className="w-full h-full canvas-container"
      gl={{
        antialias: true,
        alpha: true,
        preserveDrawingBuffer: true,
        powerPreference: "high-performance",
      }}
      dpr={[1, 2]} // Optimize for different screen densities
      camera={{ position: [0, 0, 5] }}
      onCreated={({ gl, scene }) => {
        // Set renderer background immediately to prevent flicker
        gl.setClearColor("#1C2023", 0); // Transparent background
      }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={4.5} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        <Model />
      </Suspense>
    </Canvas>
  );
};

export default Scene;
