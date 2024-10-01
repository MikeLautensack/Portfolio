import { Box, Typography } from "@mui/material";
import React from "react";
import AllProjects from "../misc/AllProjects";

const Projects = () => {
  return (
    <Box
      component="section"
      className="flex flex-col gap-8 justify-start items-start px-8 pb-4 md:min-h-screen md:px-32 md:pb-32 bg-[#001824]"
    >
      <Typography
        variant="h4"
        className="w-max border-b-[3px] border-[#FF8D25] text-white"
      >
        Projects
      </Typography>
      <AllProjects />
    </Box>
  );
};

export default Projects;
