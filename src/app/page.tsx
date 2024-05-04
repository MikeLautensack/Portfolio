import Footer from "@/components/Footer";
import AboutMe from "@/components/sections/AboutMe";
import Certs from "@/components/sections/Certs";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import WorkExperence from "@/components/sections/WorkExperence";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Hero />
      <AboutMe />
      <WorkExperence />
      <Projects />
      <Certs />
      <Skills />
      <Footer />
    </main>
  );
}
