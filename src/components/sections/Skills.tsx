import { Box, Typography } from "@mui/material";
import React from "react";
import SkillsItem from "../misc/SkillsItem";

const Skills = () => {
  return (
    <Box
      component="section"
      className="flex flex-col justify-start items-start md:h-screen px-8 py-4 md:px-32 md:py-20 bg-[#002834]"
    >
      <Typography
        variant="h4"
        className="w-max border-b-[3px] border-[#FF8D25] text-white"
        fontFamily="lato"
      >
        Skills
      </Typography>
      <Box component="div" className="flex flex-col w-full">
        <SkillsItem
          num={1}
          skill="React.js / Next.js"
          description="vel orci porta non pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt eget nullam non"
          href=""
        />
        <SkillsItem
          num={2}
          skill="Node.js / Express.js"
          description="vel orci porta non pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt eget nullam non"
          href=""
        />
        <SkillsItem
          num={3}
          skill="Javascript / Typescript"
          description="vel orci porta non pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt eget nullam non"
          href=""
        />
      </Box>
    </Box>
  );
};

export default Skills;
