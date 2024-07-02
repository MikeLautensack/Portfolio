import { Button, Typography } from "@mui/material";
import React from "react";

const HeroContent = () => {
  return (
    <div className="flex flex-col gap-4 justify-start items-start w-full md:w-2/4">
      <Typography color="#FFFFFF" variant="body1">
        Hi, I am Mike Lautensack
      </Typography>
      <Typography color="#FFFFFF" variant="h2">
        I am full-stack SaaS developer
      </Typography>
      <Typography color="#FFFFFF" variant="body2">
        I am a full-stack web developer. I write clean and pixel perfect design.
      </Typography>
      <div className="flex justify-center items-center gap-4">
        <Button variant="contained">View Projects</Button>
        <Button variant="contained">Contact Me!</Button>
      </div>
    </div>
  );
};

export default HeroContent;
