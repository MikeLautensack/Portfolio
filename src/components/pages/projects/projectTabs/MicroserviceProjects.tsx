import React from "react";
import { type SanityDocument } from "next-sanity";
import ProjectCard from "@/components/misc/ProjectCard";

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
