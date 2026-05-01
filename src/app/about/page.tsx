import type { Metadata } from "next";
import Image from "next/image";

export const dynamic = "force-static"; // 🔒 locks metadata into <head>

export const metadata: Metadata = {
  title: "Cliff Bait | How we got here",
  description: "About Cliff Bait and what came to be",
  keywords: [
    "artificial bait",
    "custom colors",
    "fishing tackle",
    "bass fishing",
    "bass fishing lures",
  ],
  metadataBase: new URL("https://cliffbait.com"), // ✅ FIXED
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "Cliff Bait | How we got here",
    description: "About Cliff Bait and what came to be",
    url: "https://cliffbait.com/about",
    siteName: "Cliff Bait",
    images: [
      {
        url: "https://static.wixstatic.com/media/6f3554_597039e4cbab4fde8c6e203507bd0b3f~mv2.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

const AboutPage = () => {
  return (
    <main className="bg-white text-gray-900">
      <div className="max-w-4xl mx-auto px-6 py-12">

        {/* HERO */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            The Origin of Cliff Bait
          </h1>

          <Image
            src="https://static.wixstatic.com/media/6f3554_14be2dd5a1bc4df580d3dca48e67aaac~mv2.jpg"
            alt="Large bass caught in Florida waters"
            width={1200}
            height={700}
            priority
            className="w-full h-auto rounded-2xl shadow-md"
          />
        </header>

        {/* SECTION */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            A Promise That Started It All
          </h2>

          <p className="mb-4 text-lg leading-relaxed">
            It didn’t start with a business plan. It started with a promise—
            one made to my grandpa: I was going to catch the biggest bass that water had ever seen.
          </p>

          <p className="mb-6 text-lg leading-relaxed">
            Turns out, the fish had other plans.
          </p>

          <Image
            src="https://static.wixstatic.com/media/6f3554_88ba12b99b96404cbf242b532b338d61~mv2.jpg"
            alt="Fishing with grandfather early morning"
            width={1200}
            height={700}
            loading="lazy"
            className="w-full rounded-xl shadow-sm"
          />
        </section>

        {/* Repeat same Image pattern for remaining images */}

        {/* CTA */}
        <section className="mt-16 text-center">
          <h2 className="text-3xl font-bold mb-4">
            CliffBait. Cast. Catch.
          </h2>

          <p className="text-lg mb-6">
            Fish smarter. Catch more. Enjoy every second on the water.
          </p>

          <Image
            src="https://static.wixstatic.com/media/6f3554_77c8d89f320f47e29552f0267fa735d3~mv2.jpg"
            alt="Fish on the water"
            width={1200}
            height={700}
            loading="lazy"
            className="w-full rounded-xl shadow-sm mb-4"
          />

          <a
            href="/list?cat=all-products"
            className="inline-block bg-black text-white px-6 py-3 rounded-xl text-lg font-medium hover:bg-gray-800 transition"
          >
            Shop Baits
          </a>
        </section>

      </div>
    </main>
  );
};

export default AboutPage;