import { Box, List, Typography, ListItem } from "@mui/material";
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
    <div className="flex flex-col gap-2">
      <Box className="flex justify-between">
        <div className="flex gap-2">
          <Typography className="text-[#31B0E9] text-sm md:text-base">
            {num}
          </Typography>
          <Typography className="text-white text-sm md:text-base">
            {job}
          </Typography>
          <Typography className="text-[#31B0E9] text-sm md:text-base">
            {company}
          </Typography>
        </div>
        <Typography className="text-white text-sm md:text-base">
          {date}
        </Typography>
      </Box>
      <List className="pl-12" dense disablePadding>
        {bullets.map((bullet, index) => (
          <ListItem key={index} disableGutters className="py-0.5 ml-9">
            <Typography className="text-white text-sm">{`• ${bullet}`}</Typography>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default ExperienceItem;
