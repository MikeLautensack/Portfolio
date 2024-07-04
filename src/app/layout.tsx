import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeProviderWrapper from "@/components/misc/ThemeProviderWrapper";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import InitColorSchemeScript from "@mui/material/InitColorSchemeScript";

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
    <html lang="en">
      <body className={inter.className}>
        <InitColorSchemeScript />
        <AppRouterCacheProvider>
          <ThemeProviderWrapper>{children}</ThemeProviderWrapper>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
