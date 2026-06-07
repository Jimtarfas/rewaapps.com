import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Rewa App — Software Development & Design Agency",
    template: "%s | Rewa App",
  },
  description:
    "Rewa App is a software development and design agency. We build web apps, mobile apps, API integrations, and custom software solutions for businesses worldwide.",
  keywords: [
    "Rewa App",
    "software development",
    "web development",
    "mobile app development",
    "UI UX design",
    "API integration",
    "custom software",
    "development agency",
  ],
  openGraph: {
    title: "Rewa App — Software Development & Design Agency",
    description:
      "Full-service development and design agency building web apps, mobile apps, and custom software solutions.",
    url: "https://rewaapps.com",
    siteName: "Rewa App",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rewa App — Software Development & Design Agency",
    description:
      "Full-service development and design agency building web apps, mobile apps, and custom software solutions.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
