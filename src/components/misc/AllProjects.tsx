import React from "react";
import { projects } from "@/projectsData";
import ProjectCard from "./ProjectCard";

const AllProjects = () => {
  return (
    <div className="flex flex-col gap-4 justify-start items-start w-full">
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          projectTitle={project?.projectName}
          description={project?.cardDescription}
          bulletPoints={project?.bullets}
          href={project?.href}
          imgSrc={project?.imgSrc}
          imgAlt={project?.imgAlt}
          contentOrder="textFirst"
        />
      ))}
    </div>
  );
};

export default AllProjects;
