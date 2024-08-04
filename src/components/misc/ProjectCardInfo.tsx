import { Box, Button, List, ListItem, Typography } from "@mui/material";
import React from "react";
import { BulletPointType } from "./ProjectCard";

type ProjectCardInfoProps = {
  projectTitle?: string;
  bulletPoints: BulletPointType[];
  href?: string;
};

const ProjectCardInfo = ({
  projectTitle,
  bulletPoints,
  href,
}: ProjectCardInfoProps) => {
  return (
    <Box
      component="div"
      className="flex flex-col gap-4 justify-between items-start w-full h-full"
    >
      <div className="flex flex-col gap-4 justify-start items-start">
        <Typography variant="h4" className="text-white">
          {projectTitle}
        </Typography>
        <List>
          {bulletPoints.map((bullet: BulletPointType) => {
            return (
              <ListItem key={bullet.id}>
                <Typography variant="body2" className="text-white">
                  {bullet.text}
                </Typography>
              </ListItem>
            );
          })}
        </List>
      </div>
      <Button variant="text" href={href}>
        <Typography variant="button" className="text-[#FF8D25]">
          Learn More!
        </Typography>
      </Button>
    </Box>
  );
};

export default ProjectCardInfo;
