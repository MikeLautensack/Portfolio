import { Box, Typography } from "@mui/material";
import React from "react";
import AllProjects from "../misc/AllProjects";

const Projects = () => {
  return (
    <Box
      component="section"
      className="flex flex-col gap-8 justify-start items-center px-6 py-16 md:px-10"
    >
      <div className="w-full max-w-6xl flex flex-col gap-8">
        <Typography
          variant="h4"
          className="w-max border-b-[3px] border-[#31B0E9] text-white"
        >
          Projects
        </Typography>
        <AllProjects />
      </div>
    </Box>
  );
};

export default Projects;
