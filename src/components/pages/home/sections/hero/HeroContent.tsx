import { Button, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import * as motion from "framer-motion/client";

const HeroContent = () => {
  return (
    <motion.div
      className="flex flex-col gap-6 justify-start items-start w-full lg:w-10/12 z-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Typography
        color="#FFFFFF"
        sx={{
          typography: {
            xs: "body1", // Small screens
            sm: "h6", // Medium screens
            md: "h5", // Large screens
            lg: "h4", // Extra large screens
          },
        }}
        noWrap
      >
        Hi, I am{" "}
        <Typography
          component="span"
          color="#31B0E9"
          sx={{
            typography: {
              xs: "body1", // Small screens
              sm: "h6", // Medium screens
              md: "h5", // Large screens
              lg: "h4", // Extra large screens
            },
          }}
        >
          Mike
        </Typography>{" "}
        Lautensack
      </Typography>
      <Typography
        color="#FFFFFF"
        variant="h1"
        sx={{
          typography: {
            xs: "h5", // Small screens
            sm: "h3", // Medium screens
            md: "h2", // Large screens
            lg: "h1", // Extra large screens
          },
        }}
      >
        I am a{" "}
        <Typography
          component="span"
          color="#31B0E9"
          variant="h1"
          sx={{
            typography: {
              xs: "h5", // Small screens
              sm: "h3", // Medium screens
              md: "h2", // Large screens
              lg: "h1", // Extra large screens
            },
          }}
        >
          Full-Stack
        </Typography>{" "}
        web developer
      </Typography>
      <Typography
        color="#FFFFFF"
        sx={{
          typography: {
            xs: "body2", // Small screens
            sm: "h6", // Medium screens
            md: "h6", // Large screens
            lg: "h6", // Extra large screens
          },
        }}
      >
        I specilize in{" "}
        <Typography
          component="span"
          color="#31B0E9"
          variant="h6"
          sx={{ fontWeight: "600" }}
        >
          N
        </Typography>
        ode.js,{" "}
        <Typography
          component="span"
          color="#31B0E9"
          variant="h6"
          sx={{ fontWeight: "600" }}
        >
          R
        </Typography>
        eact.js, and{" "}
        <Typography
          component="span"
          color="#31B0E9"
          variant="h6"
          sx={{ fontWeight: "600" }}
        >
          N
        </Typography>
        ext.js
      </Typography>
      <div className="flex justify-center lg:justify-start items-center gap-4">
        <Link href="/projects" className="w-full flex-grow">
          <Button variant="contained" color="secondary" className="w-full">
            <Typography
              variant="h6"
              color="white"
              noWrap
              sx={{ fontWeight: "600" }}
            >
              View Projects!
            </Typography>
          </Button>
        </Link>
        {/* <Link href="/hire-me" className="w-full flex-grow">
          <Button variant="contained" className="w-full">
            <Typography variant="h6" noWrap>
              Hire Me!
            </Typography>
          </Button>
        </Link> */}
      </div>
    </motion.div>
  );
};

export default HeroContent;
