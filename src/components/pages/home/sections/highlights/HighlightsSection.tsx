"use client";

import React from "react";
import HighlightCard from "./HighlightCard";
import { Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const HighlightsSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.2, // Trigger animation when 10% of the element is visible
    triggerOnce: true, // Only animate once when the element enters view
  });
  return (
    <motion.section
      className="flex flex-col md:flex-row justify-center items-center gap-12 px-8 lg:px-32 py-16"
      ref={ref} // Attach the ref to the motion div
      initial={{ opacity: 0 }} // Initial state: invisible and 50px down
      animate={inView ? { opacity: 1 } : {}} // Animate when in view
      transition={{ duration: 1, ease: "easeOut" }} // Smooth fade-in
    >
      <HighlightCard
        heading="Top Rated on Upwork!"
        body="I am a top rated freelanced on upwork"
      >
        <Typography variant="h6">⭐⭐⭐⭐⭐</Typography>
      </HighlightCard>
      <HighlightCard
        heading="10K Earnings on Upwork!"
        body="I have made over $10,000 on Upwork working on React.js and Three.js projects."
      >
        <Typography variant="h3">💵</Typography>
      </HighlightCard>
      <HighlightCard
        heading="100% Job Success Score on Upwork"
        body="I have achived a 100% job succsess score on Upwork!"
      >
        <Typography variant="h3">💯</Typography>
      </HighlightCard>
    </motion.section>
  );
};

export default HighlightsSection;
