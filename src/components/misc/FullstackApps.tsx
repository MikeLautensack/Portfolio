import { Box } from "@mui/material";
import React from "react";
import ProjectCard from "./ProjectCard";
import { type SanityDocument } from "next-sanity";

type FullstackAppsProps = {
  projects: SanityDocument[];
};

const FullstackApps = ({ projects }: FullstackAppsProps) => {
  return (
    <Box component="div" className="w-full flex flex-col gap-8">
      {projects.map((project) => (
        <ProjectCard key={project._id} project={project} />
      ))}
    </Box>
  );
};

export default FullstackApps;
