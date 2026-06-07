import React from "react";

type SpecItemProps = {
  heading: string;
  name?: string;
  icon: React.ReactNode;
};

const SpecItem = ({ heading, name, icon }: SpecItemProps) => {
  return (
    <div className="flex items-center justify-between gap-3 border-b border-line py-3 last:border-0">
      <span className="text-xs uppercase tracking-wide text-ink-faint">
        {heading}
      </span>
      <span className="flex items-center gap-2 text-right text-sm font-medium text-ink">
        <span className="flex h-4 w-4 items-center justify-center [&>svg]:h-4 [&>svg]:w-4">
          {icon}
        </span>
        {name}
      </span>
    </div>
  );
};

export default SpecItem;
