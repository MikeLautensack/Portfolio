"use client";

import React, { useState } from "react";
import { Button, CircularProgress, Typography } from "@mui/material";
import { FormProvider, useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import TextInput from "./TextInput";
import TextAreaInput from "./TextAreaInput";
import MVLAutocomplete from "./MVLAutocomplete";

const HireMeEmailFormSchema = z.object({
  name: z.string(),
  email: z.string(),
  catagory: z.string(),
  message: z.string(),
});

type HireMeEmailFormValues = z.infer<typeof HireMeEmailFormSchema>;

type LoadingState = "" | "loading" | "sent" | "error";

const HireMeEmailForm = () => {
  // Hooks
  const methods = useForm<HireMeEmailFormValues>({
    resolver: zodResolver(HireMeEmailFormSchema),
    defaultValues: {
      name: "",
      email: "",
      catagory: "",
      message: "",
    },
  });

  const { handleSubmit } = methods;

  // State
  const [loadingState, setLoadingState] = useState<LoadingState>("");

  // Submit function
  const onSubmit: SubmitHandler<HireMeEmailFormValues> = async (
    formData: HireMeEmailFormValues
  ) => {
    console.log(formData);
    setLoadingState("loading");
    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}api/email`, {
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
    if (res.status === 200) {
      setLoadingState("sent");
    } else {
      setLoadingState("error");
    }
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
        <Button
          variant="contained"
          type="submit"
          color={
            loadingState === ""
              ? "secondary"
              : loadingState === "loading"
              ? "secondary"
              : loadingState === "error"
              ? "error"
              : "success"
          }
        >
          {loadingState === "" ? (
            <Typography color="#001824" variant="h6" sx={{ fontWeight: "600" }}>
              Send Message
            </Typography>
          ) : loadingState === "loading" ? (
            <CircularProgress sx={{ color: "#001824" }} />
          ) : loadingState === "error" ? (
            <Typography color="#001824" variant="h6" sx={{ fontWeight: "600" }}>
              Error
            </Typography>
          ) : (
            loadingState === "sent" && (
              <Typography
                color="#001824"
                variant="h6"
                sx={{ fontWeight: "600" }}
              >
                Message Sent!
              </Typography>
            )
          )}
        </Button>
      </form>
    </FormProvider>
  );
};

export default HireMeEmailForm;
