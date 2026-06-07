"use client";

import React from "react";
import Image from "next/image";

type SkillsItemProps = {
  skill: string;
  description: string;
  imgSrc?: string;
  imgAlt?: string;
};

const SkillsItem = ({ skill, description, imgSrc, imgAlt }: SkillsItemProps) => {
  return (
    <div className="group flex h-full flex-col gap-3 rounded-2xl border border-line bg-surface/60 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:bg-surface">
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl border border-line bg-bg/50">
          <div className="relative h-6 w-6">
            <Image
              src={imgSrc!}
              alt={imgAlt!}
              fill
              className="object-contain"
            />
          </div>
        </div>
        <h3 className="text-base font-semibold text-ink md:text-lg">{skill}</h3>
      </div>
      <p className="text-sm leading-relaxed text-ink-muted">{description}</p>
    </div>
  );
};

export default SkillsItem;
