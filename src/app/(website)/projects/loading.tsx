import { Box, CircularProgress } from "@mui/material";
import React from "react";

const loading = () => {
  return (
    <Box
      component="div"
      className="w-full flex justify-center items-center h-[calc(100vh-56px)]"
    >
      <CircularProgress />
    </Box>
  );
};

export default loading;
