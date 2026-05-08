import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { WixClintContextProvider } from "@/context/wixContext";
import { Analytics } from '@vercel/analytics/next';

import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";

import "./globals.css";
import AnalyticsProvider from "@/analytics/AnalyticsProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cliff Bait | Turn Casts Into Strikes",
  description: "Handmade lures dialed in for one thing only: getting crushed. Tried, tested, and approved by anglers who live for the strike.",
  keywords: ['artificial bait', 'custom colors', 'fishing tackle', 'bass fishing', 'bass fishing lures'],
  metadataBase: new URL('https://cliffbait.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Cliff Bait | Turn Casts Into Strikes",
    description: "Handmade lures dialed in for one thing only: getting crushed. Tried, tested, and approved by anglers who live for the strike.",
    url: 'https://cliffbait.com',
    siteName: 'Cliff Bait',
    images: [
      {
        url: '/og-cliffbait.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <WixClintContextProvider>
          <AnalyticsProvider>
            <NavBar />
            <div className="pt-[80px] md:pt-0">
              {children}
            </div>
            <Footer />
            <Analytics />
          </AnalyticsProvider>
        </WixClintContextProvider>
      </body>
    </html>
  );
}
