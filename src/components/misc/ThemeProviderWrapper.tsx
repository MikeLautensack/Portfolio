"use client";

import React from "react";
import theme from "@/theme";
import { Box, CssBaseline, Paper, ThemeProvider } from "@mui/material";

type ThemeProviderWrapperProps = {
  children: React.ReactNode;
};

const ThemeProviderWrapper = ({ children }: ThemeProviderWrapperProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Paper square>{children}</Paper>
    </ThemeProvider>
  );
};

export default ThemeProviderWrapper;
