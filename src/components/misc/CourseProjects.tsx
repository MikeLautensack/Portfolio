import { Box } from "@mui/material";
import React from "react";
import ProjectCard from "./ProjectCard";
import { type SanityDocument } from "next-sanity";

type CourseProjectsProps = {
  projects: SanityDocument[];
};

const CourseProjects = ({ projects }: CourseProjectsProps) => {
  return (
    <Box
      component="div"
      className="flex flex-col gap-4 justify-start items-starts"
    >
      {projects.map((project) => (
        <ProjectCard key={project._id} project={project} />
      ))}
    </Box>
  );
};

export default CourseProjects;
