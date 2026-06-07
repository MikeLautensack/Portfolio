"use client";
import { Typography } from "@mui/material";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionHeading from "../misc/SectionHeading";

const facts = [
  "Years of professional contract work",
  "Production Next.js & React apps",
  "Azure Certified (AZ-900)",
  "TypeScript · React · Next.js",
];

const AboutMe = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <motion.section
      id="about"
      className="mx-auto w-full max-w-content px-6 py-20 md:px-10 md:py-28"
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="flex flex-col gap-10">
        <SectionHeading
          eyebrow="About Me"
          title="Product-minded full-stack engineer."
        />

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="flex flex-col gap-5 lg:col-span-8">
            <Typography
              variant="body1"
              className="text-lg leading-relaxed text-ink"
            >
              I&apos;m a full-stack web developer who builds robust,
              production-grade web applications with TypeScript, React, and
              Next.js. My work spans the entire stack — from payment
              integrations and server-side rendering to reusable component
              libraries.
            </Typography>
            <Typography
              variant="body1"
              className="text-lg leading-relaxed text-ink-muted"
            >
              Recent highlights include integrating a payment processor into a
              production e-commerce webshop and leading its migration to
              TypeScript and React Server Components. I&apos;ve also delivered
              production web applications for a range of clients through several
              years of contract work.
            </Typography>
            <Typography
              variant="body1"
              className="text-lg leading-relaxed text-ink-muted"
            >
              What sets me apart is a blend of engineering depth and business
              sense shaped by prior entrepreneurial experience, which helps me
              build solutions that genuinely fit real-world needs — particularly
              SaaS products for small businesses. That same mindset drives my
              own product, Estimate Generator: a field service management
              platform I designed and built for contractors, complete with a
              REST API, PostgreSQL, secure authentication, and Stripe
              subscription billing.
            </Typography>
          </div>

          <aside className="lg:col-span-4">
            <div className="flex flex-col gap-4 rounded-2xl border border-line bg-surface p-6">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-ink-faint">
                Quick facts
              </span>
              <ul className="flex flex-col gap-3.5">
                {facts.map((fact) => (
                  <li
                    key={fact}
                    className="flex items-center gap-3 text-sm text-ink"
                  >
                    <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                    {fact}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutMe;
