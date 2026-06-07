"use client";

import React from "react";
import CertCard from "../misc/CertCard";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionHeading from "../misc/SectionHeading";

const Certs = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  return (
    <motion.section
      id="certifications"
      className="mx-auto w-full max-w-content px-6 py-20 md:px-10 md:py-28"
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className="flex flex-col gap-10">
        <SectionHeading eyebrow="Credentials" title="Certifications" />
        <CertCard
          name={"Foundational C# with Microsoft"}
          description={"Fundamentals of the C# programming language and .NET"}
          issuedBy={"Free Code Camp / Microsoft Learn"}
          issuedOn={new Date(2024, 8)}
          certID="fcc7ca55ec2-de04-4ccf-8dc1-7c111f5d352a-fcswm"
          certURL="https://www.freecodecamp.org/certification/fcc7ca55ec2-de04-4ccf-8dc1-7c111f5d352a/foundational-c-sharp-with-microsoft"
          img={"/csharp.png"}
          imgAlt={"C#"}
        />
      </div>
    </motion.section>
  );
};

export default Certs;
