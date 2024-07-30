import { Box, Button, Card, List, ListItem, Typography } from "@mui/material";
import React from "react";
import ProjectCardImg from "./ProjectCardImg";
import ProjectCardInfo from "./ProjectCardInfo";

export type BulletPointType = { id: number; text: string };

type ProjectCardProps = {
  projectTitle?: string;
  bulletPoints?: BulletPointType[];
  href?: string;
  imgSrc?: string;
  imgAlt?: string;
  contentOrder: "textFirst" | "imgFirst";
};

const ProjectCard = ({
  projectTitle,
  bulletPoints = [],
  href,
  imgSrc,
  imgAlt,
  contentOrder,
}: ProjectCardProps) => {
  return (
    <Box component="div" className="bg-[#0b2a39] w-full flex p-4 rounded-sm">
      {contentOrder === "textFirst" ? (
        <Box
          component="div"
          className="flex flex-col md:flex-row justify-center items-center gap-4 w-full"
        >
          <ProjectCardInfo
            projectTitle={projectTitle}
            bulletPoints={bulletPoints}
            href={href}
          />
          <ProjectCardImg imgSrc={imgSrc} imgAlt={imgAlt} />
        </Box>
      ) : (
        <Box
          component="div"
          className="flex flex-col md:flex-row justify-center items-center gap-4 w-full"
        >
          <ProjectCardImg imgSrc={imgSrc} imgAlt={imgAlt} />
          <ProjectCardInfo
            projectTitle={projectTitle}
            bulletPoints={bulletPoints}
            href={href}
          />
        </Box>
      )}
    </Box>
  );
};

export default ProjectCard;
