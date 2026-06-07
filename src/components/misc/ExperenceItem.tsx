import React from "react";

type ExperienceItemProps = {
  num: string;
  job: string;
  company: string;
  date: string;
  bullets: string[];
};

const ExperienceItem = ({
  num,
  job,
  company,
  date,
  bullets,
}: ExperienceItemProps) => {
  return (
    <div className="group w-full rounded-2xl border border-line bg-surface/60 p-6 transition-colors duration-300 hover:border-line-strong md:p-7">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-sm text-accent">{num}</span>
            <h3 className="text-lg font-semibold leading-snug text-ink md:text-xl">
              {job} <span className="text-accent">{company}</span>
            </h3>
          </div>
          <span className="whitespace-nowrap font-mono text-xs text-ink-faint md:text-sm">
            {date}
          </span>
        </div>
        <ul className="flex flex-col gap-2.5">
          {bullets.map((bullet, index) => (
            <li
              key={index}
              className="flex gap-3 text-sm leading-relaxed text-ink-muted"
            >
              <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent/70" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceItem;
