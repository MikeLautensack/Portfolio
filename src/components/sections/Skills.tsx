"use client";

import React, { useCallback, useEffect, useRef } from "react";
import SkillsItem from "../misc/SkillsItem";
import { motion, useAnimate, useInView } from "framer-motion";
import { skillsData } from "@/skillsData";
import SectionHeading from "../misc/SectionHeading";

const Skills = () => {
  // Hooks
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { once: false, amount: 0.1 });

  // Refs
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  const onAnimate = useCallback(() => {
    refs.current.forEach((ref, index) => {
      if (ref) {
        animate(
          ref,
          { opacity: 1, y: 0 },
          { duration: 0.5, delay: index * 0.05 }
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

  return (
    <section
      id="skills"
      className="mx-auto w-full max-w-content px-6 py-20 md:px-10 md:py-28"
      ref={scope}
    >
      <div className="flex flex-col gap-10">
        <SectionHeading eyebrow="Toolbox" title="Skills & Technologies" />
        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillsData.map((skill, index) => (
            <motion.div
              key={skill.skill}
              ref={(el) => {
                refs.current[index] = el;
              }}
              initial={{ opacity: 0, y: 20 }}
              className="h-full w-full"
            >
              <SkillsItem
                skill={skill.skill}
                description={skill.description}
                imgSrc={skill.imgSrc}
                imgAlt={skill.imgAlt}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
