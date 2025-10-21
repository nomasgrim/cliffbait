"use client";

import { useEffect, useState } from "react";
import Confetti from "react-confetti";
import { useRouter } from "next/navigation";

const SuccessPurchase = ({orderId}:any) => {
  
  const [param, setParams] = useState<any>({});
  const router = useRouter();

  useEffect(()=>{
    if(!orderId) {
      console.error('no order id');
      return
    };

    setTimeout(()=>{
      const timer = setTimeout(()=>{
        router.push(`/orders/${orderId}`)
      });

      return ()=>{
        clearTimeout(timer);
      }
    },5000);

  },[router, param, orderId]);
  return (
    <div className="flex flex-col gap-6 items-center justify-center h-[calc(100vh-180px)]">
      <Confetti width={2000} height={1000}/>
      <h1 className="text-6xl text-green-700">Successful</h1>
      <h2 className="textxl font-medium" >We sent the invoice to your email</h2>
      <h3 className="" >You are being redirected to the order page ...</h3>
    </div>
  )
};

export default SuccessPurchase;