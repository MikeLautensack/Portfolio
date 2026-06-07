import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@mui/material";
import { Stack } from "./ProjectSpecs";
import ProjectSpecs from "./ProjectSpecs";
import { BulletPointType } from "./ProjectCard";
import { FaArrowLeftLong } from "react-icons/fa6";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import ArticleIcon from "@mui/icons-material/Article";

type GalaryItem = { img: any; heading: string };

type ProjectTemplateProps = {
  projectLabel: string;
  projectName: string;
  projectType: string;
  imgSrc: string;
  imgAlt: string;
  prod: string;
  github: string;
  docs?: string;
  summary: string;
  description: string;
  loom?: any;
  galary?: GalaryItem[];
  bullets: BulletPointType[];
  stack: Stack;
};

const linkBtnSx = {
  borderColor: "rgba(255,255,255,0.18)",
  color: "#E7ECF2",
  "&:hover": {
    borderColor: "#31B0E9",
    backgroundColor: "rgba(49,176,233,0.08)",
  },
};

const ProjectTemplate = ({
  projectName,
  projectType,
  imgSrc,
  imgAlt,
  prod,
  github,
  docs,
  summary,
  description,
  bullets,
  stack,
}: ProjectTemplateProps) => {
  return (
    <article className="mx-auto flex w-full max-w-content flex-col gap-8 px-6 py-12 md:px-10 md:py-16">
      <Link
        href="/projects"
        className="inline-flex w-max items-center gap-2 text-sm text-ink-muted transition-colors hover:text-accent"
      >
        <FaArrowLeftLong /> Back to projects
      </Link>

      <header className="flex flex-col gap-3">
        <span className="font-mono text-xs uppercase tracking-[0.22em] text-accent">
          {projectType}
        </span>
        <h1 className="text-3xl font-extrabold tracking-tight text-ink md:text-5xl">
          {projectName}
        </h1>
      </header>

      <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-line bg-surface">
        {imgSrc && (
          <Image
            src={imgSrc}
            alt={imgAlt}
            fill
            sizes="(max-width: 1152px) 100vw, 1152px"
            className="object-cover"
          />
        )}
      </div>

      <div className="flex flex-wrap gap-3">
        {prod && (
          <Link href={prod} target="_blank" rel="noopener noreferrer">
            <Button
              variant="contained"
              color="primary"
              startIcon={<OpenInNewIcon />}
            >
              Live Site
            </Button>
          </Link>
        )}
        {github && (
          <Link href={github} target="_blank" rel="noopener noreferrer">
            <Button variant="outlined" startIcon={<GitHubIcon />} sx={linkBtnSx}>
              GitHub
            </Button>
          </Link>
        )}
        {docs && (
          <Link href={docs} target="_blank" rel="noopener noreferrer">
            <Button
              variant="outlined"
              startIcon={<ArticleIcon />}
              sx={linkBtnSx}
            >
              Documentation
            </Button>
          </Link>
        )}
      </div>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
        <div className="flex flex-col gap-5 lg:col-span-8">
          <h2 className="text-xl font-bold text-ink">Overview</h2>
          <p className="leading-relaxed text-ink-muted">{summary}</p>
          {description && (
            <p className="leading-relaxed text-ink-muted">{description}</p>
          )}
          <div className="flex flex-wrap gap-2 pt-2">
            {bullets.map((bullet) => (
              <span
                key={bullet.id}
                className="rounded-full border border-line bg-surface/60 px-3 py-1 font-mono text-xs text-ink-muted"
              >
                {bullet.text.replace(/^•\s*/, "")}
              </span>
            ))}
          </div>
        </div>

        <aside className="lg:col-span-4">
          <div className="rounded-2xl border border-line bg-surface p-6">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-ink-faint">
              Tech Stack
            </span>
            <div className="mt-4">
              <ProjectSpecs stack={stack} />
            </div>
          </div>
        </aside>
      </div>
    </article>
  );
};

export default ProjectTemplate;
