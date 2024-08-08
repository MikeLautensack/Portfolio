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
    <Card
      component="div"
      className="w-full flex p-4 rounded-sm"
      sx={{ backgroundColor: "#0b2a39" }}
    >
      {contentOrder === "textFirst" ? (
        <Box
          component="div"
          className="flex flex-col md:flex-row justify-center items-center gap-4 w-full"
        >
          <ProjectCardInfo
            projectTitle={projectTitle}
            description={description}
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
    </Card>
  );
};

export default ProjectCard;
