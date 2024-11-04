"use client";

import { Typography } from "@mui/material";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ExperenceItem from "@/components/misc/ExperenceItem";

const WorkExperence = () => {
  const { ref, inView } = useInView({
    threshold: 0.2, // Trigger animation when 10% of the element is visible
    triggerOnce: true, // Only animate once when the element enters view
  });
  return (
    <motion.section
      className="px-8 py-4 md:px-32 md:py-16 flex flex-col justify-start items-start gap-4"
      ref={ref} // Attach the ref to the motion div
      initial={{ opacity: 0 }} // Initial state: invisible and 50px down
      animate={inView ? { opacity: 1 } : {}} // Animate when in view
      transition={{ duration: 1, ease: "easeOut" }} // Smooth fade-in
    >
      <Typography
        variant="h4"
        className="w-max border-b-[3px] border-[#31B0E9] text-white"
      >
        Work Experence
      </Typography>
      <ExperenceItem
        num="01."
        job="React / Front End Development"
        company="@ Software Harmonics"
        date="Feb 2024 - Aug 2024"
      />
    </motion.section>
  );
};

export default WorkExperence;
