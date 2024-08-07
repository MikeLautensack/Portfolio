import { Box } from "@mui/material";
import React from "react";
import Image from "next/image";

type ProjectCardImgProps = {
  imgSrc?: string;
  imgAlt?: string;
};

const ProjectCardImg = ({ imgSrc, imgAlt }: ProjectCardImgProps) => {
  return (
    <Box component="div" className="relative h-full w-full aspect-video">
      <Image
        src={imgSrc!}
        alt={imgAlt!}
        fill={true}
        //   blurDataURL="data:..." // automatically provided
        //   placeholder="blur" // Optional blur-up while loading
      />
    </Box>
  );
};

export default ProjectCardImg;
