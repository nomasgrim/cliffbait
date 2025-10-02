// "use client";

import CategoryList from "@/components/CategoryList"
import ProductList from "@/components/ProductList"
import Slider from "@/components/Slider"
import { Suspense, useEffect } from "react"
import { useWixClient } from "@/hooks/useWixClient";
import { wixClientServer } from "@/lib/wixClientServer";

const HomePage = async () => { 
  // Client side render Wix DB
  // const wixClient = useWixClient();
  // useEffect(()=>{
  //   const getProduct = async() => {
  //     const res = await wixClient.products.queryProducts().find();
  //     console.log('res', res);
  //     return res;
  //   }
    
  //   getProduct();
  // }, [wixClient])

  // Server side render Wix DB
  // const wixClient = await wixClientServer();
  // const res = await wixClient.products.queryProducts().find();
  // console.log('cliff res', res);

  return (
    <>
      <Slider />
      {/* // FEATURED PRODUCTS */}
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl">Featured Products</h1>
        <Suspense fallback={"loading"}>

          <ProductList categoryId={process.env.FEATURED_PRODUCTS_CATEGORY_ID!} limit={4} />
        </Suspense>
      </div>
      {/* // CATEGORIES */}
      <div className="mt-24">
        <h1 className="text-2xl px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 mb-12">Categories</h1>
        <CategoryList />
      </div>
      {/* // New Products */}
      {/* <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl">New Products</h1>
        <ProductList />
      </div> */}
    </>
  )
}

export default HomePage