"use client";

import { Box, Tab, Tabs } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import { CustomTabPanel } from "../../../misc/CustomTabPanel";
import { useRouter, useSearchParams } from "next/navigation";
import { type SanityDocument } from "next-sanity";
import AllProjects from "./AllProjects";
import FullstackApps from "./FullstackApps";
import APIProjects from "./APIProjects";
import MicroserviceProjects from "./MicroserviceProjects";
import CourseProjects from "./CourseProjects";

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
      if (tab === "fullstack-webapps") {
        setValue(0);
      } else if (tab === "apis") {
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
  const filterAndSortProjects = useCallback(
    (projects: SanityDocument[], projectType: string) => {
      const filteredProjects = projects.filter(
        (project) => project.projectType === projectType
      );
      return filteredProjects.sort((a, b) => a.typeIndex - b.typeIndex);
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
                  ? "fullstack-webapps"
                  : newValue === 1
                    ? "apis"
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
            label="Full Stack Apps"
            {...a11yProps(0)}
          />
          <Tab
            sx={{
              color: "#FFFFFF",
              "&.Mui-selected": {
                color: "#31B0E9", // replace 'yourActiveColor' with your desired color
              },
            }}
            label="APIs"
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
        <FullstackApps
          projects={filterAndSortProjects(projects, "fullstack-webapp")}
        />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <APIProjects projects={filterAndSortProjects(projects, "api")} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <MicroserviceProjects
          projects={filterAndSortProjects(projects, "microservice")}
        />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <CourseProjects
          projects={filterAndSortProjects(projects, "course-project")}
        />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
        <AllProjects projects={projects} />
      </CustomTabPanel>
    </Box>
  );
};

export default ProjectTabs;
