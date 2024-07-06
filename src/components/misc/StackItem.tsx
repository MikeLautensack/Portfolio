import { Box, Typography } from "@mui/material";
import React from "react";

type StackItemProps = {
  name?: string;
  icon: React.ReactNode;
};

const StackItem = ({ name, icon }: StackItemProps) => {
  return (
    <Box component="div" className="flex justify-center items-center gap-2">
      <Typography variant="body1" className="text-white">
        {icon}
      </Typography>
      <Typography variant="body1" className="text-white">
        {name}
      </Typography>
    </Box>
  );
};

export default StackItem;
