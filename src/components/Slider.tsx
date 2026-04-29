"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useSwipeable } from "react-swipeable";

type Slide = {
  title: string;
  description: string;
  cta: string;
  image: string;
  link: string;
  alt: string;
};

const slides: Slide[] = [
  {
    title: "Bass Love It!",
    description:
      "Lures discovered through trials and tribulations. You'll only find lures that work. You're welcome!",
    cta: "Shop Baits",
    image: "https://static.wixstatic.com/media/6f3554_7d92ccaad5984623bc69d8c8132a3654~mv2.jpg",
    link: "/list?cat=all-products",
    alt: "Largemouth bass caught using a Cliff Bait soft plastic lure in Florida freshwater",
  },
  {
    title: "The Big Red Worm",
    description: "Clifford's Big Red Worm. Bass gobble it up. A color dialed in to trigger a monster bite!",
    cta: "Get Yours",
    image: "https://static.wixstatic.com/media/6f3554_5b336b97d136431bbab5dc39f492d317~mv2.jpg",
    link: "/clifford-s-big-red-worm",
    alt: "Top selling soft plastic bass fishing lures from Cliff Bait laid out for selection",
  },
  {
    title: "How'd we get here?",
    description: "It's about delivering on a promise, catching fish and sharing what works.",
    cta: "Read more",
    image: "https://static.wixstatic.com/media/6f3554_7a2b4fcd25f54934a41eb6276f500c35~mv2.png",
    link: "/about",
    alt: "Bass fishing from the heart",
  },
];

export default function Slider() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const nextSlide = () =>
    setCurrent((prev) => (prev + 1) % slides.length);

  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  // Autoplay (slow + respectful)
  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 7000);

    return () => clearInterval(interval);
  }, [paused]);

  // Swipe handling
  const handlers = useSwipeable({
    onSwipedLeft: () => nextSlide(),
    onSwipedRight: () => prevSlide(),
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  return (
    <section
      {...handlers}
      className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Background Image */}
          <img
            src={slide.image}
            alt={slide.alt}
            className="w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50" />

          {/* Content */}
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-6 text-white">
              <h1 className="text-4xl md:text-5xl font-bold max-w-xl">
                {slide.title}
              </h1>

              <p className="mt-4 text-lg text-gray-200 max-w-lg">
                {slide.description}
              </p>

              <Link
                href={slide.link}
                className="inline-block mt-6 bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-3 rounded-lg"
              >
                {slide.cta}
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
        aria-label="Previous slide"
      >
        ←
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
        aria-label="Next slide"
      >
        →
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 w-full flex justify-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-2 w-2 rounded-full transition ${
              index === current ? "bg-white scale-125" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
}