import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

export type BulletPointType = { id: number; text: string };

type ProjectCardProps = {
  projectTitle?: string;
  description?: string;
  bulletPoints?: BulletPointType[];
  href?: string;
  imgSrc?: string;
  imgAlt?: string;
  contentOrder?: "textFirst" | "imgFirst";
};

const ProjectCard = ({
  projectTitle,
  description,
  bulletPoints = [],
  href = "#",
  imgSrc,
  imgAlt,
}: ProjectCardProps) => {
  return (
    <Link
      href={href}
      className="group block w-full overflow-hidden rounded-2xl border border-line bg-surface/60 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:bg-surface hover:shadow-[0_18px_50px_-20px_rgba(49,176,233,0.35)]"
    >
      <div className="flex flex-col sm:flex-row">
        <div className="relative aspect-video w-full overflow-hidden sm:aspect-auto sm:w-[42%]">
          {imgSrc && (
            <Image
              src={imgSrc}
              alt={imgAlt ?? projectTitle ?? "Project"}
              fill
              sizes="(max-width: 640px) 100vw, 42vw"
              className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-surface/50 to-transparent sm:bg-gradient-to-r" />
        </div>

        <div className="flex flex-1 flex-col gap-4 p-6 md:p-7">
          <h3 className="text-xl font-bold tracking-tight text-ink md:text-2xl">
            {projectTitle}
          </h3>
          <p className="text-sm leading-relaxed text-ink-muted">{description}</p>

          <div className="mt-auto flex flex-wrap gap-2 pt-2">
            {bulletPoints.map((bullet) => (
              <span
                key={bullet.id}
                className="rounded-full border border-line bg-bg/40 px-3 py-1 font-mono text-xs text-ink-muted"
              >
                {bullet.text.replace(/^•\s*/, "")}
              </span>
            ))}
          </div>

          <span className="inline-flex items-center gap-2 pt-2 text-sm font-semibold text-accent">
            View project
            <FaArrowRightLong className="transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
