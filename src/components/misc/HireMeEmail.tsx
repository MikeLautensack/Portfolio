import { Box } from "@mui/material";
import React from "react";
import { Html, Text, Heading } from "@react-email/components";

type HireMeEmailProps = {
  name: string;
  email: string;
  catagory: string;
  message: string;
};

const HireMeEmail = ({ name, email, catagory, message }: HireMeEmailProps) => {
  return (
    <Html lang="en">
      <Heading as="h2">Name</Heading>
      <Text>{name}</Text>
      <Heading as="h2">Email</Heading>
      <Text>{email}</Text>
      <Heading as="h2">Catagory</Heading>
      <Text>{catagory}</Text>
      <Heading as="h2">Message</Heading>
      <Text>{message}</Text>
    </Html>
  );
};

export default HireMeEmail;
