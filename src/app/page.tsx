import AboutMe from "@/components/sections/AboutMe";
import Hero from "@/components/sections/Hero";
import Skills from "@/components/sections/Skills";
import WorkExperence from "@/components/sections/WorkExperence";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <Box component="main">
      <Hero />
      <AboutMe />
      <WorkExperence />
      <Skills />
    </Box>
  );
}
