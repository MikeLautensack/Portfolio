import { Box, Typography } from "@mui/material";
import React from "react";
import ExperenceItem from "../misc/ExperenceItem";

const WorkExperence = () => {
  return (
    <Box
      component="div"
      className="bg-[#001824] md:h-screen px-8 py-4 md:px-32 md:py-20 flex flex-col justify-start items-start gap-8"
    >
      <Typography
        variant="h4"
        className="w-max border-b-[3px] border-[#FF8D25] text-white"
        fontFamily="lato"
      >
        Work Experence
      </Typography>
      <ExperenceItem
        num="01."
        job="React / Front End Development"
        company="@ Software Harmonics"
        date="Feb 2024 - Present"
      />
    </Box>
  );
};

export default WorkExperence;
