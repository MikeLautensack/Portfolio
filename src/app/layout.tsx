import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeProviderWrapper from "@/components/misc/ThemeProviderWrapper";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import InitColorSchemeScript from "@mui/material/InitColorSchemeScript";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mike's Portfolio",
  description: "Mikes web developer portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <InitColorSchemeScript />
        <AppRouterCacheProvider>
          <ThemeProviderWrapper>
            <Header />
            {children}
          </ThemeProviderWrapper>
        </AppRouterCacheProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
