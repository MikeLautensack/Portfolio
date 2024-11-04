import { Box, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import { BulletPointType } from "../../../misc/ProjectCard";

type ProjectSummaryCardProps = {
  imgSrc: string;
  imgAlt: string;
  bullets?: BulletPointType[];
};

const ProjectSummaryCard = ({
  imgSrc,
  imgAlt,
  bullets,
}: ProjectSummaryCardProps) => {
  return (
    <Box
      component="div"
      className="w-full h-full flex flex-col md:flex-row justify-start items-center gap-4 p-4"
    >
      <Box
        component="div"
        className="flex flex-col justify-start items-start gap-2 w-full h-full"
      >
        {bullets?.map((bullet: BulletPointType) => (
          <Typography key={bullet.id} className="text-white">
            {bullet.text}
          </Typography>
        ))}
      </Box>
      <Box component="div" className="relative w-full h-full aspect-video">
        <Image
          src={imgSrc}
          alt={imgAlt}
          fill={true}
          //   blurDataURL="data:..." // automatically provided
          //   placeholder="blur" // Optional blur-up while loading
        />
      </Box>
    </Box>
  );
};

export default ProjectSummaryCard;
