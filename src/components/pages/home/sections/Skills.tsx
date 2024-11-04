"use client";

import { Typography } from "@mui/material";
import React, { useCallback, useEffect, useRef } from "react";
import { motion, useAnimate, useInView } from "framer-motion";
import { type SanityDocument } from "next-sanity";
import { urlFor } from "@/sanity/lib/image";
import SkillsItem from "@/components/misc/SkillsItem";

type SkillsType = {
  skills: SanityDocument[];
};

const Skills = ({ skills }: SkillsType) => {
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
      className="flex flex-col gap-4 justify-start items-start px-8 py-4 md:px-32 md:py-16"
      ref={scope}
    >
      <Typography
        variant="h4"
        className="w-max border-b-[3px] border-[#31B0E9] text-white"
      >
        Skills
      </Typography>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-4">
        {skills.map((skill, index) => (
          <motion.div
            key={skill._id}
            ref={(el) => {
              refs.current[index] = el;
            }}
            initial={{ opacity: 0, y: 20 }}
            className="w-full h-full"
          >
            <SkillsItem
              skill={skill.skillName}
              description={skill.skillDescription}
              imgSrc={urlFor(skill.skillImg).url()}
              imgAlt={skill.skillName}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
