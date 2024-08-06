"use client";

import React from "react";
import { Box } from "@mui/material";
import HeroContent from "../misc/HeroContent";
import Scene from "../scene/Scene";
import { FaAnglesDown } from "react-icons/fa6";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <Box
      component="div"
      className="h-[calc(100vh-56px)] flex flex-col items-center bg-[#001824] px-8 md:px-32 relative"
    >
      <div className="flex justify-start items-center h-full w-full">
        <HeroContent />
        <Box
          id="scene-container"
          component="div"
          className="flex lg:flex-grow absolute lg:h-2/3 lg:w-1/2 right-0"
        >
          <Scene />
        </Box>
      </div>
      <div className="flex justify-center items-center relative w-full h-8 bottom-4">
        <motion.div
          id="arrow"
          initial={{ y: -10 }}
          animate={{ y: 0 }}
          transition={{ duration: 1.25, repeat: Infinity }}
        >
          <FaAnglesDown className="text-[#FF8D25]" />
        </motion.div>
      </div>
    </Box>
  );
};

export default Hero;
