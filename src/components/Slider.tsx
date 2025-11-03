"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
interface ISlide {
  id: number,
  title: string,
  buttonText?: string,
  description?: string,
  img: string,
  url: string,
  bg: string
}
const slides:ISlide[] = [
  {
    id: 1,
    title: "Gotcha BASS!",
    buttonText: "Browse Shop",
    img: "https://assets.codepen.io/125304/lake-june-canal.jpg",
    url: "/list?cat=all-products",
    bg: "bg-gradient-to-r from-yellow-50 to-pink-50"
  }
  // },
  // {
  //   id: 2,
  //   title: "Lake Placid Charters Company",
  //   subtitle: "some subtitle"
  //   description: "Central Florida Air boat adventures",
  //   img: "https://images.pexels.com/photos/33870392/pexels-photo-33870392.jpeg",
  //   url: "/",
  //   bg: "bg-gradient-to-r from-pink-50 to-blue-50"
  // },
  // {
  //   id: 3,
  //   title: "Bass Addict Tackle",
  //   description: "One stop shop. Get your bait and morning beverage.",
  //   img: "https://images.pexels.com/photos/25551716/pexels-photo-25551716.jpeg",
  //   url: "/",
  //   bg: "bg-gradient-to-r from-blue-50 to-green-50"
  // },
  // {
  //   id: 4,
  //   title: "Big Water Bait and Tackle",
  //   description: "The wildest of wild shiners this side of the mississippi",
  //   img: "https://images.pexels.com/photos/31009117/pexels-photo-31009117.jpeg",
  //   url: "/",
  //   bg: "bg-gradient-to-r from-blue-50 to-green-50"
  // },
]

const Slider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(()=>{
    const interval = setInterval(()=>{
      setCurrent((prev)=>(prev === slides.length-1 ? 0 : prev+1))
    }, 5000);

    return ()=>clearInterval(interval)
  }, []);

  return (
    <div className="h-[calc(100vh-80px)] overflow-hidden">
      <div 
        className="w-max h-full flex transition-all ease-in-out duration-1000"
        style={{
          transform:`translateX(-${current * 100}vw)`
        }}
      >
        {
          slides.map((slide)=>(
            <div className={`${slide.bg} w-screen h-full flex flex-col gap-16 xl:flex-row`} key={slide.id}>
              {/* Text Container */}
              <div className="h-1/2 xl:h-full xl:w-1/2 flex flex-col items-center justify-center gap-8 2xl:gap-12 text-center">
                {slide.description && (
                  <h2 className="text-xl lg:text-3xl xl:text-5xl">
                    {slide.description}
                  </h2>
                )}
                <h1 className="text-5xl lg:text-6xl xl:text-8xl font-semibold">
                  {slide.title}
                </h1>
                {/* BUTTON/LINK */}
                <Link href={slide.url}>
                  <button className="rounded bg-black text-white py-3 px-4">{slide.buttonText}</button>
                </Link>
                <div className=""></div>
              </div>
              {/* Image Container */}
              <div className="h-1/2 xl:h-full xl:w-1/2 relative">
                <Image 
                  src={slide.img} 
                  alt={slide.title} 
                  fill 
                  sizes="100%" 
                  className="object-cover" 
                />
              </div>
            </div>
          ))
        }
      </div>
      {/* slider pagination */}
      {/* <div className="absolute m-auto left-1/2 bottom-8 flex gap-4">
        {
          slides.map((slide,index)=>(
            <div 
              className={
                `w-3 h-3 rounded-full ring-1 ring-gray-600 cursor-pointer flex items-center justify-center ${current === index ? "scale-150" : ""}`} 
              key={slide.id}
              onClick={()=>setCurrent(index)}
            >
              {current === index && (
                <div className="w-[6px] h-[6px] bg-gray-600 rounded-full"></div>
              )}
            </div>
          ))
        }
      </div> */}
    </div>
  )
};

export default Slider;