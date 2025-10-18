"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import CartModal from "./CartModal";
import { useWixClient } from "@/hooks/useWixClient";
import Cookies from "js-cookie";
import { useCartStore } from "@/hooks/useCartStore";

const NavIcons = () => {
  const wixClient = useWixClient();
  const { counter, getCart } = useCartStore();

  const [isClient, setIsClient] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleIfCart = () => {
    if(counter > 0)
      setIsCartOpen(prev => !prev)
  }

  useEffect(()=>{
    getCart(wixClient);
  },[wixClient, getCart]);

  useEffect(()=>{
    setIsClient(true);
  }, []);

  if(!isClient) return null;

  return (
    <div className="flex items-center gap-4 xl:gap-6 relative">
      <div
        className="relative cursor-pointer"
        onClick={() => toggleIfCart()}
      >
        <Image src="/cart.png" alt="" width={22} height={22} />
        <div className="absolute -top-4 -right-4 w-6 h-6 bg-primary rounded-full text-white text-sm flex items-center justify-center">
          {counter}
        </div>
      </div>
      {isCartOpen && counter > 0 && <CartModal />}
    </div>
  );
};

export default NavIcons;