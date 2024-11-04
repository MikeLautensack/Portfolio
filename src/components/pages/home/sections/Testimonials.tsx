"use client";

import { Box, Typography } from "@mui/material";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Testimonial from "@/components/misc/Testimonial";

const Testimonials = () => {
  const { ref, inView } = useInView({
    threshold: 0.2, // Trigger animation when 10% of the element is visible
    triggerOnce: true, // Only animate once when the element enters view
  });
  return (
    <motion.div
      className="flex flex-col gap-4 justify-start items-start px-8 py-4 md:px-32 md:py-16"
      ref={ref} // Attach the ref to the motion div
      initial={{ opacity: 0 }} // Initial state: invisible and 50px down
      animate={inView ? { opacity: 1 } : {}} // Animate when in view
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <Typography
        variant="h4"
        className="w-max border-b-[3px] border-[#31B0E9] text-white"
      >
        Testimonials
      </Typography>
      <div className="flex flex-col gap-8 justify-start items-start">
        <Testimonial
          rating={5}
          testimonial="Mike is a great React Developer who embodies a commitment to understanding best practices and aligning with industry standards. His meticulous approach to learning and implementing these principles ensures that our projects maintain the highest levels of quality and efficiency. Mike's dedication to staying informed about the latest developments in React and related technologies sets him apart as a forward-thinking professional. With his attention to detail and focus on excellence, Mike consistently delivers exceptional results, making him an invaluable asset to our team."
          writer="Lonny B."
          company="Software Harmonics LLC"
          initial="L"
        />
      </div>
    </motion.div>
  );
};

export default Testimonials;
