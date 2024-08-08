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

const TopThreeProjects = () => {
  const one = getProject("estimate-generator");
  const two = getProject("galaxy-generator");
  const three = getProject("raging-sea");
  return (
    <Box component="div" className="w-full flex flex-col gap-8">
      <ProjectCard
        projectTitle={one?.projectName}
        description={one?.cardDescription}
        bulletPoints={one?.bullets}
        href={one?.href}
        imgSrc={one?.imgSrc}
        imgAlt={one?.imgAlt}
        contentOrder="textFirst"
      />
      <ProjectCard
        projectTitle={two?.projectName}
        description={two?.cardDescription}
        bulletPoints={two?.bullets}
        href={two?.href}
        imgSrc={two?.imgSrc}
        imgAlt={two?.imgAlt}
        contentOrder="textFirst"
      />
      <ProjectCard
        projectTitle={three?.projectName}
        description={three?.cardDescription}
        bulletPoints={three?.bullets}
        href={three?.href}
        imgSrc={three?.imgSrc}
        imgAlt={three?.imgAlt}
        contentOrder="textFirst"
      />
    </Box>
  );
};

export default TopThreeProjects;
