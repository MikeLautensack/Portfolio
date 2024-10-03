import { Box, Typography } from "@mui/material";
import React from "react";
import SkillsItem from "../misc/SkillsItem";

const Skills = () => {
  return (
    <Box
      component="section"
      className="flex flex-col gap-4 justify-start items-start px-8 pb-4 md:px-32 md:pb-32"
    >
      <Typography
        variant="h4"
        className="w-max border-b-[3px] border-[#9A4F96] text-white"
      >
        Skills
      </Typography>
      <Box component="div" className="grid w-full gap-4">
        <SkillsItem
          skill="JavaScript"
          description="Core programming language for web development, enabling interactive and dynamic website functionality"
          imgSrc="/jslogo.png"
          imgAlt="jslogo"
        />
        <SkillsItem
          skill="TypeScript"
          description="Advanced JavaScript with static typing for building scalable and maintainable applications"
          imgSrc="/tslogo.png"
          imgAlt="tslogo"
        />
        <SkillsItem
          skill="React.js"
          description="Library for building dynamic and responsive user interfaces with a component-based architecture"
          imgSrc="/reactlogo.png"
          imgAlt="reactlogo.png"
        />
        <SkillsItem
          skill="Next.js"
          description="React framework for server-side rendering, static site generation, and building production-ready applications"
          imgSrc="/nextjslogo.png"
          imgAlt="nextjslogo.png"
        />
        <SkillsItem
          skill="Vite"
          description="Modern build tool for faster development and optimized production builds, with expertise in library mode for component libraries"
          imgSrc="/vitelogo.png"
        />
        <SkillsItem
          skill="Node.js"
          description="JavaScript runtime for building scalable server-side applications and APIs"
          imgSrc="/nodejsStackedLight.svg"
          imgAlt="nodelogo"
        />
        <SkillsItem
          skill="Express.js"
          description="Web application framework for Node.js, used for building robust and flexible backend services"
          imgSrc="/express-js.png"
          imgAlt="expresslogo"
        />
        <SkillsItem
          skill="C#"
          description="Versatile, object-oriented programming language for developing a wide range of applications"
          imgSrc="/csharp.png"
          imgAlt="c#logo"
        />
        <SkillsItem
          skill=".NET"
          description="Free, cross-platform, open-source developer platform for building many different types of applications"
          imgSrc="/dotnetcore.png"
          imgAlt="dotnetlogo.png"
        />
        <SkillsItem
          skill="Azure"
          description="Cloud platform for deploying, managing, and scaling web applications and services"
          imgSrc="/azurelogo.png"
          imgAlt="azurelogo"
        />
        <SkillsItem
          skill="Vercel"
          description="Platform for deploying and hosting Next.js and other frontend applications with ease"
          imgSrc="/vercellogo.svg"
          imgAlt="vercellogo"
        />
        <SkillsItem
          skill="Git"
          description="Distributed version control system for tracking changes in source code during software development"
          imgSrc="/gitlogo.png"
          imgAlt="gitlogo"
        />
        <SkillsItem
          skill="GitHub"
          description="Web-based platform for version control and collaboration using Git"
          imgSrc="/githublogo.png"
          imgAlt="githublogo"
        />
        <SkillsItem
          skill="Docker"
          description="Containerization technology for consistent development, shipping, and deployment of applications"
          imgSrc="/dockerlogo.png"
          imgAlt="dockerlogo"
        />
        <SkillsItem
          skill="PostgreSQL"
          description="Open-source relational database management system for storing and managing application data"
          imgSrc="/postgresqllogo2.png"
          imgAlt="postgresqllogo"
        />
        <SkillsItem
          skill="MySQL"
          description="Popular open-source relational database management system for web applications"
          imgSrc="/mysqllogo.png"
          imgAlt="mysqllogo"
        />
        <SkillsItem
          skill="REST API Design"
          description="Principles and best practices for designing scalable and efficient web APIs"
          imgSrc="/restlogo.png"
          imgAlt="restlogo"
        />
        <SkillsItem
          skill="Socket.io"
          description="Library for building real-time, bidirectional communication between web clients and servers"
          imgSrc="/socketiologo.png"
          imgAlt="sockeriologo"
        />
        <SkillsItem
          skill="Three.js"
          description="JavaScript library for creating 3D graphics and animations in the browser"
          imgSrc="/threejslogo.png"
          imgAlt="threejslogo"
        />
      </Box>
    </Box>
  );
};

export default Skills;
