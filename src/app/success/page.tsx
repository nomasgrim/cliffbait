"use client"

import { useEffect, useState } from "react";
import Confetti from "react-confetti";
import { useRouter, useSearchParams } from "next/navigation";

const SuccessPage = () => {
  const [isClient, setIsClient] = useState(false);

  const searchParams = useSearchParams();
  const router = useRouter();

  const orderId = searchParams.get("orderId"); 
  console.log('order', orderId);

  useEffect(()=>{
    if(!orderId) return;
    setTimeout(()=>{
      const timer = setTimeout(()=>{
        router.push(`/orders/${orderId}`)
      });

      return ()=>{
        clearTimeout(timer);
      }
    },5000);

  },[orderId, router]);

  useEffect(()=>setIsClient(true),[])

  if(!isClient) return null;

  return (
    <div className="flex flex-col gap-6 items-center justify-center h-[calc(100vh-180px)]">
      <Confetti width={2000} height={1000}/>
      <h1 className="text-6xl text-green-700">Successful</h1>
      <h2 className="textxl font-medium" >We sent the invoice to your email</h2>
      <h3 className="" >You are being redirected to the order page ...</h3>
    </div>
  );
};

export default SuccessPage;