import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import StickyContactWidget from "@/components/StickyContactWidget";
import { companyInfo } from "@/data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${companyInfo.name} - ${companyInfo.tagline}`,
  description: companyInfo.visionMission.mission,
  keywords: ["IT services", "web development", "mobile app development", "custom software", "React", "Node.js", "Flutter", "Laravel"],
  authors: [{ name: companyInfo.name }],
  openGraph: {
    title: `${companyInfo.name} - ${companyInfo.tagline}`,
    description: companyInfo.visionMission.mission,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${companyInfo.name} - ${companyInfo.tagline}`,
    description: companyInfo.visionMission.mission,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main className="relative">
          {children}
        </main>
        <Footer />
        <StickyContactWidget />
      </body>
    </html>
  );
}
