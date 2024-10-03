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
      className="flex flex-col md:flex-row md:items-center md:h-32 p-4 gap-4"
      sx={{ backgroundColor: "#243B80" }}
    >
      <div className="flex gap-4 w-full h-full">
        <div className="hidden md:flex relative aspect-square">
          <Image
            src={imgSrc!}
            alt={imgAlt!}
            fill={true}
            //   blurDataURL="data:..." // automatically provided
            //   placeholder="blur" // Optional blur-up while loading
          />
        </div>
        <div className="w-full">
          <Typography className="text-white" variant="h4">
            {skill}
          </Typography>
        </div>
      </div>
      <div className="flex md:hidden w-full justify-center items-center">
        <div className="w-16 aspect-square relative">
          <Image
            src={imgSrc!}
            alt={imgAlt!}
            fill={true}
            //   blurDataURL="data:..." // automatically provided
            //   placeholder="blur" // Optional blur-up while loading
          />
        </div>
      </div>
      <div className="flex gap-4">
        <div className="flex-1">
          <Typography variant="body2" className="text-white">
            {description}
          </Typography>
        </div>
      </div>
    </Card>
  );
};

export default SkillsItem;
