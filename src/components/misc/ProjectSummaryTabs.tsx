"use client";

import { Box, Tab, Tabs } from "@mui/material";
import React, { useEffect, useState } from "react";
import { CustomTabPanel } from "./CustomTabPanel";
import TopThreeProjects from "./TopThreeProjects";
import FullstackApps from "./FullstackApps";
import { useSearchParams } from "next/navigation";
import ProjectSummary from "./ProjectSummary";
import ProjectSpecs, { Stack } from "./ProjectSpecs";
import ProjectGallary from "./ProjectGallary";

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

type ProjectSummaryTabsProps = {
  summary: string;
  description: string;
  prod: string;
  github: string;
  docs: string;
  stack: Stack;
  gallary?: any;
};

const ProjectSummaryTabs = ({
  summary,
  description,
  prod,
  github,
  docs,
  stack,
  gallary,
}: ProjectSummaryTabsProps) => {
  // Hooks
  const searchParams = useSearchParams();

  // get params
  const tab = searchParams.get("tab");

  // State
  const [value, setValue] = useState<number>(0);

  return (
    <Box component="div" className="w-full px-0">
      <Box
        component="div"
        sx={{ borderBottom: 1, borderColor: "divider" }}
        className="border-b-[1px] border-divider]"
      >
        <Tabs
          value={value}
          onChange={(event: React.SyntheticEvent, newValue: number) =>
            setValue(newValue)
          }
          aria-label="basic tabs example"
        >
          <Tab label="Project Summary" {...a11yProps(0)} />
          {stack && <Tab label="Technical Specs" {...a11yProps(1)} />}
          {gallary && <Tab label="Galary" {...a11yProps(2)} />}
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <ProjectSummary
          summary={summary}
          description={description}
          prod={prod}
          github={github}
          docs={docs}
        />
      </CustomTabPanel>
      {stack && (
        <CustomTabPanel value={value} index={1}>
          <ProjectSpecs stack={stack} />
        </CustomTabPanel>
      )}
      {gallary && (
        <CustomTabPanel value={value} index={2}>
          <ProjectGallary />
        </CustomTabPanel>
      )}
    </Box>
  );
};

export default ProjectSummaryTabs;
