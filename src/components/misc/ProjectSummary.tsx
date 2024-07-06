import { Box, Button, Typography } from "@mui/material";
import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInBrowserIcon from "@mui/icons-material/OpenInBrowser";
import ArticleIcon from "@mui/icons-material/Article";
import Link from "next/link";

type ProjectSummaryProps = {
  summary: string;
  description: string;
  prod: string;
  github: string;
  docs?: string;
};

const ProjectSummary = ({
  summary,
  description,
  prod,
  github,
  docs,
}: ProjectSummaryProps) => {
  return (
    <Box
      component="div"
      className="flex flex-col gap-4 justify-start items-start"
    >
      <Typography variant="body1" className="text-white">
        {summary}
      </Typography>
      <Typography variant="body1" className="text-white">
        {description}
      </Typography>
      <Box component="div" className="flex justify-start items-start gap-4">
        <Link href={prod} className="flex justify-center items-center gap-2">
          <Button
            variant="text"
            className="flex gap-1 justify-center items-center"
          >
            <OpenInBrowserIcon className="text-[#FF8D25]" />
            <Typography variant="body1" className="text-[#FF8D25]">
              Live Link
            </Typography>
          </Button>
        </Link>
        <Link href={github} className="flex justify-center items-center gap-2">
          <Button
            variant="text"
            className="flex gap-1 justify-center items-center"
          >
            <GitHubIcon className="text-[#FF8D25]" />
            <Typography variant="body1" className="text-[#FF8D25]">
              Github
            </Typography>
          </Button>
        </Link>
        {docs && (
          <Link href={docs} className="flex justify-center items-center gap-2">
            <Button
              variant="text"
              className="flex gap-1 justify-center items-center"
            >
              <ArticleIcon className="text-[#FF8D25]" />
              <Typography variant="body1" className="text-[#FF8D25]">
                Project Documentation
              </Typography>
            </Button>
          </Link>
        )}
      </Box>
    </Box>
  );
};

export default ProjectSummary;
