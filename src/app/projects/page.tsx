import { CustomTabPanel } from "@/components/misc/CustomTabPanel";
import ProjectTabs from "@/components/misc/ProjectTabs";
import { Box, Typography } from "@mui/material";
import React from "react";

const page = ({ params }: { params: { tab: string } }) => {
  return (
    <Box
      component="section"
      className="flex flex-col gap-8 justify-start items-start px-8 py-4 md:px-32 md:py-10 md:min-h-[calc(100vh-56px)]"
    >
      <Typography
        variant="h4"
        className="w-max border-b-[3px] border-[#31B0E9] text-white"
      >
        Projects
      </Typography>
      <ProjectTabs />
    </Box>
  );
};

export default page;
