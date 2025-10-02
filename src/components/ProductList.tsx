import { wixClientServer } from "@/lib/wixClientServer";
import { products } from "@wix/stores";
import Image from "next/image"
import Link from "next/link"
import DOMPurify from "isomorphic-dompurify";

const PRODUCT_PER_PAGE = 20;

interface IProductList {
  categoryId: string;
  limit?: number;
  searchParams?: any;
}

const ProductList = async ({
  categoryId, 
  limit
}:IProductList) => {
  const wixClient = await wixClientServer();
  const listOfProducts = await wixClient.products
    .queryProducts()
    .eq("collectionIds",categoryId)
    .limit(limit || PRODUCT_PER_PAGE)
    .find();

  return (
    <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
      {/* ITEM */}

      {
        listOfProducts.items.map((product: products.Product)=>(
          <Link 
            href={"/"+product.slug}
            className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
            key={product._id}
          > 
            <div className="relative w-full h-80">
              <Image 
                src={product.media?.mainMedia?.image?.url || "/product.png"}
                alt="" 
                fill 
                sizes="25vw"
                className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
              />
              {product.media?.items && (
                <Image 
                  src={product.media?.items[1]?.image?.url || "/product.png"}
                  alt="" 
                  fill 
                  sizes="25vw"
                  className="absolute object-cover rounded-md" 
                />
              )}
            </div>
            <div className="flex justify-between">
              <span className="font-medium">{product.name}</span>
              <span className="font-semibold">{product.priceData?.price}</span>
            </div>
            {/* SHORT DESCRIPTION */}
            {product.additionalInfoSections && (
              <div className="text-sm text-gray-500" dangerouslySetInnerHTML={{__html:DOMPurify.sanitize( 
                product.additionalInfoSections.find(
                  (section:any)=>section.title==="shortDesc"
                )?.description || ""
              )}} />
            )}
            <button className="w-max rounded-2xl ring-1 ring-primary py-2 px-4 text-primary text-xs hover:bg-primary hover:text-white">Add to cart</button>
          </Link>
        ))
      }

    </div>
  )
};

export default ProductList;