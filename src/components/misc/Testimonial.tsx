import { Box, Rating, Typography } from "@mui/material";
import React from "react";
import Writer from "./Writer";

type TestimonialProps = {
  rating: number;
  testimonial: string;
  writer: string;
  company: string;
  initial: string;
};

const Testimonial = ({
  rating,
  testimonial,
  writer,
  company,
  initial,
}: TestimonialProps) => {
  return (
    <Box
      component="div"
      className="bg-[#0b2a39] w-full flex flex-col gap-4 justify-start items-start p-4"
    >
      <Rating value={rating} readOnly />
      <Typography variant="body1" className="text-white">
        {testimonial}
      </Typography>
      <Writer writer={writer} company={company} initial={initial} />
    </Box>
  );
};

export default Testimonial;
