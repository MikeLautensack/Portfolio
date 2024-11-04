import React from "react";
import ProjectCard from "./ProjectCard";
import { type SanityDocument } from "next-sanity";

type MicroserviceProjectsProps = {
  projects: SanityDocument[];
};

const MicroserviceProjects = ({ projects }: MicroserviceProjectsProps) => {
  return (
    <div>
      {projects.map((project) => (
        <ProjectCard key={project._id} project={project} />
      ))}
    </div>
  );
};

export default MicroserviceProjects;
