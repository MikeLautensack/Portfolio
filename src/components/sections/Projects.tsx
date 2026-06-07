import { Box } from "@mui/material";
import React from "react";
import AllProjects from "../misc/AllProjects";
import SectionHeading from "../misc/SectionHeading";

const Projects = () => {
  return (
    <Box
      component="section"
      id="projects"
      className="mx-auto w-full max-w-content px-6 py-20 md:px-10 md:py-28"
    >
      <div className="flex flex-col gap-10">
        <SectionHeading eyebrow="Work" title="Featured Projects" />
        <AllProjects />
      </div>
    </Box>
  );
};

export default Projects;
