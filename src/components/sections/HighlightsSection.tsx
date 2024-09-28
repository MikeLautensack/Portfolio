import React from "react";
import HighlightCard from "../misc/HighlightCard";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { Typography } from "@mui/material";

const HighlightsSection = () => {
  return (
    <section className="flex flex-col md:flex-row justify-center items-center gap-12 px-8 lg:px-32 py-16 bg-[#001824]">
      <HighlightCard
        heading="Top Rated on Upwork!"
        body="I am a top rated freelanced on upwork"
      >
        <Typography variant="h6">⭐⭐⭐⭐⭐</Typography>
      </HighlightCard>
      <HighlightCard
        heading="10K Earnings on Upwork!"
        body="I have made over $10,000 on Upwork working on React.js and Three.js projects."
      >
        <Typography variant="h3">💵</Typography>
      </HighlightCard>
      <HighlightCard
        heading="100% Job Success Score on Upwork"
        body="I have achived a 100% job succsess score on Upwork!"
      >
        <Typography variant="h3">💯</Typography>
      </HighlightCard>
      {/* <HighlightCard heading="Test 2" body="test 1" /> */}
    </section>
  );
};

export default HighlightsSection;
