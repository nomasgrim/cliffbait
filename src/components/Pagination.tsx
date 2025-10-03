"use client"
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface IPagination {
  currentPage: number;
  hasPrev: boolean;
  hasNext: boolean;
}

const Pagination = ({currentPage, hasPrev, hasNext}:IPagination) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const {replace} = useRouter();

  const createPageUrl = (pageNumber:number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    replace(`${pathname}?${params.toString()}`) 
  }

  return (
    <div className="mt-12 flex justify-between w-full">
      <button className="rounded-md 
          bg-primary 
          text-white 
          text-sm
          p-2
          w-24 
          cursor-pointer 
          disabled:cursor-not-allowed 
          disabled:bg-pink-200"
        disabled={!hasPrev}
        onClick={()=>createPageUrl(currentPage - 1)}
      >
        Previous
      </button>
      <button className="rounded-md 
          bg-primary 
          text-white 
          text-sm
          p-2
          w-24 
          cursor-pointer 
          disabled:cursor-not-allowed 
          disabled:bg-pink-200"
        disabled={!hasNext}
        onClick={()=>createPageUrl(currentPage+1)}
      >
        next
      </button>
    </div>
  )
};

export default Pagination;