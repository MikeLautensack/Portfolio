import { Button, Card, Typography } from "@mui/material";
import React from "react";

type HighlightCardProps = {
  heading: string;
  body: string;
  buttonText?: string;
  children?: React.ReactNode;
};

const HighlightCard = ({
  heading,
  body,
  buttonText,
  children,
}: HighlightCardProps) => {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem",
        backgroundColor: "#803789",
        width: "20rem",
        height: "16rem",
      }}
    >
      <div className="flex flex-col justify-start items-center gap-6">
        <div className="w-full h-16">
          <Typography align="center" variant="h6" color="white">
            {heading}
          </Typography>
        </div>
        <div className="h-10 flex justify-center items-center">{children}</div>
        <Typography align="center" variant="body2" color="white">
          {body}
        </Typography>
      </div>
      {buttonText && (
        <Button variant="contained" color="secondary" className="w-full">
          <Typography variant="button" color="white">
            {buttonText}
          </Typography>
        </Button>
      )}
    </Card>
  );
};

export default HighlightCard;
