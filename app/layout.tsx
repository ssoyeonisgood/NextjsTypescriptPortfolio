import type { Metadata } from "next";
import { Changa_One, Geist_Mono } from "next/font/google";
import "animate.css";
import "./globals.css";

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
      className={`${changaOne.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
