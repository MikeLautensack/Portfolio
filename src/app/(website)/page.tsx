import AboutMe from "@/components/pages/home/sections/AboutMe";
import HighlightsSection from "@/components/pages/home/sections/highlights/HighlightsSection";
import Projects from "@/components/pages/home/sections/Projects";
import { Box } from "@mui/material";
import { headers } from "next/headers";
import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/lib/client";
import Certs from "@/components/pages/home/sections/certs/Certs";
import Hero from "@/components/pages/home/sections/hero/Hero";
import Skills from "@/components/pages/home/sections/skills/Skills";
import Testimonials from "@/components/pages/home/sections/testimonials/Testimonials";
import WorkExperence from "@/components/pages/home/sections/workExperence/WorkExperence";

const SKILLS_QUERY = `*[
  _type == "skill"
]{_id, skillName, skillDescription, skillImg}`;

const CERTS_QUERY = `*[
  _type == "certification"
] | order(index asc) {
  _id,
  certName,
  certDescription,
  issuedBy,
  issuedOn,
  certId,
  certURL,
  certImg,
  index
}`;

const options = { next: { revalidate: 30 } };

const getSkills = async () => {
  const query = client.fetch<SanityDocument[]>(SKILLS_QUERY, {}, options);
  return await query;
};

const getCerts = async () => {
  const query = client.fetch<SanityDocument[]>(CERTS_QUERY, {}, options);
  return await query;
};

export default async function Home() {
  const skills = await getSkills();
  const certs = await getCerts();
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
      <Certs certs={certs} />
    </Box>
  );
}
