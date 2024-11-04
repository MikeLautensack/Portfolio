"use client";

import { Box, Tab, Tabs } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import { CustomTabPanel } from "./CustomTabPanel";
import TopThreeProjects from "./TopThreeProjects";
import FullstackApps from "./FullstackApps";
import { useRouter, useSearchParams } from "next/navigation";
import CourseProjects from "./CourseProjects";
import MicroserviceProjects from "./MicroserviceProjects";
import AllProjects from "./AllProjects";
import { type SanityDocument } from "next-sanity";

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

type ProjectTabsProps = {
  projects: SanityDocument[];
};

const ProjectTabs = ({ projects }: ProjectTabsProps) => {
  // Hooks
  const searchParams = useSearchParams();
  const router = useRouter();

  // get params
  const tab = searchParams.get("tab");

  // State
  const [value, setValue] = useState<number>(0);

  // Effects
  useEffect(() => {
    if (tab) {
      if (tab === "top-three") {
        setValue(0);
      } else if (tab === "full-stack-apps") {
        setValue(1);
      } else if (tab === "microservices") {
        setValue(2);
      } else if (tab === "course-projects") {
        setValue(3);
      } else if (tab === "all-projects") {
        setValue(4);
      }
    }
  }, [tab]);

  // Callbacks
  const filterProjects = useCallback(
    (projects: SanityDocument[], projectType: string) => {
      return projects.filter((project) => project.projectType === projectType);
    },
    []
  );

  return (
    <Box component="div" className="w-full px-0">
      <Box
        component="div"
        sx={{ borderBottom: 1, borderColor: "#31B0E9" }}
        className="border-b-[1px] border-divider]"
      >
        <Tabs
          value={value}
          onChange={(event: React.SyntheticEvent, newValue: number) => {
            setValue(newValue);
            router.push(
              `/projects?tab=${
                newValue === 0
                  ? "top-three"
                  : newValue === 1
                    ? "full-stack-apps"
                    : newValue === 2
                      ? "microservices"
                      : newValue === 3
                        ? "course-projects"
                        : newValue === 4
                          ? "all-projects"
                          : ""
              }`
            );
          }}
          aria-label="basic tabs example"
        >
          <Tab
            sx={{
              color: "#FFFFFF",
              "&.Mui-selected": {
                color: "#31B0E9", // replace 'yourActiveColor' with your desired color
              },
            }}
            label="The Top 3!"
            {...a11yProps(0)}
          />
          <Tab
            sx={{
              color: "#FFFFFF",
              "&.Mui-selected": {
                color: "#31B0E9", // replace 'yourActiveColor' with your desired color
              },
            }}
            label="Full Stack Apps"
            {...a11yProps(1)}
          />
          <Tab
            sx={{
              color: "#FFFFFF",
              "&.Mui-selected": {
                color: "#31B0E9", // replace 'yourActiveColor' with your desired color
              },
            }}
            label="Microservice APIs"
            {...a11yProps(2)}
          />
          <Tab
            sx={{
              color: "#FFFFFF",
              "&.Mui-selected": {
                color: "#31B0E9", // replace 'yourActiveColor' with your desired color
              },
            }}
            label="Course Projects"
            {...a11yProps(3)}
          />
          <Tab
            sx={{
              color: "#FFFFFF",
              "&.Mui-selected": {
                color: "#31B0E9", // replace 'yourActiveColor' with your desired color
              },
            }}
            label="All Projects"
            {...a11yProps(4)}
          />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <TopThreeProjects projects={filterProjects(projects, "top-three")} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <FullstackApps projects={filterProjects(projects, "full-stack-app")} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <MicroserviceProjects
          projects={filterProjects(projects, "microservices")}
        />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <CourseProjects
          projects={filterProjects(projects, "course-projects")}
        />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
        <AllProjects projects={projects} />
      </CustomTabPanel>
    </Box>
  );
};

export default ProjectTabs;
