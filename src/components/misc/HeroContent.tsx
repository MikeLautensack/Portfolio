import { Button, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

const HeroContent = () => {
  return (
    <div className="flex flex-col gap-4 justify-start items-start lg:w-full z-10">
      <Typography color="#FFFFFF" variant="h6" fontFamily="lato">
        Hi, I am Mike Lautensack
      </Typography>
      <Typography color="#FFFFFF" variant="h2" fontFamily="lato">
        I am a full-stack web developer
      </Typography>
      <Typography color="#FFFFFF" variant="body1" fontFamily="lato">
        I specilize in node.js, react.js, and next.js
      </Typography>
      <div className="flex justify-center items-center gap-4 w-full">
        <Link href="/projects" className="w-full">
          <Button variant="outlined" className="w-full">
            <Typography variant="body1" fontFamily="lato">
              View Projects
            </Typography>
          </Button>
        </Link>
        <Link href="/hire-me" className="w-full">
          <Button variant="outlined" className="w-full">
            <Typography variant="body1" fontFamily="lato">
              Hire Me!
            </Typography>
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default HeroContent;
