"use client";

import { useCartStore } from "@/hooks/useCartStore";
import { useWixClient } from "@/hooks/useWixClient";
import { useEffect, useState } from "react";

interface IAdd {
  productId: string;
  variantId: string;
  stockNumber: number;
}

const Add = ({
  productId,
  variantId,
  stockNumber
}:IAdd) => {
  const wixClient = useWixClient();
  const [quantity, setQuantity] = useState(1);


  const handleQuantity = (type: "minus" | "plus" | "total") => {
    if(type==="minus" && quantity > 1 )
      setQuantity(prev=>prev-1)
    if(type==="plus" && quantity < stockNumber)
      setQuantity(prev=>prev+1)
  }

  const { addItem, isLoading } = useCartStore();

  return (
    <div className="flex flex-col gap-4">
      <h4 className="font-medium">Choose a Quantity</h4>
      <div className="flex justify-between">
        <div className="flex items-center gap-4">
          <div className="bg-gray-100 py-2 px-4 rounded-3xl flex items-center justify-between w-32">
            <button className="cursor-pointer text-xl" onClick={()=>handleQuantity("minus")}>-</button>
            {quantity}
            <button className="cursor-pointer text-xl" onClick={()=>handleQuantity("plus")}>+</button>
          </div>
          {stockNumber < 1 ? (
            <div className="text-xs">
              Product is out of stock
            </div>
          ) : (
            <div className="text-xs">
              Only <span className="text-orange-500">{stockNumber - quantity} items</span> left!<br />
              {"Don't"} miss it
            </div>
          )}
        </div>
        <button 
          className="w-36 text-sm rounded-3xl 
          ring-1 ring-primary text-primary 
          py-2 pyx-4 
          hover:bg-primary hover:text-white 
          disabled:cursor-not-allowed disabled:bg-pink-200 disabled:text-color-white disabled:ring-none
          disabled:ring-0"
          disabled={isLoading}
          onClick={()=>addItem(wixClient, productId, variantId, quantity)}
          >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Add; 