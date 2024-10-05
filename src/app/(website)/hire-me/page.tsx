import HireMeEmailForm from "@/components/misc/HireMeEmailForm";
import { Box, Typography } from "@mui/material";
import React from "react";

const page = () => {
  return (
    <Box
      component="section"
      className="min-h-screen flex flex-col gap-8 justify-start items-start px-8 py-4 md:px-32 md:py-10 md:h-[calc(100vh-56px)]"
    >
      <Typography
        variant="h4"
        className="w-max border-b-[3px] border-[#31B0E9] text-white"
      >
        Hire Me
      </Typography>
      <Box component="div" className="flex justify-center items-center w-full">
        <HireMeEmailForm />
      </Box>
    </Box>
  );
};

export default page;
