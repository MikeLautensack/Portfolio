import { Box, Typography } from "@mui/material";
import React from "react";
import CertCard from "../misc/CertCard";

const Certs = () => {
  return (
    <Box
      component="section"
      className="flex flex-col gap-4 justify-start items-start px-8 pb-4 md:px-32 md:pb-32"
    >
      <Typography
        variant="h4"
        className="w-max border-b-[3px] border-[#9A4F96] text-white"
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
      />
    </Box>
  );
};

export default Certs;
