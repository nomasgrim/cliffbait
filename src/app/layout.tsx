import type { Metadata } from "next";
import { Inter } from "next/font/google";
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
          {children}
          <Footer />
          <Analytics />
        </WixClintContextProvider>
      </body>
    </html>
  );
}
