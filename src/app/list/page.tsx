import ProductList from "@/components/ProductList";
import { getCategory } from "@/helpers/functions";

import { Metadata } from "next";

export async function generateMetadata({
  searchParams,
}: any): Promise<Metadata> {
  const params = await searchParams;

  const slug = params?.cat || "all-products";

  const category = await getCategory(slug);

  const name = category?.name || "All Products";

  return {
    title: `Cliff Bait | ${name}`,
    description: `Browse ${name.toLowerCase()} from Cliff Bait. Built for bass anglers who want results.`,
    alternates: {
      canonical: `/list`,
    },
    openGraph: {
      title: `Cliff Bait | ${name}`,
      description: `Browse ${name.toLowerCase()} from Cliff Bait. Built for bass anglers who want results.`,
      url: `https://cliffbait.com/list?cat=${slug}`,
      siteName: "Cliff Bait",
      type: "website",
    },
  };
}

const ListPage = async ({
  searchParams
}:any) => {
  const pageParams = await searchParams;
  const slug = pageParams?.cat || "all-products"
  const category = await getCategory(slug);
  
  return (
    <div className='px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative'>
      {/* product list */}
      <h1 className="mt-12 text-xl font-semibold">{category?.name} For You!</h1>
      <ProductList 
        categoryId={category?._id! || process.env.ALL_PRODUCTS_CATEGORY_ID!} 
        searchParams={pageParams} 
      />
    </div>
  );
};

export default ListPage;