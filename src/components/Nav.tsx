"use client";

import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";
import React, { useEffect, useState } from "react";
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
            variant="button"
            className={`${pathname === "/" ? "text-[#FF8D25]" : "text-white"}`}
          >
            Home
          </Typography>
        </Button>
      </Link>
      <ProjectsNavMenu />
      <Link href="/hire-me">
        <Button variant="text">
          <Typography
            variant="button"
            className={`${
              pathname === "/hire-me" ? "text-[#FF8D25]" : "text-white"
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
