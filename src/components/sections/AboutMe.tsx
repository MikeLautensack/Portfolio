import { Box, Typography } from "@mui/material";
import React from "react";

const AboutMe = () => {
  return (
    <Box
      component="section"
      className="flex flex-col gap-8 justify-start items-start px-8 pb-4 md:px-32 md:pb-32"
    >
      <Typography
        variant="h4"
        className="w-max border-b-[3px] border-[#9A4F96] text-white"
      >
        About Me
      </Typography>
      <Box component="div" className="flex flex-col gap-8 pb-10">
        <Typography variant="body1" className="text-white">
          {`As a self-taught Full Stack Web Developer with 2.25 years of focused experience, I specialize in creating robust web applications using TypeScript, React, Next.js, and Vite. My expertise spans frontend, backend, and fullstack development, with a proven track record on Upwork as a Top Rated freelancer with a 100% Job Success Score.`}
        </Typography>
        <Typography variant="body1" className="text-white">
          {`I excel in deploying Next.js applications on Vercel and RESTful APIs to Azure, delivering comprehensive cloud solutions. My projects, including an Estimate Generator for contractors and a real-time Socket.io Chat App, showcase my ability to implement complex features and integrate various technologies seamlessly.`}
        </Typography>
        <Typography variant="body1" className="text-white">
          {`What sets me apart is my unique blend of technical expertise and business acumen, derived from prior entrepreneurial experience. This background enables me to build technically sound solutions that align closely with small business needs, particularly in developing SaaS products. My approach combines meticulous attention to detail with a forward-thinking mindset, driving me to create innovative web solutions that efficiently solve real-world problems.`}
        </Typography>
      </Box>
    </Box>
  );
};

export default AboutMe;
