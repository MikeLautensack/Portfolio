import { Rating, Typography } from "@mui/material";
import React from "react";
import Writer from "./Writer";
import { FaQuoteLeft } from "react-icons/fa6";

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
    <div className="w-full rounded-2xl border border-line bg-surface/60 p-6 md:p-8">
      <FaQuoteLeft className="mb-4 text-2xl text-accent/50" />
      <Rating
        value={rating}
        readOnly
        size="small"
        sx={{ color: "#31B0E9", mb: 2 }}
      />
      <Typography
        variant="body1"
        className="leading-relaxed text-ink-muted md:text-lg"
      >
        “{testimonial}”
      </Typography>
      <div className="mt-6">
        <Writer writer={writer} company={company} initial={initial} />
      </div>
    </div>
  );
};

export default Testimonial;
