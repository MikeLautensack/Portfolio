import { Box, Typography } from "@mui/material";
import React from "react";

const AboutMe = () => {
  return (
    <Box
      component="section"
      className="flex flex-col gap-8 justify-start items-start px-8 pb-4 md:px-32 md:pb-32 bg-[#001824]"
    >
      <Typography
        variant="h4"
        className="w-max border-b-[3px] border-[#FF8D25] text-white"
      >
        About Me
      </Typography>
      <Box component="div" className="flex flex-col gap-8 pb-10">
        <Typography variant="body1" className="text-white">
          {`As a self-taught Full Stack Web Developer with 2.25 years of focused
          experience, I specialize in creating robust and scalable web
          applications using cutting-edge technologies. My expertise spans
          across TypeScript, React, Next.js, and Vite for comprehensive
          frontend, backend, and fullstack development. With a proven track
          record of success on Upwork, including a Top Rated status and 100% Job
          Success Score, I've delivered high-quality React applications and
          custom component libraries that meet and exceed client expectations.`}
        </Typography>
        <Typography variant="body1" className="text-white">
          {`My technical proficiency extends to cloud solutions, where I excel in deploying Next.js applications on Vercel and RESTful APIs to Azure. This comprehensive skill set allows me to create end-to-end solutions that prioritize performance, user experience, and functionality. Notable projects include the Estimate Generator, a web app for contractors to manage work estimates and invoices, and a real-time Socket.io Chat App, showcasing my ability to implement complex features and integrate various technologies seamlessly.`}
        </Typography>
        <Typography variant="body1" className="text-white">
          {`What sets me apart is my unique blend of technical expertise and business acumen, stemming from prior entrepreneurial experience. This background enables me to not only build technically sound solutions but also to align them closely with small business needs, particularly in developing SaaS products for contractors and small businesses. My approach is characterized by meticulous attention to detail, unwavering commitment to best practices, and a forward-thinking mindset in web development. Whether it's crafting custom React component libraries, implementing real-time features, or developing full-stack applications, I'm driven by the challenge of creating innovative web solutions that solve real-world problems efficiently and effectively.`}
        </Typography>
      </Box>
    </Box>
  );
};

export default AboutMe;
