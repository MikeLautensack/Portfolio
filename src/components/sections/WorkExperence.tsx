"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ExperienceItem from "../misc/ExperenceItem";
import SectionHeading from "../misc/SectionHeading";

const WorkExperence = () => {
  const { ref, inView } = useInView({
    threshold: 0.15,
    triggerOnce: true,
  });
  return (
    <motion.section
      id="experience"
      className="mx-auto w-full max-w-content px-6 py-20 md:px-10 md:py-28"
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className="flex flex-col gap-10">
        <SectionHeading eyebrow="Career" title="Work Experience" />
        <div className="flex flex-col gap-5">
          <ExperienceItem
            num="01."
            job="Full-Stack Web Developer"
            company="@ Loxone"
            date="Oct 2025 – Present"
            bullets={[
              "Integrated the Bank of America checkout API for credit card payments on shop.loxone.com",
              "Led the migration of the Next.js webshop from JavaScript to TypeScript and from client-side rendering to React Server Components with server-side data fetching, improving performance, UX, and SEO",
              "Built the Loxone Status Page, an internal service-monitoring dashboard",
              "Integrated Sentry into shop.loxone.com for production error and performance monitoring",
            ]}
          />
          <ExperienceItem
            num="02."
            job="Full-Stack Developer"
            company="@ Independent / Contract"
            date="May 2023 – Oct 2025"
            bullets={[
              "Built and maintained web applications for small businesses using Node.js, Next.js, React.js, and PostgreSQL",
              "Integrated secure Stripe payment systems and implemented tiered subscription logic for SaaS platforms",
              "Developed internal React component libraries and documentation for developers",
            ]}
          />
          <ExperienceItem
            num="03."
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
            num="04."
            job="Backend Developer - evyAI - evyai.com (Contract)"
            company="@ evyAI"
            date="Dec 2024 – Jan 2025"
            bullets={[
              "Wrote Google Firebase cloud functions in TypeScript for an AI web application + chrome extension",
              "Wrote custom authentication and logger middleware for backend",
            ]}
          />
          <ExperienceItem
            num="05."
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
        </div>
      </div>
    </motion.section>
  );
};

export default WorkExperence;
