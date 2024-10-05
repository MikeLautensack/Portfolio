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
      <Button onClick={toggleDrawer(true)}>
        <MenuIcon className="text-white" />
      </Button>
      <Drawer anchor={"right"} open={state} onClose={toggleDrawer(false)}>
        <div className="w-52 h-full p-4 flex flex-col justify-start items-start bg-slate-500">
          <Link href={"/"}>
            <Button variant="text">Home</Button>
          </Link>
          <SideBarDropDown />
          <Link href={"hire-me"}>
            <Button variant="text">Hire Me</Button>
          </Link>
        </div>
      </Drawer>
    </div>
  );
}
