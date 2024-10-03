"use client";

import { Button, Card, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";

type CertCardProps = {
  name: string;
  description: string;
  issuedBy: string;
  issuedOn: Date;
  certID?: string;
  certURL?: string;
  img: string;
  imgAlt: string;
};

const CertCard = ({
  name,
  description,
  issuedOn,
  issuedBy,
  certID,
  certURL,
  img,
  imgAlt,
}: CertCardProps) => {
  return (
    <div className="flex w-full justify-start items-center gap-4 bg-[#1b2b5e]">
      <div className="relative h-full w-64 aspect-square rounded-full">
        <Image
          src={img}
          alt={imgAlt}
          fill={true}
          //   blurDataURL="data:..." // automatically provided
          //   placeholder="blur" // Optional blur-up while loading
        />
      </div>
      <div className="flex flex-col gap-4 justify-start items-start">
        <Typography className="text-white" variant="h4">
          {name}
        </Typography>
        <Typography className="text-white" variant="h6">
          {description}
        </Typography>
        <div className="flex justify-start items-center gap-16">
          <Typography
            className="text-white"
            variant="body1"
          >{`Issued By: ${issuedBy}`}</Typography>
          <Typography
            className="text-white"
            variant="body2"
          >{`Issued On: ${format(issuedOn, "MMMM yyyy")}`}</Typography>
        </div>
        <Typography
          className="text-white"
          variant="body1"
        >{`Certification ID: ${certID}`}</Typography>
        <Link href={certURL!}>
          <Button variant="contained" color="secondary">
            View Certification
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default CertCard;
