import { Box, List, Typography, ListItem } from "@mui/material";
import React from "react";

type ExperienceItemProps = {
  num: string;
  job: string;
  company: string;
  date: string;
};

const ExperienceItem = ({ num, job, company, date }: ExperienceItemProps) => {
  return (
    <div className="flex flex-col gap-4">
      <Box className="flex justify-between">
        <div className="flex gap-2">
          <Typography className="text-[#31B0E9] text-sm md:text-base">
            {num}
          </Typography>
          <Typography className="text-white text-sm md:text-base">
            {job}
          </Typography>
          <Typography className="text-[#31B0E9] text-sm md:text-base">
            {company}
          </Typography>
        </div>
        <Typography className="text-white text-sm md:text-base">
          {date}
        </Typography>
      </Box>
      <List className="pl-4">
        <ListItem>
          <Typography className="text-white text-sm">
            • Upgraded the application from create-react-app, React 16, and
            JavaScript to Vite, React 18, and Typescript, significantly reducing
            the dev server start time from 8-10 minutes to 3-4 seconds.
          </Typography>
        </ListItem>
        <ListItem>
          <Typography className="text-white text-sm">
            • Developed a comprehensive React component library for the company
            and authored detailed documentation to facilitate its usage and
            integration.
          </Typography>
        </ListItem>
        <ListItem>
          <Typography className="text-white text-sm">
            {`• Created a VS Code snippets extension tailored to the company's
            development needs, enhancing coding efficiency and consistency.`}
          </Typography>
        </ListItem>
        <ListItem>
          <Typography className="text-white text-sm">
            • Wrote extensive documentation on React and Typescript best
            practices, providing valuable guidelines and improving code quality
            across the project.
          </Typography>
        </ListItem>
      </List>
    </div>
  );
};

export default ExperienceItem;
