import { Box, Button, Card, List, ListItem, Typography } from "@mui/material";
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
    <div className="w-full flex bg-[#1b2b5e]">
      {contentOrder === "textFirst" ? (
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 w-full">
          <ProjectCardInfo
            projectTitle={projectTitle}
            description={description}
            bulletPoints={bulletPoints}
            href={href}
          />
          <ProjectCardImg imgSrc={imgSrc} imgAlt={imgAlt} />
        </div>
      ) : (
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 w-full">
          <ProjectCardImg imgSrc={imgSrc} imgAlt={imgAlt} />
          <ProjectCardInfo
            projectTitle={projectTitle}
            bulletPoints={bulletPoints}
            href={href}
          />
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
