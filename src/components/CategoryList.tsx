import { wixClientServer } from "@/lib/wixClientServer";
import { collections } from "@wix/stores";
import Image from "next/image";
import Link from "next/link";

const CategoryList = async () => {
  const wixClient = await wixClientServer();
  const categories = await wixClient.collections.queryCollections().find();

  console.log("categories", categories);
  return (
    <div className="px-4 overflow-x-scroll scrollbar-hide">
      <div className="flex gap-4 md:gap-8">
        {
          categories.items.map((cat: collections.Collection)=>(
            <Link 
              href={`/list?cat=${cat.slug}`} 
              className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6"
              key={cat._id}
            >
              <div className="relative bg-slate-100 w-full h-96">
                <Image 
                  src={cat.media?.mainMedia?.image?.url || "/category.png"}
                  alt={cat.name || "Category"}
                  fill
                  sizes="20vw"
                  className="object-cover"
                />
              </div>
              <h1 className="mt-8 font-light text-cl tracking-wide">
                {cat.name}
              </h1>
            </Link>
          ))
        }
      </div>
    </div>
  )
};

export default CategoryList;