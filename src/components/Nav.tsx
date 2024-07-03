"use client";

import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <Box component="div" className="flex justify-center items-center gap-4">
      <Link href="/">
        <Button variant="text" className="text-white">
          <Typography
            variant="h6"
            className="text-white normal-case"
            fontFamily="lato"
          >
            Home
          </Typography>
        </Button>
      </Link>
    </Box>
  );
};

export default Nav;
