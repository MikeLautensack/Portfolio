import { Box, Typography } from "@mui/material";
import React from "react";
import Nav from "./Nav";
import GitHubIcon from "@mui/icons-material/GitHub";
import Link from "next/link";
import { SiUpwork } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";

const Header = () => {
  return (
    <Box
      component="header"
      className="w-full h-14 flex justify-center items-center bg-[#001824] sticky top-0 z-20"
    >
      <Box
        component="div"
        className="absolute left-0 md:ml-32 flex gap-2"
        sx={{
          display: {
            xs: "none", // Hidden on extra small screens
            sm: "none", // Hidden on small screens
            md: "flex", // Visible as flex on medium screens and above
          },
        }}
      >
        <Typography variant="h5" color="#FF8D25">
          Mike
        </Typography>
        <Typography variant="h5">Lautensack</Typography>
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
        className="flex justify-center items-center gap-4 absolute right-0 md:mr-32"
      >
        <Link href="https://github.com/MikeLautensack">
          <div className="flex justify-center items-center">
            <GitHubIcon className="text-[#E6EDF3] h-6 w-6" />
          </div>
        </Link>
        <Link href="https://www.upwork.com/freelancers/~01089f119f9eb6cd61">
          <div className="flex justify-center items-center">
            <SiUpwork className="text-[#13A800] h-6 w-6" />
          </div>
        </Link>
        <Link href="https://www.linkedin.com/in/mike-lautensack/">
          <div className="flex justify-center items-center">
            <FaLinkedin className="text-[#0966C2] h-6 w-6" />
          </div>
        </Link>
      </Box>
    </Box>
  );
};

export default Header;
