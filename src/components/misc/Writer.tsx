import { Avatar } from "@mui/material";
import React from "react";

type WriterProps = {
  writer: string;
  company: string;
  initial: string;
};

const Writer = ({ writer, company, initial }: WriterProps) => {
  return (
    <div className="flex items-center gap-3">
      <Avatar sx={{ bgcolor: "#31B0E9", color: "#04121A", fontWeight: 700 }}>
        {initial}
      </Avatar>
      <div className="flex flex-col">
        <span className="text-sm font-semibold text-ink">{writer}</span>
        <span className="text-xs text-ink-muted">{company}</span>
      </div>
    </div>
  );
};

export default Writer;
