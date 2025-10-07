"use client";

import { useWixClient } from "@/hooks/useWixClient";
import React, { useEffect, useState } from "react";

const EmailForm = ({submitForm}:any) => {
  const [email, setEmail] = useState("");
  const [isClient, setIsClient] = useState(false);
  // const wixClient = useWixClient();

  const handleSubmitEmail = async (e:React.FormEvent) => {
    // SDK does not have way to collect email and subscribe
    // need to setup API insteadd of SDK
    console.log('entered', email);
  }

  useEffect(()=>{
    setIsClient(true);
  },[]);

  if(!isClient) return null;

  return (
      <div className="flex flex-col items-center justify-between">
        <form onSubmit={handleSubmitEmail}>

          <label id="email">Email</label>
          <input 
            className="ring-2 ring-gray-300 rounded-md p-4"
            type="email" 
            name="email"
            placeholder="email"
            onChange={e=>setEmail(e.target.value)}
          />
        </form>
      </div>
  )
}

export default EmailForm;