import React from "react";
import Image from "next/image";

type ProjectCardImgProps = {
  imgSrc?: string;
  imgAlt?: string;
};

const ProjectCardImg = ({ imgSrc, imgAlt }: ProjectCardImgProps) => {
  return (
    <div className="w-full aspect-video flex-1">
      <div className="w-full h-full relative">
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
