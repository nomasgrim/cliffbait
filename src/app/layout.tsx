import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GoogleTagManager } from '@next/third-parties/google';
import { Analytics } from '@vercel/analytics/next';

import "./globals.css";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { WixClintContextProvider } from "@/context/wixContext";

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
          <NavBar />
          <div className="pt-[80px] md:pt-0">
            {children}
          </div>
          <Footer />
          <Analytics />
          <GoogleTagManager gtmId="G-RWF6QJ8RVQ" />
        </WixClintContextProvider>
      </body>
    </html>
  );
}
