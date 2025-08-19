import { Box, Typography } from "@mui/material";
import React from "react";
import Nav from "./Nav";
import GitHubIcon from "@mui/icons-material/GitHub";
import Link from "next/link";
import { SiUpwork } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import IconButton from "@mui/material/IconButton";
import SideBar from "./misc/SideBar";
import * as motion from "framer-motion/client";

const Header = () => {
  return (
    <header
      className="w-full h-14 flex justify-center items-center top-0 z-20 relative"
      // initial={{ opacity: 0 }}
      // animate={{ opacity: 1 }}
      // transition={{ duration: 0.5 }}
    >
      <motion.div
        className="hidden lg:flex items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Box
          component="div"
          className="absolute left-0 md:ml-32 lg:ml-56 flex gap-2 h-full items-center"
          sx={{
            display: {
              xs: "none", // Hidden on extra small screens
              sm: "none", // Hidden on small screens
              md: "flex", // Visible as flex on medium screens and above
            },
          }}
        >
          <Typography variant="h5" color="#31B0E9">
            Mike
          </Typography>
          <Typography variant="h5" color="#ffffff">
            Lautensack
          </Typography>
        </Box>
        <Nav />
        <Box
          component="div"
          sx={{
            display: {
              xs: "none", // Hidden on extra small screens
              sm: "none", // Hidden on small screens
              md: "flex", // Visible as flex on medium screens and above
            },
          }}
          className="flex justify-center items-center gap-2 absolute right-0 md:mr-32 lg:mr-56"
        >
          <Link href="https://github.com/MikeLautensack">
            <IconButton color="primary">
              <GitHubIcon className="text-[#E6EDF3] h-6 w-6" />
            </IconButton>
          </Link>
          <Link href="https://www.upwork.com/freelancers/~01089f119f9eb6cd61">
            <IconButton color="primary">
              <SiUpwork className="text-[#0E0E0E] h-6 w-6" />
            </IconButton>
          </Link>
          <Link href="https://www.linkedin.com/in/mike-lautensack/">
            <IconButton color="primary">
              <FaLinkedin className="text-[#0966C2] h-6 w-6" />
            </IconButton>
          </Link>
        </Box>
      </motion.div>
      <div className="lg:hidden w-full flex justify-end items-center">
        <SideBar />
      </div>
    </header>
  );
};

export default Header;
