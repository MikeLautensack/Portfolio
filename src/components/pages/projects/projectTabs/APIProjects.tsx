import React from "react";
import { type SanityDocument } from "next-sanity";
import ProjectCard from "@/components/misc/ProjectCard";

type APIProjectsProps = {
  projects: SanityDocument[];
};

const APIProjects = ({ projects }: APIProjectsProps) => {
  return (
    <div className="w-full flex flex-col gap-8">
      {projects.map((project) => (
        <ProjectCard key={project._id} project={project} />
      ))}
    </div>
  );
};

export default APIProjects;
