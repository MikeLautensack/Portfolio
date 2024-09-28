import { Box } from "@mui/material";
import React from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "@/projectsData";

const getProject = (project: string) => {
  for (let i = 0; i < projects.length; i++) {
    if (projects[i].projectLabel === project) {
      return projects[i];
    }
  }
};

const FullstackApps = () => {
  const chatapp = getProject("simple-chat");
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
      <ProjectCard
        projectTitle={chatapp?.projectName}
        description={chatapp?.cardDescription}
        bulletPoints={chatapp?.bullets}
        href={chatapp?.href}
        imgSrc={chatapp?.imgSrc}
        imgAlt={chatapp?.imgAlt}
        contentOrder="textFirst"
      />
    </Box>
  );
};

export default FullstackApps;
