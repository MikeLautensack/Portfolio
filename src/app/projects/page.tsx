import React, { Suspense } from "react";
import SectionHeading from "@/components/misc/SectionHeading";
import ProjectsGallery from "@/components/misc/ProjectsGallery";

const page = () => {
  return (
    <main className="mx-auto flex min-h-[calc(100vh-64px)] w-full max-w-content flex-col gap-10 px-6 py-16 md:px-10 md:py-20">
      <SectionHeading eyebrow="Portfolio" title="Projects" />
      <Suspense fallback={null}>
        <ProjectsGallery />
      </Suspense>
    </main>
  );
};

export default page;
