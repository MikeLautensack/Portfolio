import React from "react";
import { projects } from "@/projectsData";
import ProjectCard from "./ProjectCard";

const getProject = (project: string) => {
  for (let i = 0; i < projects.length; i++) {
    if (projects[i].projectLabel === project) {
      return projects[i];
    }
  }
};

const MicroserviceProjects = () => {
  const proj = getProject("html-to-pdf");
  return (
    <div>
      <ProjectCard
        projectTitle={proj?.projectName}
        description={proj?.cardDescription}
        bulletPoints={proj?.bullets}
        href={proj?.href}
        imgSrc={proj?.imgSrc}
        imgAlt={proj?.imgAlt}
        contentOrder="textFirst"
      />
    </div>
  );
};

export default MicroserviceProjects;
