"use client";

import * as React from "react";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { SimpleTreeView } from "@mui/x-tree-view/SimpleTreeView";
import Link from "next/link";
import { TreeItem } from "@mui/x-tree-view/TreeItem";
import SideBarDropDown from "./SideBarDropDown";

export default function SideBar() {
  const [state, setState] = useState(false);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState(!state);
    };

  return (
    <div>
      <Button onClick={toggleDrawer(true)} aria-label="Open menu">
        <MenuIcon className="text-ink" />
      </Button>
      <Drawer
        anchor={"right"}
        open={state}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            backgroundColor: "#0A0E12",
            backgroundImage: "none",
            borderLeft: "1px solid rgba(255,255,255,0.08)",
          },
        }}
      >
        <div className="flex h-full w-64 flex-col items-start gap-1 p-6">
          <span className="mb-5 text-lg font-bold text-ink">
            Mike <span className="text-accent">Lautensack</span>
          </span>
          <Link href={"/"}>
            <Button variant="text" sx={{ color: "#E7ECF2" }}>
              Home
            </Button>
          </Link>
          <SideBarDropDown />
          <Link href={"/hire-me"}>
            <Button variant="text" sx={{ color: "#E7ECF2" }}>
              Hire Me
            </Button>
          </Link>
        </div>
      </Drawer>
    </div>
  );
}
