import ProjectTemplate from "@/components/misc/ProjectTemplate";
import { projects } from "@/projectsData";
import React from "react";

const getProject = (project: string) => {
  for (let i = 0; i < projects.length; i++) {
    if (projects[i].projectLabel === project) {
      return projects[i];
    }
  }
};

const page = ({ params }: { params: { project: string } }) => {
  const proj = getProject(params.project);
  if (!proj) {
    return <div>No Project Data Found</div>;
  }
  proj;
  return (
    <div className="px-8 md:px-16 lg:px-32 min-h-[calc(100vh-56px)]">
      <ProjectTemplate
        projectLabel={proj.projectLabel}
        projectName={proj.projectName}
        projectType={proj.projectType}
        imgSrc={proj.imgSrc}
        imgAlt={proj.imgAlt}
        prod={proj.prod}
        github={proj.github}
        docs={proj.docs}
        summary={proj.summary}
        description={proj.description}
        loom={proj.loom}
        galary={proj.galary}
        bullets={proj.bullets}
        stack={proj.stack}
      />
    </div>
  );
};

export default page;
