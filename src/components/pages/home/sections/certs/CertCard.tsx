"use client";

import { Button, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
import { type SanityDocument } from "next-sanity";
import { urlFor } from "@/sanity/lib/image";

type CertCardProps = {
  cert: SanityDocument;
  buttonColor: string;
};

const CertCard = ({ cert, buttonColor }: CertCardProps) => {
  return (
    <div className="flex w-full justify-start items-center gap-4 bg-[#1b2b5e]">
      <div className="relative h-full w-64 aspect-square rounded-full">
        <Image
          src={urlFor(cert?.certImg).url()}
          alt={cert.certName}
          fill={true}
          //   blurDataURL="data:..." // automatically provided
          //   placeholder="blur" // Optional blur-up while loading
        />
      </div>
      <div className="flex flex-col gap-4 justify-start items-start">
        <Typography className="text-white" variant="h4">
          {cert.certName}
        </Typography>
        <Typography className="text-white" variant="h6">
          {cert.certDescription}
        </Typography>
        <div className="flex justify-start items-center gap-16">
          <Typography
            className="text-white"
            variant="body1"
          >{`Issued By: ${cert.issuedBy}`}</Typography>
          <Typography
            className="text-white"
            variant="body2"
          >{`Issued On: ${format(cert.issuedOn, "MMMM yyyy")}`}</Typography>
        </div>
        <Typography
          className="text-white"
          variant="body1"
        >{`Certification ID: ${cert._id}`}</Typography>
        <Link href={cert.certURL}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: buttonColor ? buttonColor : "secondary",
              color: "white",
            }}
          >
            View Certification
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default CertCard;
