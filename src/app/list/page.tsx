import ProductList from "@/components/ProductList";
import { wixClientServer } from "@/lib/wixClientServer";
import { Suspense } from "react";

const ListPage = async ({
  searchParams
}:any) => {
  const pageParams = await searchParams;
  const wixClient = await wixClientServer();
  const category = await wixClient.collections.getCollectionBySlug(pageParams?.cat || "all-products");
  
  return (
    <div className='px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative'>
      {/* product list */}
      <h1 className="mt-12 text-xl font-semibold">{category.collection?.name} For You!</h1>
      <Suspense fallback={"loading"}>
        <ProductList 
          categoryId={category.collection?._id! || process.env.ALL_PRODUCTS_CATEGORY_ID!} 
          searchParams={pageParams} 
        />
      </Suspense>
    </div>
  );
};

export default ListPage;