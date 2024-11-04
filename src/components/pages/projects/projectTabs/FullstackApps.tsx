import { Box } from "@mui/material";
import React from "react";
import { type SanityDocument } from "next-sanity";
import ProjectCard from "../project/ProjectCard";

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
