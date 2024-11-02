import { Box, Button, List, ListItem, Typography } from "@mui/material";
import React from "react";
import { BulletPointType } from "./ProjectCard";

type ProjectCardInfoProps = {
  projectTitle?: string;
  description?: string;
  bulletPoints: BulletPointType[];
  href?: string;
};

const ProjectCardInfo = ({
  projectTitle,
  description,
  bulletPoints,
  href,
}: ProjectCardInfoProps) => {
  return (
    <Box
      component="div"
      className="flex flex-col gap-4 justify-between items-start h-full w-full flex-grow"
    >
      <div className="flex flex-col justify-start items-start">
        <Typography variant="h4" className="text-white">
          {projectTitle}
        </Typography>
        <Typography variant="body1" className="text-white">
          {description}
        </Typography>
        <List dense>
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
      <Button variant="contained" color="secondary" href={href}>
        <Typography variant="button" color="white">
          Learn More!
        </Typography>
      </Button>
    </Box>
  );
};

export default ProjectCardInfo;
