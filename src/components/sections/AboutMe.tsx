import { Box, Typography } from "@mui/material";
import React from "react";

const AboutMe = () => {
  return (
    <Box
      component="section"
      className="flex flex-col gap-8 justify-start items-start px-8 py-4 md:h-screen md:px-32 md:py-20 bg-[#002834]"
    >
      <Typography
        variant="h4"
        className="w-max border-b-[3px] border-[#FF8D25] text-white"
        fontFamily="lato"
      >
        About Me
      </Typography>
      <Box
        component="div"
        className="flex flex-col gap-8 border-b-[3px] border-[#FF8D25] pb-10"
      >
        <Typography variant="body1" className="text-white" fontFamily="lato">
          As a full-stack web developer, I am driven by a passion for creating
          innovative and user-friendly web applications. With a solid foundation
          in JavaScript, TypeScript, and Java, I specialize in building dynamic
          and responsive interfaces using cutting-edge technologies such as
          React.js and Next.js.
        </Typography>
        <Typography variant="body1" className="text-white" fontFamily="lato">
          My expertise lies in developing robust and scalable web applications,
          from designing intuitive user interfaces to implementing efficient
          backend systems. I am well-versed in building RESTful APIs using
          Node.js, Express.js, and SpringBoot, ensuring seamless data flow and
          communication between the client and server.
        </Typography>
        <Typography variant="body1" className="text-white" fontFamily="lato">
          Throughout my professional journey, I have honed my skills in crafting
          feature-rich and visually appealing web applications. One of my
          notable projects is the Estimate Generator, a user-friendly web app
          that empowers contractors and small business owners to streamline
          their estimation process and deliver professional quotes to customers
          with ease.
        </Typography>
        <Typography variant="body1" className="text-white" fontFamily="lato">
          In addition to my technical skills, I possess a strong understanding
          of modern web development practices, including version control with
          Git and GitHub, containerization with Docker, and API testing with
          Postman. I am also well-versed in database management systems such as
          MySQL, PostgreSQL, and MongoDB.
        </Typography>
        <Typography variant="body1" className="text-white" fontFamily="lato">
          If you are looking for a dedicated and forward-thinking web developer
          to bring your ideas to life, I would love to connect and explore how I
          can contribute to your next project. Feel free to browse my portfolio
          and reach out to me through LinkedIn or GitHub.
        </Typography>
      </Box>
    </Box>
  );
};

export default AboutMe;
