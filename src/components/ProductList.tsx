import Image from "next/image"
import Link from "next/link"

const ProductList = () => {
  return (
    <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
      {/* ITEM */}
      <Link href="/test-1" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"> 
        <div className="relative w-full h-80">
          <Image 
            src="https://images.pexels.com/photos/31557347/pexels-photo-31557347.jpeg" 
            alt="" 
            fill 
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
          <Image 
            src="https://images.pexels.com/photos/29246846/pexels-photo-29246846.jpeg" 
            alt="" 
            fill 
            sizes="25vw"
            className="absolute object-cover rounded-md" 
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">$50</span>
        </div>
        <div className="text-sm text-gray-500">Description</div>
        <button className="w-max rounded-2xl ring-1 ring-primary py-2 px-4 text-primary text-xs hover:bg-primary hover:text-white">Add to cart</button>
      </Link>
       {/* ITEM */}
      <Link href="/test-1" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"> 
        <div className="relative w-full h-80">
          <Image 
            src="https://images.pexels.com/photos/31557347/pexels-photo-31557347.jpeg" 
            alt="" 
            fill 
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
          <Image 
            src="https://images.pexels.com/photos/29246846/pexels-photo-29246846.jpeg" 
            alt="" 
            fill 
            sizes="25vw"
            className="absolute object-cover rounded-md" 
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">$50</span>
        </div>
        <div className="text-sm text-gray-500">Description</div>
        <button className="w-max rounded-2xl ring-1 ring-primary py-2 px-4 text-primary text-xs hover:bg-primary hover:text-white">Add to cart</button>
      </Link>
       {/* ITEM */}
      <Link href="/test-1" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"> 
        <div className="relative w-full h-80">
          <Image 
            src="https://images.pexels.com/photos/31557347/pexels-photo-31557347.jpeg" 
            alt="" 
            fill 
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
          <Image 
            src="https://images.pexels.com/photos/29246846/pexels-photo-29246846.jpeg" 
            alt="" 
            fill 
            sizes="25vw"
            className="absolute object-cover rounded-md" 
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">$50</span>
        </div>
        <div className="text-sm text-gray-500">Description</div>
        <button className="w-max rounded-2xl ring-1 ring-primary py-2 px-4 text-primary text-xs hover:bg-primary hover:text-white">Add to cart</button>
      </Link>
       {/* ITEM */}
      <Link href="/test-1" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"> 
        <div className="relative w-full h-80">
          <Image 
            src="https://images.pexels.com/photos/31557347/pexels-photo-31557347.jpeg" 
            alt="" 
            fill 
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
          <Image 
            src="https://images.pexels.com/photos/29246846/pexels-photo-29246846.jpeg" 
            alt="" 
            fill 
            sizes="25vw"
            className="absolute object-cover rounded-md" 
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">$50</span>
        </div>
        <div className="text-sm text-gray-500">Description</div>
        <button className="w-max rounded-2xl ring-1 ring-primary py-2 px-4 text-primary text-xs hover:bg-primary hover:text-white">Add to cart</button>
      </Link>
    </div>
  )
};

export default ProductList;