"use client";

import React from "react";
import { Button, Typography } from "@mui/material";
import { FormProvider, useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import TextInput from "./TextInput";
import TextAreaInput from "./TextAreaInput";
import MVLAutocomplete from "./MVLAutocomplete";

const HireMeFormSchema = z.object({
  name: z.string(),
  email: z.string(),
  catagory: z.string(),
  message: z.string(),
});

type HireMeFormValues = z.infer<typeof HireMeFormSchema>;

const HireMeForm = () => {
  const methods = useForm<HireMeFormValues>({
    resolver: zodResolver(HireMeFormSchema),
    defaultValues: {
      name: "",
      email: "",
      catagory: "",
      message: "",
    },
  });

  const { handleSubmit } = methods;

  const onSubmit: SubmitHandler<HireMeFormValues> = async (
    formData: HireMeFormValues
  ) => {
    console.log(formData);
    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/email`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        catagory: formData.catagory,
        message: formData.message,
      }),
    });
    console.log("Email endpoint res", res);
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 w-full"
      >
        <TextInput name="name" label="Name" />
        <TextInput name="email" label="Email" />
        <MVLAutocomplete name="catagory" label="Employment Catagory" />
        <TextAreaInput name="message" label="Message" />
        <Button variant="contained" type="submit">
          Send Message
        </Button>
      </form>
    </FormProvider>
  );
};

export default HireMeForm;
