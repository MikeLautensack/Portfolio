"use client";

import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import ProjectsNavMenu from "./misc/ProjectsNavMenu";

const Nav = () => {
  return (
    <Box component="div" className="flex justify-center items-center gap-4">
      <Link href="/">
        <Button variant="text" className="text-white">
          Home
        </Button>
      </Link>
      <ProjectsNavMenu />
      <Link href="/hire-me">
        <Button variant="text" className="text-white">
          Hire Me
        </Button>
      </Link>
      {/* <Link href="/resume">
        <Button variant="text" className="text-white">
          Resume
        </Button>
      </Link> */}
    </Box>
  );
};

export default Nav;
