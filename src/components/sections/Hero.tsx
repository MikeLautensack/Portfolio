"use client";

import React from "react";
import HeroContent from "../misc/HeroContent";
import { FaAnglesDown } from "react-icons/fa6";
import * as motion from "framer-motion/client";
import dynamic from "next/dynamic";

// Dynamic import with SSR disabled for 3D scene
const Scene = dynamic(() => import("../scene/Scene"), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center w-full h-full">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#31B0E9]"></div>
    </div>
  ),
});

const Hero = () => {
  return (
    <div className="h-[calc(100vh-56px)] flex flex-col items-center px-6 md:px-10 relative bg-[#1C2023]">
      <div
        id="content-and-scene"
        className="flex flex-col md:flex-row justify-center lg:justify-start items-center h-full w-full"
      >
        <HeroContent />
        <motion.div
          id="scene-container"
          className="flex lg:flex-grow absolute lg:h-2/3 lg:w-1/2 right-0 top-60 md:top-52 lg:top-auto w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          style={{
            backgroundColor: "transparent", // Prevent white flash
          }}
        >
          <Scene />
        </motion.div>
      </div>
      <div className="flex justify-center items-center relative w-full h-8 bottom-4">
        <motion.div
          id="arrow"
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <FaAnglesDown className="text-[#31B0E9]" />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
