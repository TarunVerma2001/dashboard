"use client";
import "./globals.css";

import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({ children }) {
  return (
    <html className={`${poppins.variable}`} lang="en" suppressHydrationWarning>
      <head />
      <body className={cn("min-h-screen  poppins font-sans antialiased ")}>
        {children}
      </body>
    </html>
  );
}
