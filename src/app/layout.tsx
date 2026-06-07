import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import ThemeProviderWrapper from "@/components/misc/ThemeProviderWrapper";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import InitColorSchemeScript from "@mui/material/InitColorSchemeScript";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mike Lautensack — Full-Stack Web Developer",
  description:
    "Portfolio of Mike Lautensack, a self-taught full-stack web developer specializing in TypeScript, React, and Next.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <InitColorSchemeScript />
        <AppRouterCacheProvider>
          <ThemeProviderWrapper>
            <Header />
            {children}
            <Footer />
          </ThemeProviderWrapper>
        </AppRouterCacheProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
