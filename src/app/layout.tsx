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
  title: "Cliff Bait",
  description: "Bait, fish will swim off a cliff for",
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
