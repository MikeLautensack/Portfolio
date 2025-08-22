"use client";

import { Typography } from "@mui/material";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ExperienceItem from "../misc/ExperenceItem";

const WorkExperence = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  return (
    <motion.section
      className="py-16 flex flex-col justify-start items-start gap-12 px-6 md:px-10 max-w-6xl mx-auto"
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <Typography
        variant="h4"
        className="w-max border-b-2 border-[#31B0E9] text-white"
      >
        Work Experience
      </Typography>
      <ExperienceItem
        num="01."
        job="Full-Stack Developer (Contract)"
        company="@ Upwork"
        date="May 2023 – Present"
        bullets={[
          "Built and maintained web applications for small businesses using Node.js, Next.js, React.js, and PostgreSQL",
          "Integrated secure Stripe payment systems and implemented tiered subscription logic for SaaS platforms",
          "Developed internal React component libraries and documentation for developers",
          "Achieved Top Rated Plus, 100% Job Success Score, and many 5 Star client reviews on Upwork",
        ]}
      />
      <ExperienceItem
        num="02."
        job="Full-Stack Developer - Cargo Fax - cargofax.co (Contract)"
        company="@ Cargo Fax"
        date="Dec 2024 – May 2025"
        bullets={[
          "Refactored legacy Python app to Next.js 14 app router with a PostgreSQL database via Supabase",
          "Integrated subscription billing with Stripe",
          "Integrated Sentry for error and performance monitoring in production",
        ]}
      />
      <ExperienceItem
        num="03."
        job="Backend Developer - evyAI - evyai.com (Contract)"
        company="@ evyAI"
        date="Dec 2024 – Jan 2025"
        bullets={[
          "Wrote Google Firebase cloud functions in TypeScript for an AI web application + chrome extension",
          "Wrote custom authentication and logger middleware for backend",
        ]}
      />
      <ExperienceItem
        num="04."
        job="Frontend Developer (Contract)"
        company="@ Software Harmonics LLC"
        date="Feb 2024 – Aug 2024"
        bullets={[
          "Enhanced production React.js sales platform used by sales teams at a commercial trucking company",
          "Refactored legacy React frontend application from Create React App to Vite, reducing dev server startup time from minutes to seconds, added hot module reloading, and updated from React 16 to React 18",
          "Developed custom TypeScript React.js component library and VSCode extensions for internal development workflows at Software Harmonics LLC",
          "Created comprehensive documentation for component library and developer tooling",
        ]}
      />
    </motion.section>
  );
};

export default WorkExperence;
