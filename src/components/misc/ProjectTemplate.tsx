import { Box, Typography } from "@mui/material";
import React from "react";
import ProjectHeaderCard from "./ProjectHeaderCard";
import ProjectSummaryTabs from "./ProjectSummaryTabs";
import { Stack } from "./ProjectSpecs";
import { BulletPointType } from "./ProjectCard";

type GalaryItem = {
  img: any;
  heading: string;
};

type ProjectTemplateProps = {
  projectLabel: string;
  projectName: string;
  projectType: string;
  imgSrc: string;
  imgAlt: string;
  prod: string;
  github: string;
  docs?: string;
  summary: string;
  description: string;
  loom?: any;
  galary?: GalaryItem[];
  bullets: BulletPointType[];
  stack: Stack;
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
  stack,
}: ProjectTemplateProps) => {
  return (
    <div className="flex flex-col gap-4 justify-start items-start w-full h-full">
      <Typography
        variant="h4"
        className="w-max border-b-[3px] border-[#31B0E9] text-white"
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
        stack={stack}
      />
    </div>
  );
};

export default ProjectTemplate;
