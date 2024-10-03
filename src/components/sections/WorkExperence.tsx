import { Box, Typography } from "@mui/material";
import React from "react";
import ExperenceItem from "../misc/ExperenceItem";

const WorkExperence = () => {
  return (
    <Box
      component="div"
      className="px-8 pb-4 md:px-32 md:pb-32 flex flex-col justify-start items-start gap-8"
    >
      <Typography
        variant="h4"
        className="w-max border-b-[3px] border-[#9A4F96] text-white"
      >
        Work Experence
      </Typography>
      <ExperenceItem
        num="01."
        job="React / Front End Development"
        company="@ Software Harmonics"
        date="Feb 2024 - Aug 2024"
      />
    </Box>
  );
};

export default WorkExperence;
