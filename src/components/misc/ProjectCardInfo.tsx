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
    <Box component="div" className="w-full">
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
      <Button variant="text" href={href}>
        <Typography variant="button" className="text-[#FF8D25]">
          Learn More!
        </Typography>
      </Button>
    </Box>
  );
};

export default ProjectCardInfo;
