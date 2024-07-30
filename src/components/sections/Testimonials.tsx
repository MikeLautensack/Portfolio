import { Box, Typography } from "@mui/material";
import React from "react";
import Testimonial from "../misc/Testimonial";

const Testimonials = () => {
  return (
    <Box
      component="div"
      className="flex flex-col gap-8 justify-start items-start px-8 py-4 md:min-h-screen md:px-32 md:py-20 bg-[#001824]"
    >
      <Typography
        variant="h4"
        className="w-max border-b-[3px] border-[#FF8D25] text-white"
      >
        Testimonials
      </Typography>
      <Box
        component="div"
        className="flex flex-col gap-8 justify-start items-start"
      >
        <Testimonial
          rating={5}
          testimonial="Mike is a great React Developer who embodies a commitment to understanding best practices and aligning with industry standards. His meticulous approach to learning and implementing these principles ensures that our projects maintain the highest levels of quality and efficiency. Mike's dedication to staying informed about the latest developments in React and related technologies sets him apart as a forward-thinking professional. With his attention to detail and focus on excellence, Mike consistently delivers exceptional results, making him an invaluable asset to our team."
          writer="Lonny B."
          company="Software Harmonics LLC"
          initial="L"
        />
      </Box>
    </Box>
  );
};

export default Testimonials;
