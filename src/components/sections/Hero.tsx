import React from "react";
import { Box } from "@mui/material";
import HeroContent from "../misc/HeroContent";

const Hero = () => {
  return (
    <Box
      component="div"
      className="h-[calc(100vh-64px)] flex items-center bg-[#001824] px-8 py-4 md:px-32 md:py-20"
    >
      <HeroContent />
    </Box>
  );
};

export default Hero;
