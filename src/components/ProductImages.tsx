"use client"

import Image from "next/image";
import { useState } from "react";

// const images = [
//   {
//     id: 1,
//     url: 'https://images.pexels.com/photos/1693095/pexels-photo-1693095.jpeg'
//   },
//   {
//     id: 2,
//     url: 'https://images.pexels.com/photos/4318822/pexels-photo-4318822.jpeg'
//   },
//   {
//     id: 3,
//     url: 'https://images.pexels.com/photos/1142950/pexels-photo-1142950.jpeg'
//   },
//   {
//     id: 4,
//     url: 'https://images.pexels.com/photos/3064079/pexels-photo-3064079.jpeg'
//   }
// ];

interface IProductImages {
  media: any;
}

const ProductImages = ({media}:IProductImages) => {
  const [index, setIndex] = useState(0);
  return (
    <div className="">
      <div className="h-[500px] relative">
        <Image
          src={media[index].image.url}
          alt="big image"
          fill
          sizes="50vw"
          className="object-cover rounded-md"
        />
      </div>
      <div className="flex justify-between gap-4 mt-8">
        {
          media.map((item:any, i:number)=>(
            <div 
              className="w-1/4 h-32 relative gap-4 mt-8 cursor-pointer" 
              key={item._id }
              onClick={()=>setIndex(i)}
            >
              <Image
                src={item.image.url}
                alt="preview image"
                fill
                sizes="30vw"
                className="object-cover rounded-md"
              />
            </div>
          ))
        }
      </div> 
    </div>
  )
};

export default ProductImages;