import { Box } from "@mui/material";
import React from "react";
import Nav from "./Nav";

const Header = () => {
  return (
    <Box
      component="header"
      className="w-full h-14 flex justify-center items-center bg-[#001824]"
    >
      <Nav />
    </Box>
  );
};

export default Header;
