import ProjectTabs from "@/components/pages/projects/projectTabs/ProjectTabs";
import { Box, Typography } from "@mui/material";
import React from "react";
import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/lib/client";

const PROJECTS_QUERY = `*[
  _type == "project"
] | order(index asc) {
  _id, 
  projectName, 
  projectType, 
  projectSummary, 
  projectDescription, 
  pathVar, 
  prod, 
  github, 
  projectImg, 
  galary, 
  features,
  technology, 
  index
}`;

const options = { next: { revalidate: 30 } };

const getProjects = async () => {
  const query = client.fetch<SanityDocument[]>(PROJECTS_QUERY, {}, options);
  return await query;
};

const page = async () => {
  const projects = await getProjects();
  return (
    <Box
      component="section"
      className="flex flex-col gap-8 justify-start items-start px-8 py-4 md:px-32 md:py-10 md:min-h-[calc(100vh-56px)]"
    >
      <Typography
        variant="h4"
        className="w-max border-b-[3px] border-[#31B0E9] text-white"
      >
        Projects
      </Typography>
      <ProjectTabs projects={projects} />
    </Box>
  );
};

export default page;
