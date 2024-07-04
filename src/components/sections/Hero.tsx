"use client";

import React from "react";
import { Box } from "@mui/material";
import HeroContent from "../misc/HeroContent";
import Scene from "../scene/Scene";

const Hero = () => {
  return (
    <Box
      component="div"
      className="h-[calc(100vh-56px)] flex items-center bg-[#001824] px-8 py-4 md:px-32 md:py-20 relative"
    >
      <HeroContent />
      <Box
        id="scene-container"
        component="div"
        className="flex lg:flex-grow absolute lg:static lg:h-2/3 lg:w-full"
      >
        <Scene />
      </Box>
    </Box>
  );
};

export default Hero;
