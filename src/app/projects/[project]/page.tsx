import ProjectTemplate from "@/components/misc/ProjectTemplate";
import { projects } from "@/projectsData";
import React from "react";
import Link from "next/link";

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
    return (
      <main className="mx-auto flex min-h-[calc(100vh-64px)] max-w-content flex-col items-start gap-4 px-6 py-20 md:px-10">
        <h1 className="text-2xl font-bold text-ink">Project not found</h1>
        <Link href="/projects" className="text-sm text-accent hover:underline">
          ← Back to projects
        </Link>
      </main>
    );
  }
  return (
    <main className="min-h-[calc(100vh-64px)]">
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
    </main>
  );
};

export default page;
