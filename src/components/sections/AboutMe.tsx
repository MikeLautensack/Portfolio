import { Box, Typography } from "@mui/material";
import React from "react";

const AboutMe = () => {
  return (
    <Box
      component="section"
      className="flex flex-col gap-8 justify-start items-start px-8 py-4 md:px-32 md:py-20 bg-[#001824]"
    >
      <Typography
        variant="h4"
        className="w-max border-b-[3px] border-[#FF8D25] text-white"
      >
        About Me
      </Typography>
      <Box
        component="div"
        className="flex flex-col gap-8 border-b-[3px] border-[#FF8D25] pb-10"
      >
        <Typography variant="body1" className="text-white">
          As a full-stack web developer, I specialize in creating performant and
          reliable SaaS applications for businesses using cutting-edge
          technologies. My expertise lies in building dynamic and responsive
          interfaces with React and Next.js 14 (App Router), complemented by
          robust Node.js and Express.js backend systems. This combination allows
          me to deliver seamless, end-to-end solutions that prioritize user
          experience and functionality.
        </Typography>
        <Typography variant="body1" className="text-white">
          {`One of my flagship projects, "Estimate Generator" showcases my ability
          to transform business needs into practical web applications. This
          tool, designed for contractors to create, send, and manage work
          estimates, leverages the power of Next.js, Vercel, and Neon DB. By
          incorporating Material-UI (MUI) and adhering to Material Design
          principles, I ensure that the user interface is not only functional
          but also aesthetically pleasing and intuitive.`}
        </Typography>
        <Typography variant="body1" className="text-white">
          {`In my current role, I'm expanding my skillset by developing a React
          component library using Vite in library mode. This project, which is
          published on npm, demonstrates my adaptability and commitment to
          staying at the forefront of web development technologies. Whether it's
          crafting comprehensive SaaS solutions or building reusable component
          libraries, I'm driven by the challenge of creating innovative web
          applications that solve real-world problems.`}
        </Typography>
      </Box>
    </Box>
  );
};

export default AboutMe;
