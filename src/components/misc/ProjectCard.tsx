import React from "react";
import ProjectCardImg from "./ProjectCardImg";
import ProjectCardInfo from "./ProjectCardInfo";

export type BulletPointType = { id: number; text: string };

type ProjectCardProps = {
  projectTitle?: string;
  description?: string;
  bulletPoints?: BulletPointType[];
  href?: string;
  imgSrc?: string;
  imgAlt?: string;
  contentOrder: "textFirst" | "imgFirst";
};

const ProjectCard = ({
  projectTitle,
  description,
  bulletPoints = [],
  href,
  imgSrc,
  imgAlt,
  contentOrder,
}: ProjectCardProps) => {
  return (
    <div className="w-full flex gap-4 flex-col-reverse sm:flex-row justify-start items-start border-b border-[#31B0E9] pb-4">
      <ProjectCardInfo
        projectTitle={projectTitle}
        description={description}
        bulletPoints={bulletPoints}
        href={href}
      />
      <ProjectCardImg imgSrc={imgSrc} imgAlt={imgAlt} />
    </div>
  );
};

export default ProjectCard;
