"use client";

import { Typography } from "@mui/material";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CertCard from "@/components/pages/home/sections/certs/CertCard";
import { type SanityDocument } from "next-sanity";

type CertsProps = {
  certs: SanityDocument[];
};

const Certs = ({ certs }: CertsProps) => {
  const { ref, inView } = useInView({
    threshold: 0.2, // Trigger animation when 10% of the element is visible
    triggerOnce: true, // Only animate once when the element enters view
  });
  return (
    <motion.section
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
        Certifications
      </Typography>
      {certs.map((cert) => (
        <CertCard key={cert._id} cert={certs[0]} buttonColor="#66217B" />
      ))}
    </motion.section>
  );
};

export default Certs;
