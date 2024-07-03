import { Button, Typography } from "@mui/material";
import React from "react";

const HeroContent = () => {
  return (
    <div className="flex flex-col gap-4 justify-start items-start w-full md:w-2/4">
      <Typography color="#FFFFFF" variant="h6" fontFamily="lato">
        Hi, I am Mike Lautensack
      </Typography>
      <Typography color="#FFFFFF" variant="h2" fontFamily="lato">
        I am full-stack SaaS developer
      </Typography>
      <Typography color="#FFFFFF" variant="body1" fontFamily="lato">
        I am a full-stack web developer. I write clean and pixel perfect design.
      </Typography>
      <div className="flex justify-center items-center gap-4">
        <Button variant="contained">
          <Typography variant="body1" className="text-white" fontFamily="lato">
            View Projects
          </Typography>
        </Button>
        <Button variant="contained">
          <Typography variant="body1" className="text-white" fontFamily="lato">
            Contact Me!
          </Typography>
        </Button>
      </div>
    </div>
  );
};

export default HeroContent;
