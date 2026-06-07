"use client";

import { Button } from "@mui/material";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";

type CertCardProps = {
  name: string;
  description: string;
  issuedBy?: string;
  issuedOn?: Date;
  certID?: string;
  certURL?: string;
  img: string;
  imgAlt: string;
  buttonColor?: string;
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
    <div className="flex w-full flex-col gap-6 rounded-2xl border border-line bg-surface/60 p-6 md:flex-row md:items-center md:p-8">
      <div className="flex h-24 w-24 flex-shrink-0 items-center justify-center rounded-2xl border border-line bg-bg/50 p-4">
        <div className="relative h-full w-full">
          <Image src={img} alt={imgAlt} fill className="object-contain" />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <h3 className="text-xl font-bold text-ink md:text-2xl">{name}</h3>
        <p className="text-sm text-ink-muted">{description}</p>
        <div className="flex flex-wrap gap-x-6 gap-y-1 font-mono text-xs text-ink-faint">
          {issuedBy && <span>Issued by {issuedBy}</span>}
          {issuedOn && <span>{format(issuedOn, "MMMM yyyy")}</span>}
          {certID && <span className="break-all">ID: {certID}</span>}
        </div>
        {certURL && (
          <Link href={certURL} className="pt-1">
            <Button
              variant="outlined"
              size="small"
              sx={{
                borderColor: "rgba(255,255,255,0.18)",
                color: "#E7ECF2",
                "&:hover": {
                  borderColor: "#31B0E9",
                  backgroundColor: "rgba(49,176,233,0.08)",
                },
              }}
            >
              View Certification
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default CertCard;
