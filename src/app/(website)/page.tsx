import AboutMe from "@/components/sections/AboutMe";
import Certs from "@/components/sections/Certs";
import Hero from "@/components/sections/Hero";
import HighlightsSection from "@/components/sections/HighlightsSection";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Testimonials from "@/components/sections/Testimonials";
import WorkExperence from "@/components/sections/WorkExperence";
import { Box } from "@mui/material";
import { headers } from "next/headers";
import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/lib/client";

const SKILLS_QUERY = `*[
  _type == "skill"
]{_id, skillName, skillDescription, skillImg}`;

const options = { next: { revalidate: 30 } };

const getSkills = async () => {
  const query = client.fetch<SanityDocument[]>(SKILLS_QUERY, {}, options);
  return await query;
};

export default async function Home() {
  const skills = await getSkills();
  headers();
  return (
    <Box component="main">
      <Hero />
      <HighlightsSection />
      <AboutMe />
      <WorkExperence />
      <Skills skills={skills} />
      <Projects />
      <Testimonials />
      <Certs />
    </Box>
  );
}
