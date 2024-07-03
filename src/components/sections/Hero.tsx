"use client";

import React from "react";
import { Box } from "@mui/material";
import HeroContent from "../misc/HeroContent";
import Scene from "../scene/Scene";

const Hero = () => {
  return (
    <Box
      component="div"
      className="h-[calc(100vh-64px)] flex items-center bg-[#001824] px-8 py-4 md:px-32 md:py-20"
    >
      <HeroContent />
      <Box component="div" className="w-[650px] h-[500px]">
        <Scene />
      </Box>
    </Box>
  );
};

export default Hero;
