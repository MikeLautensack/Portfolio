"use client";

import { Button, Typography } from "@mui/material";
import React, { useState } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Link from "next/link";

const SideBarDropDown = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div className="flex flex-col">
      <button className="flex px-0" onClick={() => setOpen(!open)}>
        <ArrowForwardIosIcon color="primary" />
        <Typography variant="button" color="primary">
          Projects
        </Typography>
      </button>
      {open && (
        <div className="">
          <Link href={"/projects?tab=top-three"}>
            <Button variant="text">Top Three!</Button>
          </Link>
          <Link href={"/projects?tab=full-stack-apps"}>
            <Button variant="text">Full Stack Apps</Button>
          </Link>
          <Link href={"/projects?tab=microservices"}>
            <Button variant="text">Microservice APIs</Button>
          </Link>
          <Link href={"/projects?tab=course-projects"}>
            <Button variant="text">Course Projects</Button>
          </Link>
          <Link href={"/projects?tab=all-projects"}>
            <Button variant="text">All Projects</Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default SideBarDropDown;
