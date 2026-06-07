"use client";

import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import { projects } from "@/projectsData";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

type Category = {
  label: string;
  match: (projectType: string) => boolean;
};

const categories: Category[] = [
  { label: "All", match: () => true },
  { label: "Full-Stack", match: (t) => t === "Fullstack Webapp" },
  { label: "Microservices", match: (t) => t === "Microservice" },
  { label: "Course Projects", match: (t) => t === "Course Project" },
];

// Backwards-compat with the old ?tab= deep links used by the nav menu.
const tabToCategory: Record<string, string> = {
  "all-projects": "All",
  "top-three": "All",
  "full-stack-apps": "Full-Stack",
  microservices: "Microservices",
  "course-projects": "Course Projects",
};

const ProjectsGallery = () => {
  const searchParams = useSearchParams();
  const initial = tabToCategory[searchParams.get("tab") ?? ""] ?? "All";
  const [active, setActive] = useState<string>(initial);

  const activeCategory =
    categories.find((c) => c.label === active) ?? categories[0];
  const filtered = projects.filter((p) =>
    activeCategory.match(p.projectType)
  );

  return (
    <div className="flex w-full flex-col gap-8">
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => {
          const isActive = active === category.label;
          return (
            <button
              key={category.label}
              type="button"
              onClick={() => setActive(category.label)}
              className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
                isActive
                  ? "border-accent bg-accent-dim text-accent"
                  : "border-line text-ink-muted hover:border-line-strong hover:text-ink"
              }`}
            >
              {category.label}
            </button>
          );
        })}
      </div>

      <div className="flex flex-col gap-6">
        {filtered.map((project, index) => (
          <motion.div
            key={project.projectName}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.06 }}
          >
            <ProjectCard
              projectTitle={project.projectName}
              description={project.cardDescription}
              bulletPoints={project.bullets}
              href={project.href}
              imgSrc={project.imgSrc}
              imgAlt={project.imgAlt}
              contentOrder="textFirst"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsGallery;
