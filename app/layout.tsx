import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const geistSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta-sans",
  subsets: ["latin"],
});

const geistMono = Plus_Jakarta_Sans({
  variable: "--font-jakarta-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dublin Handyman Services",
  description:
    "Professional handyman services in Dublin. Reliable, skilled, and affordable solutions for all your home maintenance needs.",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-transparent`}
      >
        {children}
      </body>
    </html>
  );
}
