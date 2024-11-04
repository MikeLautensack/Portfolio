import ProjectTemplate from "@/components/pages/projects/project/ProjectTemplate";
import React from "react";
import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

const PROJECT_BY_PATH_QUERY = `*[
  _type == "project" && pathVar == $pathVar
] {
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

const getProject = async (project: string) => {
  const query = client.fetch<SanityDocument[]>(
    PROJECT_BY_PATH_QUERY,
    { pathVar: project },
    options
  );
  return await query;
};

const page = async ({ params }: { params: { project: string } }) => {
  const projectQuery = await getProject(params.project);
  if (!projectQuery) {
    return <div>No Project Data Found</div>;
  }
  const project = projectQuery[0];
  return (
    <div className="px-8 md:px-16 lg:px-32 min-h-[calc(100vh-56px)]">
      <ProjectTemplate
        projectLabel={project.projectName}
        projectName={project.projectName}
        projectType={project.projectType}
        imgSrc={urlFor(project.projectImg).url()}
        imgAlt={project.projectName}
        prod={project.prod}
        github={project.github}
        // docs={project.docs}
        summary={project.summary}
        description={project.description}
        // loom={project.loom}
        galary={project.galary}
        // bullets={project.bullets}
        // stack={project.stack}
      />
    </div>
  );
};

export default page;
