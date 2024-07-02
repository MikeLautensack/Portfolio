"use client";

import { Box, Button } from "@mui/material";
import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <Box
      component="div"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "1rem",
      }}
    >
      <Link href="/">
        <Button variant="text" sx={{ color: "#FFFFFF" }}>
          Home
        </Button>
      </Link>
    </Box>
  );
};

export default Nav;
