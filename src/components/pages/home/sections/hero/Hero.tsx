"use client";

import React from "react";
import { FaAnglesDown } from "react-icons/fa6";
import * as motion from "framer-motion/client";
import HeroContent from "@/components/pages/home/sections/hero/HeroContent";
import Scene from "@/components/pages/home/sections/scene/Scene";

const Hero = () => {
  return (
    <div className="h-[calc(100vh-56px)] flex flex-col items-center px-8 md:px-32 relative">
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
