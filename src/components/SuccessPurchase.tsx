"use client";

import { useEffect, useState } from "react";
import Confetti from "react-confetti";
import { useRouter } from "next/navigation";

const SuccessPurchase = ({pageParams}:any) => {
  
  const [param, setParams] = useState<any>({});
  const router = useRouter();

  useEffect(()=>{
    const orderId = param;
    if(!orderId) return;

    setTimeout(()=>{
      const timer = setTimeout(()=>{
        router.push(`/orders/${orderId}`)
      });

      return ()=>{
        clearTimeout(timer);
      }
    },5000);

  },[router, param]);

  useEffect(()=>{
    console.log('pageParams', pageParams);
    
    setParams(pageParams);
  }, []);

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