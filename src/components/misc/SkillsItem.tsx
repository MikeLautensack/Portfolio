"use client";

import { Box, IconButton, Typography } from "@mui/material";
import React, { useMemo } from "react";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

type SkillsItemProps = {
  num: number;
  skill: string;
  description: string;
  href: string;
};

const SkillsItem = ({ num, skill, description, href }: SkillsItemProps) => {
  const skillNumber = useMemo(() => {
    return num.toString().padStart(2, "0");
  }, [num]);
  return (
    <Box
      component="div"
      className="flex flex-col md:flex-row md:items-center border-b-[3px] border-[#FF8D25] md:h-32 p-4 gap-4"
    >
      <Box component="div" className="flex gap-4 md:w-1/3">
        <Box component="div" className="flex justify-center items-center w-12">
          <Typography className="text-white" fontFamily="lato">
            {skillNumber}
          </Typography>
        </Box>
        <Box component="div" className="w-full">
          <Typography className="text-white" variant="h4" fontFamily="lato">
            {skill}
          </Typography>
        </Box>
      </Box>
      <Box component="div" className="flex gap-4">
        <Box component="div" className="flex-1">
          <Typography variant="body2" className="text-white" fontFamily="lato">
            {description}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default SkillsItem;
