import React from "react";
import Link from "next/link";
import GitHubIcon from "@mui/icons-material/GitHub";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Hire Me", href: "/hire-me" },
];

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/MikeLautensack",
    icon: <GitHubIcon sx={{ fontSize: 20 }} />,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mike-lautensack/",
    icon: <FaLinkedin size={19} />,
  },
  {
    label: "Email",
    href: "mailto:mikelautensack100@gmail.com",
    icon: <MdEmail size={21} />,
  },
];

const Footer = () => {
  return (
    <footer className="border-t border-line bg-bg">
      <div className="mx-auto flex max-w-content flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:justify-between md:px-10">
        <div className="flex flex-col gap-1">
          <Link href="/" className="text-lg font-bold text-ink">
            Mike <span className="text-accent">Lautensack</span>
          </Link>
          <p className="text-sm text-ink-muted">
            Full-Stack Web Developer · TypeScript · React · Next.js
          </p>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-ink-muted transition-colors hover:text-accent"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {socials.map((social) => (
            <Link
              key={social.label}
              href={social.href}
              aria-label={social.label}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink-muted transition-colors hover:border-accent hover:text-accent"
            >
              {social.icon}
            </Link>
          ))}
        </div>
      </div>
      <div className="border-t border-line">
        <p className="mx-auto max-w-content px-6 py-5 text-center text-xs text-ink-faint md:px-10 md:text-left">
          © {new Date().getFullYear()} Mike Lautensack. Built with Next.js,
          TypeScript &amp; MUI.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
