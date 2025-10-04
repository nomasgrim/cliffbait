"use client"

import Image from "next/image";
import { useCartStore } from "@/hooks/useCartStore"
import { media as wixMedia } from "@wix/sdk"
import { useWixClient } from "@/hooks/useWixClient";

const CartModal = () => {
  const {cart, isLoading, removeItem} = useCartStore();
  const wixClient = useWixClient();

  console.log("cart", cart);

  return (
    <div 
      className="absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white top-12 right-0 flex flex-col gap-6 z-20"
    >
      {!cart.lineItems ? 
        // CART EMPTY
        (<div className="">Cart Is Empty</div>) : 
        // CART NOT EMPTY
        (
          <>
            <h2 className="text-xl">Shopping Cart</h2>
            {/* // LIST */}
            <div className="flex flex-col gap-8">
              {cart && cart?.lineItems.map((cartItem)=>{
                return(
                  <div className="w-max flex gap-4" key={cartItem._id}>
                    {cartItem.image && (<Image 
                      src={wixMedia.getScaledToFillImageUrl(cartItem.image, 72, 96,{})}
                      alt="product" 
                      width={72} 
                      height={96} 
                      className="object-cover rounded-md" 
                    />)}
                    <div className="flex flex-col w-full justify-between">
                      {/* TOP */}
                      <div className="">
                        {/* heading */}
                        <div className="flex items-center justify-between gap-8">
                          {/* TITLE */}
                          <h3 className="font-semibold">{cartItem?.productName?.original}</h3>
                          {/* PRICE */}
                          <div className="p-1 bg-gray-50 rounded-sm flex items-center gap-2">
                            {cartItem.quantity && cartItem.quantity > 1 && (
                              <div className='text-sm text-green-500'>{cartItem.quantity} x {cartItem.price?.amount}</div>
                            )}
                          </div>
                        </div>

                        {/* DESCRIPTION */}
                        <div className="text-sm text-gray-500">{cartItem.availability?.status}</div>
                      </div>

                      {/* BOTTOM */}
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">QTY. {cartItem.quantity}</span>
                        <span 
                          className="text-blue-500"
                          style={{
                            cursor: isLoading ? "not-allowed" : "cursor-pointer"
                          }}
                          onClick={()=>removeItem(wixClient, cartItem._id!)}
                        >
                          Remove
                        </span>
                      </div>
                    </div>
                  </div>
                )
              })}

            </div>

            {/* // BOTTOM */}
            <div className="">
              <div className="flex items-center justify-between font-semibold">
                <span className="">Sub Total</span>
                <span className="">0</span>
                {/* TODO: SUBTOTAL */}
                {/* <span className="">{cart.subtotal.amount}</span> */}
              </div>
              <p className="text-gray-500 text-sm mt-2 mb-4">
                Shipping and taxes calculated at checkout
              </p>
              <div className="flex items-center justify-between text-sm">
                <button className="rounded-md py-3 px-4 ring-1 ring-gray-300">View Cart</button>
                <button 
                  className="rounded-md py-3 px-4 bg-black text-white disabled:cursor-not-allowed disabled:opactiy-75" 
                  disabled={isLoading}
                >
                  Checkout
                </button>
              </div>
            </div>
          </>
        )
      }
    </div>
  )
};

export default CartModal;