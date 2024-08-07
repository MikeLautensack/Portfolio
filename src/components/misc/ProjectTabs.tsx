"use client";

import { Box, Tab, Tabs } from "@mui/material";
import React, { useEffect, useState } from "react";
import { CustomTabPanel } from "./CustomTabPanel";
import TopThreeProjects from "./TopThreeProjects";
import FullstackApps from "./FullstackApps";
import { useSearchParams } from "next/navigation";
import CourseProjects from "./CourseProjects";

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const ProjectTabs = () => {
  // Hooks
  const searchParams = useSearchParams();

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
      } else if (tab === "course-projects") {
        setValue(2);
      }
    }
  }, [tab]);

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
          <Tab
            sx={{
              color: "#FFFFFF",
              "&.Mui-selected": {
                color: "#FF8D25", // replace 'yourActiveColor' with your desired color
              },
            }}
            label="The Top 3!"
            {...a11yProps(0)}
          />
          <Tab
            sx={{
              color: "#FFFFFF",
              "&.Mui-selected": {
                color: "#FF8D25", // replace 'yourActiveColor' with your desired color
              },
            }}
            label="Full Stack Apps"
            {...a11yProps(1)}
          />
          <Tab
            sx={{
              color: "#FFFFFF",
              "&.Mui-selected": {
                color: "#FF8D25", // replace 'yourActiveColor' with your desired color
              },
            }}
            label="Course Projects"
            {...a11yProps(2)}
          />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <TopThreeProjects />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <FullstackApps />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <CourseProjects />
      </CustomTabPanel>
    </Box>
  );
};

export default ProjectTabs;
