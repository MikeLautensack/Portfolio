"use client";

import { Box, Typography } from "@mui/material";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AboutMe = () => {
  const { ref, inView } = useInView({
    threshold: 0.2, // Trigger animation when 10% of the element is visible
    triggerOnce: true, // Only animate once when the element enters view
  });
  return (
    <motion.section
      className="flex flex-col gap-8 justify-start items-start px-8 pb-4 md:px-32 md:pb-32"
      ref={ref} // Attach the ref to the motion div
      initial={{ opacity: 0 }} // Initial state: invisible and 50px down
      animate={inView ? { opacity: 1 } : {}} // Animate when in view
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <Typography
        variant="h4"
        className="w-max border-b-[3px] border-[#9A4F96] text-white"
      >
        About Me
      </Typography>
      <Box component="div" className="flex flex-col gap-8 pb-10">
        <Typography variant="body1" className="text-white">
          {`As a self-taught Full Stack Web Developer with 2.25 years of focused experience, I specialize in creating robust web applications using TypeScript, React, Next.js, and Vite. My expertise spans frontend, backend, and fullstack development, with a proven track record on Upwork as a Top Rated freelancer with a 100% Job Success Score.`}
        </Typography>
        <Typography variant="body1" className="text-white">
          {`I excel in deploying Next.js applications on Vercel and RESTful APIs to Azure, delivering comprehensive cloud solutions. My projects, including an Estimate Generator for contractors and a real-time Socket.io Chat App, showcase my ability to implement complex features and integrate various technologies seamlessly.`}
        </Typography>
        <Typography variant="body1" className="text-white">
          {`What sets me apart is my unique blend of technical expertise and business acumen, derived from prior entrepreneurial experience. This background enables me to build technically sound solutions that align closely with small business needs, particularly in developing SaaS products. My approach combines meticulous attention to detail with a forward-thinking mindset, driving me to create innovative web solutions that efficiently solve real-world problems.`}
        </Typography>
      </Box>
    </motion.section>
  );
};

export default AboutMe;
