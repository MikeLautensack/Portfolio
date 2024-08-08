import { Box, Typography } from "@mui/material";
import React from "react";
import SkillsItem from "../misc/SkillsItem";

const Skills = () => {
  return (
    <Box
      component="section"
      className="flex flex-col gap-4 justify-start items-start px-8 pb-4 md:px-32 md:pb-32 bg-[#001824]"
    >
      <Typography
        variant="h4"
        className="w-max border-b-[3px] border-[#FF8D25] text-white"
      >
        Skills
      </Typography>
      <Box component="div" className="flex flex-col w-full gap-4">
        <SkillsItem
          num={1}
          skill="React.js / Next.js"
          description="Proficient in building dynamic, SEO-friendly web applications with React.js and Next.js, leveraging their powerful features for seamless user experiences."
          href=""
        />
        <SkillsItem
          num={2}
          skill="Node.js / Express.js"
          description="Skilled in developing robust server-side applications using Node.js and Express.js, focusing on performance, scalability, and efficient API design."
          href=""
        />
        <SkillsItem
          num={3}
          skill="Javascript / Typescript"
          description="Experienced in JavaScript and TypeScript for creating clean, maintainable code with strong typing, enhancing reliability and reducing runtime errors."
          href=""
        />
      </Box>
    </Box>
  );
};

export default Skills;
