import { Box, Card, Rating, Typography } from "@mui/material";
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
    <Card
      component="div"
      className="w-full flex flex-col gap-4 justify-start items-start p-4 rounded-sm"
      sx={{ backgroundColor: "#0b2a39" }}
    >
      <Rating value={rating} readOnly />
      <Typography variant="body1" className="text-white">
        {testimonial}
      </Typography>
      <Writer writer={writer} company={company} initial={initial} />
    </Card>
  );
};

export default Testimonial;
