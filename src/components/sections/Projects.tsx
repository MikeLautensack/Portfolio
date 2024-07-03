import { Box, Typography } from "@mui/material";
import React from "react";
import ProjectCard from "../misc/ProjectCard";

const Projects = () => {
  return (
    <Box
      component="section"
      className="flex flex-col gap-8 justify-start items-start px-8 py-4 md:min-h-screen md:px-32 md:py-20 bg-[#001824]"
    >
      <Typography
        variant="h4"
        className="w-max border-b-[3px] border-[#FF8D25] text-white"
        fontFamily="lato"
      >
        Projects
      </Typography>
      <ProjectCard
        projectTitle="Estimate Generator"
        bulletPoints={[
          { id: 1, text: "• Next.js / React.js" },
          { id: 2, text: "• Auth.js" },
          { id: 3, text: "• Vercel Serverless" },
          { id: 4, text: "• Drizzle ORM + Neon Serverless PostgreSQL" },
        ]}
        href=""
        imgSrc="/estimate-generator-img.png"
        imgAlt="Estimate Generator Hero Section"
        contentOrder="textFirst"
      />
    </Box>
  );
};

export default Projects;
