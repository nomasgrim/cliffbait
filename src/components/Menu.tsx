"use client"

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import CartModal from "./CartModal";
import { useCartStore } from "@/hooks/useCartStore";
import { useWixClient } from "@/hooks/useWixClient";

const Menu = () => {
  const wixClient = useWixClient();
  const { cart, counter, getCart } = useCartStore();

  const [open, setOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  const toggleIfCart = () => {
    if(counter > 0)
      setOpen(prev => !prev)
  }
  
  useEffect(()=>{
    getCart(wixClient);
  },[wixClient, getCart]);

  useEffect(()=>{
    setIsClient(true);
  }, []);

  useEffect(()=>{
    if(counter === 0)
      setOpen(false)
  }, [counter]);

  if(!isClient) return null;

  return (
    <div className="">
      {/* <Image 
        src="/menu.png" 
        alt="menu" 
        width={28} 
        height={28} 
        className="cursor-pointer" 
        onClick={()=>setOpen(prev=>!prev)}/> */}
      <div
        className="relative cursor-pointer"
        onClick={() => toggleIfCart()}
      >
        <Image src="/cart.png" alt="" width={22} height={22} />
        <div className="absolute -top-4 -right-4 w-6 h-6 bg-primary rounded-full text-white text-sm flex items-center justify-center">
          {counter}
        </div>
      </div>
      {open && counter > 0 && (
        <div 
          className="bg-black absolute left-0 top-20 w-full 
            h-[calc(100vh-60px)] flex flex-col items-center justify-center text-xl z-10"
        >
          {/* <Link href="/">Home</Link>
          <Link href="/shop">Shop</Link>
          <Link href="/deals">Deals</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/">Logout</Link>
          <Link href="/">Cart(1)</Link> */}
          <div className="w-full overflow-y-scroll scrollbar-hide"><CartModal /></div>
        </div>
      )}
    </div>
  )
};

export default Menu;