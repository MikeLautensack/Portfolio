import { Typography } from "@mui/material";
import React from "react";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  align?: "left" | "center";
};

const SectionHeading = ({
  eyebrow,
  title,
  align = "left",
}: SectionHeadingProps) => {
  return (
    <div
      className={`flex flex-col gap-3 ${
        align === "center" ? "items-center text-center" : "items-start"
      }`}
    >
      {eyebrow && (
        <span className="flex items-center gap-2 font-mono text-xs md:text-sm uppercase tracking-[0.22em] text-accent">
          <span className="h-px w-6 bg-accent/60" />
          {eyebrow}
        </span>
      )}
      <Typography
        variant="h3"
        className="text-ink font-extrabold text-3xl md:text-[2.5rem] leading-tight"
      >
        {title}
      </Typography>
    </div>
  );
};

export default SectionHeading;
