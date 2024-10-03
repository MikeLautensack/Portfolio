import React from "react";
import Image from "next/image";

type ProjectCardImgProps = {
  imgSrc?: string;
  imgAlt?: string;
};

const ProjectCardImg = ({ imgSrc, imgAlt }: ProjectCardImgProps) => {
  return (
    <div className="relative h-full">
      <div className="w-full">
        <Image
          src={imgSrc!}
          alt={imgAlt!}
          fill={true}
          //   blurDataURL="data:..." // automatically provided
          //   placeholder="blur" // Optional blur-up while loading
        />
      </div>
    </div>
  );
};

export default ProjectCardImg;
