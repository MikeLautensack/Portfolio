"use client";

import React from "react";
import {
  Text,
  Html,
  ContactShadows,
  PresentationControls,
  Float,
  Environment,
} from "@react-three/drei";

type ExperenceProps = {
  computer: any;
};

const Experence = ({ computer }: ExperenceProps) => {
  return (
    <>
      <Environment preset="city" />

      <PresentationControls
        global
        rotation={[0.13, 0.1, 0]}
        polar={[-0.4, 0.2]}
        azimuth={[-1, 0.75]}
        config={{ mass: 2, tension: 400 }}
        snap={{ mass: 4, tension: 400 }}
      >
        <Float rotationIntensity={0.4}>
          <rectAreaLight
            width={2.5}
            height={1.65}
            intensity={65}
            color={"#ff6900"}
            rotation={[-0.1, Math.PI, 0]}
            position={[0, 0.55, -1.15]}
          />

          <primitive
            object={computer.scene}
            position-y={-0.8}
            position-z={2}
            rotation-x={0.13}
            rotation-y={-0.4}
          >
            <Html
              transform
              wrapperClass="htmlScreen"
              distanceFactor={1}
              position={[0.15, 1.65, -1.4]}
              rotation-x={-0.25}
              scale={4}
            >
              <iframe src="https://mikeswebdeveloperportfolio.com/copy" />
            </Html>
          </primitive>
        </Float>
      </PresentationControls>

      {/* <ContactShadows position-y={-1.4} opacity={0.4} scale={5} blur={2.4} /> */}
    </>
  );
};

export default Experence;
