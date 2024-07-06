"use client";

import { Autocomplete, Box, TextField } from "@mui/material";
import React from "react";
import { useController, useFormContext } from "react-hook-form";

type MVLAutocompleteProps = {
  name: string;
  label?: string;
};

const MVLAutocomplete = ({ name, label }: MVLAutocompleteProps) => {
  // Hooks
  const {
    control,
    formState: { errors },
    setValue,
  } = useFormContext();

  const { field } = useController({
    control,
    name,
    defaultValue: {},
  });

  return (
    <Box component="div" className="">
      <Autocomplete
        disablePortal
        options={["Fulltime", "Parttime", "Contract", "Intership"]}
        sx={{ backgroundColor: "surfaceContainerHighest" }}
        renderInput={(params) => <TextField {...params} label={label} />}
        onChange={(_, value: string) => {
          setValue(name, value);
        }}
        value={field ? field.value : ""}
      />
    </Box>
  );
};

export default MVLAutocomplete;
