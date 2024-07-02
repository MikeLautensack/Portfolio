import { Box } from "@mui/material";
import React from "react";
import Nav from "./Nav";

const Header = () => {
  return (
    <Box
      component="header"
      sx={{
        width: "100%",
        height: "64px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#001824",
      }}
    >
      <Nav />
    </Box>
  );
};

export default Header;
