import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta-sans",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#007A55",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: {
    default: "Dublin Handyman Services | Professional Home Maintenance",
    template: "%s | Dublin Handyman Services",
  },
  description:
    "Professional handyman services in Dublin. Reliable, skilled, and affordable solutions for all your home repair, plumbing, electrical, and maintenance needs.",
  keywords: [
    "Handyman Dublin",
    "Home maintenance Dublin",
    "Dublin property repair",
    "Local handyman Ireland",
    "Emergency home repairs",
    "Plumbing and electrical Dublin",
  ],
  authors: [{ name: "Dublin Handyman Services" }],
  creator: "Dublin Handyman Services",
  publisher: "Dublin Handyman Services",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  metadataBase: new URL("https://www.dublinhandymanservices.ie"), // Replace with your actual domain
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Dublin Handyman Services | Professional Home Maintenance",
    description:
      "Reliable, skilled, and affordable handyman solutions for all your home maintenance needs in Dublin. Get a free quote today!",
    url: "https://www.dublinhandymanservices.ie",
    siteName: "Dublin Handyman Services",
    images: [
      {
        url: "/og-image.jpg", // Place a 1200x630px image in your public folder
        width: 1200,
        height: 630,
        alt: "Dublin Handyman Services",
      },
    ],
    locale: "en_IE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dublin Handyman Services | Professional Home Maintenance",
    description:
      "Reliable, skilled, and affordable handyman solutions for all your home maintenance needs in Dublin.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [{ url: "/favicon.ico" }, { url: "/icon.png", type: "image/png" }],
    apple: [{ url: "/apple-icon.png" }],
  },
  // verification: {
  //   google: "your-google-verification-code",
  // },
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
      className={`${jakartaSans.variable} h-full antialiased`}
    >
      <body className="font-sans antialiased bg-slate-50 text-emerald-900 min-h-screen overscroll-none">
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
