import React from "react";
import ProjectCardImg from "./ProjectCardImg";
import ProjectCardInfo from "./ProjectCardInfo";
import { type SanityDocument } from "next-sanity";
import { urlFor } from "@/sanity/lib/image";

export type BulletPointType = { id: number; text: string };

type ProjectCardProps = {
  project: SanityDocument;
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="w-full h-full flex gap-4 flex-col-reverse sm:flex-row justify-start items-start bg-[#1b2b5e] border-b border-[#31B0E9] pb-4">
      <ProjectCardInfo
        projectTitle={project.projectName}
        description={project.projectSummary}
        href={`/projects/${project.pathVar}`}
      />
      <ProjectCardImg
        imgSrc={urlFor(project.projectImg).url()}
        imgAlt={project.projectName}
      />
    </div>
  );
};

export default ProjectCard;
