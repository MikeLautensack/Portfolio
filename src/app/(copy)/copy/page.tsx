import AboutMe from "@/components/sections/AboutMe";
import HeroCopy from "@/components/sections/HeroCopy";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Testimonials from "@/components/sections/Testimonials";
import WorkExperence from "@/components/sections/WorkExperence";
import { Box } from "@mui/material";
import React from "react";

const page = () => {
  return (
    <Box component="main">
      <HeroCopy />
      <AboutMe />
      <WorkExperence />
      <Skills />
      <Projects />
      <Testimonials />
    </Box>
  );
};

export default page;
