import { projects } from "@/projectsData";
import { Box } from "@mui/material";
import React from "react";
import ProjectCard from "./ProjectCard";

const getProjectsByType = (projecttype: string) => {
  let projectsByType = [];
  for (let i = 0; i < projects.length; i++) {
    if (projects[i].projectType === projecttype) {
      projectsByType.push(projects[i]);
    }
  }
  return projectsByType;
};

const CourseProjects = () => {
  const courseProjects = getProjectsByType("Course Project");
  return (
    <Box
      component="div"
      className="flex flex-col gap-4 justify-start items-starts"
    >
      {courseProjects.map((proj: any) => (
        <ProjectCard
          projectTitle={proj?.projectName}
          bulletPoints={proj?.bullets}
          href={proj?.href}
          imgSrc={proj?.imgSrc}
          imgAlt={proj?.imgAlt}
          contentOrder="textFirst"
          key={Math.floor(Math.random())}
        />
      ))}
    </Box>
  );
};

export default CourseProjects;
