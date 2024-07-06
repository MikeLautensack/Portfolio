import HireMeForm from "@/components/misc/HIreMeForm";
import { Box, Typography } from "@mui/material";
import React from "react";

const page = () => {
  return (
    <Box
      component="section"
      className="flex flex-col gap-8 justify-start items-start px-8 py-4 md:px-32 md:py-10 bg-[#001824] md:h-[calc(100vh-56px)]"
    >
      <Typography
        variant="h4"
        className="w-max border-b-[3px] border-[#FF8D25] text-white"
        fontFamily="lato"
      >
        Hire Me
      </Typography>
      <Box component="div" className="flex justify-center items-center w-full">
        <HireMeForm />
      </Box>
    </Box>
  );
};

export default page;
