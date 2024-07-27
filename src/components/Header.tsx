import { Box, Typography } from "@mui/material";
import React from "react";
import Nav from "./Nav";

const Header = () => {
  return (
    <Box
      component="header"
      className="w-full h-14 flex justify-center items-center bg-[#001824] sticky top-0 z-20"
    >
      <Box component="div" className="absolute left-0 lg:ml-32 flex gap-2">
        <Typography variant="h5" color="#FF8D25">
          Mike
        </Typography>
        <Typography variant="h5">Lautensack</Typography>
      </Box>
      <Nav />
    </Box>
  );
};

export default Header;
