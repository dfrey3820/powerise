import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ScrollProgress";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const space = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap"
});

export const viewport: Viewport = {
  themeColor: "#050a08",
  width: "device-width",
  initialScale: 1
};

export const metadata: Metadata = {
  metadataBase: new URL("https://powerise.co.ke"),
  title: {
    default: "Powerise Solutions — Intelligent IoT for a Connected Africa",
    template: "%s · Powerise Solutions"
  },
  description:
    "Powerise Solutions Limited designs and deploys IoT platforms for utility monitoring, cold-chain integrity and smart-home automation across East Africa.",
  keywords: [
    "IoT Kenya",
    "Smart Home Nairobi",
    "Cold chain monitoring",
    "Utility monitoring",
    "Powerise",
    "Smart meters",
    "Genset monitoring"
  ],
  authors: [{ name: "Powerise Solutions Limited" }],
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: "https://powerise.co.ke",
    siteName: "Powerise Solutions",
    title: "Powerise Solutions — Intelligent IoT for a Connected Africa",
    description:
      "Utility monitoring, cold-chain integrity and smart-home automation. Powered by data, engineered for resilience."
  },
  twitter: {
    card: "summary_large_image",
    title: "Powerise Solutions — Intelligent IoT",
    description:
      "Utility monitoring, cold-chain integrity and smart-home automation."
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${space.variable}`}>
      <body className="antialiased">
        <ScrollProgress />
        <Navbar />
        <main className="relative min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
