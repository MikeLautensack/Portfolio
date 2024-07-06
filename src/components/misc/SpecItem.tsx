import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import StackItem from "./StackItem";

type SpecItemProps = {
  heading: string;
  name?: string;
  icon: React.ReactNode;
};

const SpecItem = ({ heading, name, icon }: SpecItemProps) => {
  return (
    <Box className="flex flex-col gap-3 w-full items-start">
      <Typography
        variant="h5"
        className="text-white border-b-[2px] border-white"
      >
        {heading}
      </Typography>
      <StackItem name={name} icon={icon} />
    </Box>
  );
};

export default SpecItem;
