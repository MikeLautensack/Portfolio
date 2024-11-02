"use client";

import { Box, Typography } from "@mui/material";
import React from "react";
import CertCard from "../misc/CertCard";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Certs = () => {
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
      <CertCard
        name={"Foundational C# with Microsoft"}
        description={"Fundamentals of the C# programming language and .NET"}
        issuedBy={"Free Code Camp/Microsoft Learn"}
        issuedOn={new Date(2024, 8)}
        certID="fcc7ca55ec2-de04-4ccf-8dc1-7c111f5d352a-fcswm"
        certURL="https://www.freecodecamp.org/certification/fcc7ca55ec2-de04-4ccf-8dc1-7c111f5d352a/foundational-c-sharp-with-microsoft"
        img={"/csharp.png"}
        imgAlt={"C#"}
        buttonColor="#66217B"
      />
    </motion.section>
  );
};

export default Certs;
