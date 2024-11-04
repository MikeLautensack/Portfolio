import { Box } from "@mui/material";
import React from "react";
import { type SanityDocument } from "next-sanity";
import ProjectCard from "@/components/misc/ProjectCard";

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
