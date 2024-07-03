import { Avatar, Box, Typography } from "@mui/material";
import React from "react";

type WriterProps = {
  writer: string;
  company: string;
  initial: string;
};

const Writer = ({ writer, company, initial }: WriterProps) => {
  return (
    <Box component="div" className="flex gap-2 justify-center items-center">
      <Avatar className="bg-[#002834]">{initial}</Avatar>
      <Box component="div" className="flex flex-col">
        <Typography variant="body1" className="text-white" fontFamily="lato">
          {writer}
        </Typography>
        <Typography variant="body2" className="text-white" fontFamily="lato">
          {company}
        </Typography>
      </Box>
    </Box>
  );
};

export default Writer;
