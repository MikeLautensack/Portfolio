"use client";

import { Box, Tab, Tabs } from "@mui/material";
import React, { useEffect, useState } from "react";
import { CustomTabPanel } from "./CustomTabPanel";
import TopThreeProjects from "./TopThreeProjects";
import FullstackApps from "./FullstackApps";
import { useSearchParams } from "next/navigation";

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
  console.log("tab test", tab);

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
          <Tab label="The Top 3!" {...a11yProps(0)} />
          <Tab label="Full Stack Apps" {...a11yProps(1)} />
          <Tab label="Course Projects" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <TopThreeProjects />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <FullstackApps />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        3
      </CustomTabPanel>
    </Box>
  );
};

export default ProjectTabs;
