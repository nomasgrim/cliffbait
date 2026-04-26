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
  title: "Cliff Bait | Artificial Bass Lures",
  description: "Bait, fish will swim off a cliff for. Specialized for Bass.",
  keywords: ['artificial bait', 'custom colors', 'fishing tackle', 'bass fishing', 'bass fishing lures'],
  openGraph: {
    title: 'Artificial Bass Lures',
    description: 'Bait, fish will swim off a cliff for. Specialized for Bass.',
    url: 'https://www.cliffbait.com',
    siteName: 'Cliff Bait',
    images: [
      'https://static.wixstatic.com/media/6f3554_597039e4cbab4fde8c6e203507bd0b3f~mv2.png',
      'https://static.wixstatic.com/media/6f3554_2633a2d9f2664c16890dba793a197cd1~mv2.png'
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
