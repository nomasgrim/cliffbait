"use client"

import Image from "next/image";

const CartModal = () => {
  const cartItems = true;

  return (
    <div 
      className="absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white top-12 right-0 flex flex-col gap-6 z-20"
    >
      {!cartItems ? 
        // CART EMPTY
        (
          <div className="">Cart Is Empty</div>
        ) : 
        // CART NOT EMPTY
        (
          <>
            <h2 className="text-xl">Shopping Cart</h2>
            {/* // LIST */}
            <div className="flex flex-col gap-8">
              {/* ITEM */}
              <div className="w-max flex gap-4">
                <Image 
                  src="https://images.pexels.com/photos/31557347/pexels-photo-31557347.jpeg" 
                  alt="product" 
                  width={72} 
                  height={96} 
                  className="object-cover rounded-md" 
                />
                <div className="flex flex-col w-full justify-between">
                  {/* TOP */}
                  <div className="">
                    {/* heading */}
                    <div className="flex items-center justify-between gap-8">
                      {/* TITLE */}
                      <h3 className="font-semibold">Product Name</h3>
                      {/* PRICE */}
                      <div className="p-1 bg-gray-50 rounded-sm">$50</div>
                    </div>

                    {/* DESCRIPTION */}
                    <div className="text-sm text-gray-500">available</div>
                  </div>

                  {/* BOTTOM */}
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">QTY. 2</span>
                    <span className="text-blue-500">Remove</span>
                  </div>
                </div>
              </div>

              {/* ITEM */}
              <div className="w-max flex gap-4">
                <Image 
                  src="https://images.pexels.com/photos/31557347/pexels-photo-31557347.jpeg" 
                  alt="product" 
                  width={72} 
                  height={96} 
                  className="object-cover rounded-md" 
                />
                <div className="flex flex-col w-full justify-between">
                  {/* TOP */}
                  <div className="">
                    {/* heading */}
                    <div className="flex items-center justify-between gap-8">
                      {/* TITLE */}
                      <h3 className="font-semibold">Product Name</h3>
                      {/* PRICE */}
                      <div className="p-1 bg-gray-50 rounded-sm">$50</div>
                    </div>

                    {/* DESCRIPTION */}
                    <div className="text-sm text-gray-500">available</div>
                  </div>

                  {/* BOTTOM */}
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">QTY. 2</span>
                    <span className="text-blue-500">Remove</span>
                  </div>
                </div>
              </div>
            </div>
            {/* // BOTTOM */}
            <div className="">
              <div className="flex items-center justify-between font-semibold">
                <span className="">Sub Total</span>
                <span className="">$55</span>
              </div>
              <p className="text-gray-500 text-sm mt-2 mb-4">
                Shipping and taxes calculated at checkout
              </p>
              <div className="flex items-center justify-between text-sm">
                <button className="rounded-md py-3 px-4 ring-1 ring-gray-300">View Cart</button>
                <button className="rounded-md py-3 px-4 bg-black text-white">Checkout</button>
              </div>
            </div>
          </>
        )
      }
    </div>
  )
};

export default CartModal;