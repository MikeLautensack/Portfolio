import AboutMe from "@/components/sections/AboutMe";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Testimonials from "@/components/sections/Testimonials";
import WorkExperence from "@/components/sections/WorkExperence";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <Box component="main">
      <Hero />
      <AboutMe />
      <WorkExperence />
      <Skills />
      <Projects />
      <Testimonials />
    </Box>
  );
}
