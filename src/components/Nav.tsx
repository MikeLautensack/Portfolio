"use client";

import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import ProjectsNavMenu from "./misc/ProjectsNavMenu";
import { usePathname } from "next/navigation";

const Nav = () => {
  // Hooks
  const pathname = usePathname();

  return (
    <Box component="div" className="flex justify-center items-center gap-4">
      <Link href="/">
        <Button variant="text">
          <Typography
            variant="h6"
            className={`${pathname === "/" ? "text-[#31B0E9]" : "text-white"}`}
          >
            Home
          </Typography>
        </Button>
      </Link>
      <ProjectsNavMenu />
      <Link href="/hire-me">
        <Button variant="text">
          <Typography
            variant="h6"
            className={`${
              pathname === "/hire-me" ? "text-[#31B0E9]" : "text-white"
            }`}
          >
            Hire Me
          </Typography>
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
