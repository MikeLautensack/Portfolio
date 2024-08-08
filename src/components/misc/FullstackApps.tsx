import { Box } from "@mui/material";
import React from "react";
import ProjectCard from "./ProjectCard";

const FullstackApps = () => {
  return (
    <Box component="div" className="w-full flex flex-col gap-8">
      <ProjectCard
        projectTitle="Estimate Generator"
        // description={proj?.description}
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

export default FullstackApps;
