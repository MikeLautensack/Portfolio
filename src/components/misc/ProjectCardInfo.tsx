import { Box, Button, List, ListItem, Typography } from "@mui/material";
import React from "react";
import { bulletPoint } from "./ProjectCard";

type ProjectCardInfoProps = {
  projectTitle: string;
  bulletPoints: bulletPoint[];
  href: string;
};

const ProjectCardInfo = ({
  projectTitle,
  bulletPoints,
  href,
}: ProjectCardInfoProps) => {
  return (
    <Box component="div" className="w-full">
      <Typography variant="h4" className="text-white" fontFamily="lato">
        {projectTitle}
      </Typography>
      <List>
        {bulletPoints.map((bullet: bulletPoint) => {
          return (
            <ListItem key={bullet.id}>
              <Typography
                variant="body2"
                className="text-white"
                fontFamily="lato"
              >
                {bullet.text}
              </Typography>
            </ListItem>
          );
        })}
      </List>
      <Button variant="text" href={href}>
        <Typography variant="h6" className="text-[#FF8D25]" fontFamily="lato">
          Learn More!
        </Typography>
      </Button>
    </Box>
  );
};

export default ProjectCardInfo;
