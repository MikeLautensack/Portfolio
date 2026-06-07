"use client";

import Link from "next/link";
import React from "react";
import ProjectsNavMenu from "./misc/ProjectsNavMenu";
import { usePathname } from "next/navigation";

const Nav = () => {
  const pathname = usePathname();

  const linkClass = (href: string) =>
    `text-sm font-medium transition-colors ${
      pathname === href ? "text-accent" : "text-ink-muted hover:text-ink"
    }`;

  return (
    <nav className="flex items-center gap-7">
      <Link href="/" className={linkClass("/")}>
        Home
      </Link>
      <ProjectsNavMenu />
      <Link href="/hire-me" className={linkClass("/hire-me")}>
        Hire Me
      </Link>
    </nav>
  );
};

export default Nav;
