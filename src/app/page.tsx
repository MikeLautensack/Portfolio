import AboutMe from "@/components/sections/AboutMe";
import Certs from "@/components/sections/Certs";
import Hero from "@/components/sections/Hero";
// import HighlightsSection from "@/components/sections/HighlightsSection";
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
      <Projects />
      <Testimonials />
      <Certs />
      <Skills />
    </Box>
  );
}
