import type { Metadata } from "next";
import { Changa_One, Geist_Mono, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const changaOne = Changa_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-changa-one",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio | Your Name",
  description: "Frontend developer portfolio — projects, experience, and blog.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "scroll-smooth", "antialiased", changaOne.variable, geistMono.variable, "font-sans", geist.variable)}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
