import { Box } from "@mui/material";
import React from "react";
import { type SanityDocument } from "next-sanity";
import ProjectCard from "@/components/misc/ProjectCard";

type TopThreeProjectsProps = {
  projects: SanityDocument[];
};

const TopThreeProjects = ({ projects }: TopThreeProjectsProps) => {
  return (
    <Box component="div" className="w-full flex flex-col gap-8">
      {projects.map((project) => (
        <ProjectCard key={project._id} project={project} />
      ))}
    </Box>
  );
};

export default TopThreeProjects;
