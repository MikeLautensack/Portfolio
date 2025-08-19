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
      className="py-4 flex flex-col justify-start items-start gap-8 px-6 md:px-16 lg:px-24 md:py-16 max-w-6xl mx-auto"
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
        job="React / Front End Development"
        company="@ Software Harmonics"
        date="Feb 2024 - Aug 2024"
      />
    </motion.section>
  );
};

export default WorkExperence;
