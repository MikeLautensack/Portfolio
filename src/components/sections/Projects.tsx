import { Box, Typography } from "@mui/material";
import React from "react";
import ProjectCard from "../misc/ProjectCard";
import TopThreeProjects from "../misc/TopThreeProjects";

const Projects = () => {
  return (
    <Box
      component="section"
      className="flex flex-col gap-8 justify-start items-start px-8 py-4 md:min-h-screen md:px-32 md:py-20 bg-[#001824]"
    >
      <Typography
        variant="h4"
        className="w-max border-b-[3px] border-[#FF8D25] text-white"
      >
        Projects
      </Typography>
      <TopThreeProjects />
    </Box>
  );
};

export default Projects;
