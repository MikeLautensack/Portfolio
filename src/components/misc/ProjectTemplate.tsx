import { Box, Typography } from "@mui/material";
import React from "react";
import ProjectHeaderCard from "./ProjectHeaderCard";
import ProjectSummaryTabs from "./ProjectSummaryTabs";

type GalaryItem = {
  img: any;
  heading: string;
};

type ProjectTemplateProps = {
  projectLabel: string;
  projectName: string;
  imgSrc: string;
  imgAlt: string;
  prod: string;
  github: string;
  docs?: string;
  summary: string;
  description: string;
  loom?: any;
  galary?: GalaryItem[];
  bullets: string[];
};

const ProjectTemplate = ({
  projectLabel,
  projectName,
  imgSrc,
  imgAlt,
  prod,
  github,
  docs,
  summary,
  description,
  loom,
  galary,
  bullets,
}: ProjectTemplateProps) => {
  return (
    <Box
      component="div"
      className="flex flex-col gap-4 justify-start items-start w-full"
    >
      <Typography
        variant="h4"
        className="w-max border-b-[3px] border-[#FF8D25] text-white"
        fontFamily="lato"
      >
        {projectName}
      </Typography>
      <ProjectHeaderCard imgSrc={imgSrc} imgAlt={imgAlt} bullets={bullets} />
      <ProjectSummaryTabs
        summary={summary}
        description={description}
        prod={prod}
        github={github}
        docs={docs!}
      />
    </Box>
  );
};

export default ProjectTemplate;
