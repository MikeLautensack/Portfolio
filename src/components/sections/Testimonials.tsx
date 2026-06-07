"use client";

import React from "react";
import Testimonial from "../misc/Testimonial";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionHeading from "../misc/SectionHeading";

const Testimonials = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  return (
    <motion.section
      id="testimonials"
      className="mx-auto w-full max-w-content px-6 py-20 md:px-10 md:py-28"
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className="flex flex-col gap-10">
        <SectionHeading eyebrow="Kind Words" title="Testimonials" />
        <div className="max-w-3xl">
          <Testimonial
            rating={5}
            testimonial="Mike is a great React Developer who embodies a commitment to understanding best practices and aligning with industry standards. His meticulous approach to learning and implementing these principles ensures that our projects maintain the highest levels of quality and efficiency. Mike's dedication to staying informed about the latest developments in React and related technologies sets him apart as a forward-thinking professional. With his attention to detail and focus on excellence, Mike consistently delivers exceptional results, making him an invaluable asset to our team."
            writer="Lonny B."
            company="Software Harmonics LLC"
            initial="L"
          />
        </div>
      </div>
    </motion.section>
  );
};

export default Testimonials;
