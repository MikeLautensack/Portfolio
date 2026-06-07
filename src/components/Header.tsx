import React from "react";
import Link from "next/link";
import GitHubIcon from "@mui/icons-material/GitHub";
import { FaLinkedin } from "react-icons/fa";
import Nav from "./Nav";
import SideBar from "./misc/SideBar";

const socialBtn =
  "flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink-muted transition-colors hover:border-accent hover:text-accent";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-line bg-bg/70 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-content items-center justify-between px-6 md:px-10">
        <Link
          href="/"
          className="text-base font-bold tracking-tight text-ink md:text-lg"
        >
          Mike <span className="text-accent">Lautensack</span>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          <Nav />
          <div className="flex items-center gap-2">
            <Link
              href="https://github.com/MikeLautensack"
              aria-label="GitHub"
              className={socialBtn}
            >
              <GitHubIcon sx={{ fontSize: 18 }} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/mike-lautensack/"
              aria-label="LinkedIn"
              className={socialBtn}
            >
              <FaLinkedin size={17} />
            </Link>
          </div>
        </div>

        <div className="lg:hidden">
          <SideBar />
        </div>
      </div>
    </header>
  );
};

export default Header;
