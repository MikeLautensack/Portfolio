"use client";

import * as React from "react";
import { styled } from "@mui/material/styles";
import Menu, { MenuProps } from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Link from "next/link";
import { usePathname } from "next/navigation";

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
    transformOrigin={{ vertical: "top", horizontal: "left" }}
    {...props}
  />
))(() => ({
  "& .MuiPaper-root": {
    borderRadius: 12,
    marginTop: 10,
    minWidth: 200,
    backgroundColor: "#111823",
    backgroundImage: "none",
    border: "1px solid rgba(255,255,255,0.08)",
    boxShadow: "0 18px 50px -20px rgba(0,0,0,0.6)",
    "& .MuiMenu-list": { padding: "6px" },
    "& .MuiMenuItem-root": {
      borderRadius: 8,
      fontSize: "0.875rem",
      color: "#9BA8B5",
      "&:hover": {
        backgroundColor: "rgba(49,176,233,0.10)",
        color: "#31B0E9",
      },
    },
  },
}));

const links = [
  { label: "All Projects", tab: "all-projects" },
  { label: "Full-Stack Apps", tab: "full-stack-apps" },
  { label: "Microservices", tab: "microservices" },
  { label: "Course Projects", tab: "course-projects" },
];

export default function ProjectsNavMenu() {
  const pathname = usePathname();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const isProjectsRoute = /^\/projects/.test(pathname);

  return (
    <div>
      <button
        type="button"
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={(e) => setAnchorEl(e.currentTarget)}
        className={`flex items-center gap-1 text-sm font-medium transition-colors ${
          isProjectsRoute ? "text-accent" : "text-ink-muted hover:text-ink"
        }`}
      >
        Projects
        <KeyboardArrowDownIcon sx={{ fontSize: 18 }} />
      </button>
      <StyledMenu
        anchorEl={anchorEl}
        open={open}
        onClose={() => setAnchorEl(null)}
      >
        {links.map((link) => (
          <Link key={link.tab} href={`/projects?tab=${link.tab}`}>
            <MenuItem onClick={() => setAnchorEl(null)} disableRipple>
              {link.label}
            </MenuItem>
          </Link>
        ))}
      </StyledMenu>
    </div>
  );
}
