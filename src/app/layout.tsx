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
    default: "Rewa Apps — Business Messaging & Technology Solutions",
    template: "%s | Rewa Apps",
  },
  description:
    "Rewa Apps is a technology solutions agency specializing in business messaging, WhatsApp Business API integration, CRM solutions, and custom software development. Official Meta Tech Provider.",
  keywords: [
    "Rewa Apps",
    "WhatsApp Business API",
    "business messaging",
    "Meta Tech Provider",
    "CRM integration",
    "software development",
    "technology solutions",
  ],
  openGraph: {
    title: "Rewa Apps — Business Messaging & Technology Solutions",
    description:
      "Technology solutions agency specializing in business messaging, WhatsApp Business API, and custom software development.",
    url: "https://rewaapps.com",
    siteName: "Rewa Apps",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rewa Apps — Business Messaging & Technology Solutions",
    description:
      "Technology solutions agency specializing in business messaging, WhatsApp Business API, and custom software development.",
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
