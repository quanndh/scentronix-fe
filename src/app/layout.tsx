"use client";

import Navbar from "@/components/Navbar";
import { Inter } from "next/font/google";
import { Suspense } from "react";
import { ThemeProvider } from "@mui/material";
import theme from "@/constants/theme";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ThemeProvider theme={theme}>
        <body className={inter.className}>
          <Navbar />
          <Suspense>
            <main>{children}</main>
          </Suspense>
        </body>
      </ThemeProvider>
    </html>
  );
}
