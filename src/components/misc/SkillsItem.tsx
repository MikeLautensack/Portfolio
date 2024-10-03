"use client";

import { Card, Typography } from "@mui/material";
import Image from "next/image";

type SkillsItemProps = {
  skill: string;
  description: string;
  imgSrc?: string;
  imgAlt?: string;
};

const SkillsItem = ({
  skill,
  description,
  imgSrc,
  imgAlt,
}: SkillsItemProps) => {
  return (
    <Card
      component="div"
      className="flex flex-col md:items-center p-4 gap-4"
      sx={{ backgroundColor: "#243B80" }}
    >
      <div className="flex gap-4 w-full justify-start items-center">
        <div className="relative w-6 h-6 lg:w-8 lg:h-8">
          <Image
            src={imgSrc!}
            alt={imgAlt!}
            fill={true}
            //   blurDataURL="data:..." // automatically provided
            //   placeholder="blur" // Optional blur-up while loading
          />
        </div>
        <Typography
          className="text-white"
          sx={{
            typography: {
              xs: "h6", // Small screens
              sm: "h6", // Medium screens
              md: "h5", // Large screens
              lg: "h5", // Extra large screens
            },
          }}
        >
          {skill}
        </Typography>
      </div>
      <div className="flex w-full justify-center items-center"></div>
      <div className="flex gap-4">
        <Typography variant="body2" className="text-white">
          {description}
        </Typography>
      </div>
    </Card>
  );
};

export default SkillsItem;
