"use client";

import React, { useCallback, useEffect, useRef } from "react";
import { motion, useAnimate, useInView } from "framer-motion";
import { type SanityDocument } from "next-sanity";
import ProjectCard from "@/components/misc/ProjectCard";

type AllProjectsProps = {
  projects: SanityDocument[];
};

const AllProjects = ({ projects }: AllProjectsProps) => {
  // Hooks
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { once: false, amount: 0.1 });

  const onAnimate = useCallback(() => {
    refs.current.forEach((ref, index) => {
      if (ref) {
        animate(
          ref,
          { opacity: 1, y: 0 },
          { duration: 0.5, delay: index * 0.075 }
        );
      }
    });
  }, [animate]);

  const resetAnimation = useCallback(() => {
    refs.current.forEach((ref) => {
      if (ref) {
        animate(ref, { opacity: 0, y: 20 }, { duration: 0.075 });
      }
    });
  }, [animate]);

  // Effects
  useEffect(() => {
    if (isInView) {
      onAnimate();
    } else {
      resetAnimation();
    }
  }, [isInView, onAnimate, resetAnimation]);

  // Refs
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  return (
    <div
      className="flex flex-col gap-4 justify-start items-start w-full"
      ref={scope}
    >
      {projects.map((project) => (
        <ProjectCard key={project._id} project={project} />
      ))}
    </div>
  );
};

export default AllProjects;
