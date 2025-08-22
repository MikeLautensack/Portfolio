"use client";

import { Box, Typography } from "@mui/material";
import React, { useCallback, useEffect, useRef } from "react";
import SkillsItem from "../misc/SkillsItem";
import { motion, useAnimate, useInView } from "framer-motion";
import { skillsData } from "@/skillsData";

const Skills = () => {
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
    <section
      className="flex flex-col gap-8 justify-start items-center px-6 py-16 md:px-10"
      ref={scope}
    >
      <div className="w-full max-w-6xl flex flex-col gap-6">
        <Typography
          variant="h4"
          className="w-max border-b-[3px] border-[#31B0E9] text-white"
        >
          Skills
        </Typography>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-6">
          {skillsData.map((skill, index) => (
            <motion.div
              key={skill.skill}
              ref={(el) => {
                refs.current[index] = el;
              }}
              initial={{ opacity: 0, y: 20 }}
              className="w-full h-full"
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
