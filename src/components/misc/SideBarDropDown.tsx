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
          <Link href={""}>
            <Button variant="text">Top Three!</Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default SideBarDropDown;
