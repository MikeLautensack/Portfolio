import Writer from "@/components/misc/Writer";
import { Rating, Typography } from "@mui/material";
import React from "react";

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
    <div className="w-full flex flex-col gap-2 justify-start items-start">
      <Rating value={rating} readOnly />
      <Typography variant="body1" className="text-white">
        {testimonial}
      </Typography>
      <Writer writer={writer} company={company} initial={initial} />
    </div>
  );
};

export default Testimonial;
