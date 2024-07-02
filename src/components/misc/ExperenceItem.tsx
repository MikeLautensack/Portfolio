import { Box, List, Typography, ListItem } from "@mui/material";
import React from "react";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

type ExperenceItemProps = {
  num: string;
  job: string;
  company: string;
  date: string;
};

const ExperenceItem = ({ num, job, company, date }: ExperenceItemProps) => {
  return (
    <Box
      component="div"
      className="flex flex-col gap-2 justify-start items-start border-b-[3px] border-[#FF8D25]"
    >
      <Box component="div" className="flex gap-2">
        <Typography className="text-[#FF8D25]">{num}</Typography>
        <Typography className="text-white">{job}</Typography>
        <Typography className="text-[#FF8D25]">{company}</Typography>
      </Box>
      <Typography variant="body2" className="text-white">
        {date}
      </Typography>
      <List>
        <ListItem>
          <NavigateNextIcon className="text-white" />
          <Typography variant="body2" className="text-white">
            Upgraded the application from create-react-app, React 16, and
            JavaScript to Vite, React 18, and TypeScript, significantly reducing
            the dev server start time from 8-10 minutes to 3-4 seconds.
          </Typography>
        </ListItem>
        <ListItem>
          <NavigateNextIcon className="text-white" />
          <Typography variant="body2" className="text-white">
            Developed a comprehensive React component library for the company
            and authored detailed documentation to facilitate its usage and
            integration.
          </Typography>
        </ListItem>
        <ListItem>
          <NavigateNextIcon className="text-white" />
          <Typography variant="body2" className="text-white">
            {`
            Created a VS Code snippets extension tailored to the company's
            development needs, enhancing coding efficiency and consistency.`}
          </Typography>
        </ListItem>
        <ListItem>
          <NavigateNextIcon className="text-white" />
          <Typography variant="body2" className="text-white">
            Wrote extensive documentation on React and TypeScript best
            practices, providing valuable guidelines and improving code quality
            across the project.
          </Typography>
        </ListItem>
      </List>
    </Box>
  );
};

export default ExperenceItem;
