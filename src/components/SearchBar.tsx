"use client"

import Image from "next/image";
import { useRouter } from "next/navigation";

const SearchBar = () => {
  const router = useRouter();

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const search = formData.get("search") as string;

    if(search) {
      router.push(`list?search=${search}`)
    }
  }
  return (
    <form className="flex ic justify-between gap-4 bg-gray-100 p-2 rounded-md flex-1" onSubmit={handleSearch}>
      <input name="search" type="text" placeholder="search" className="flex-1 bg-transparent outline-none" data-lpignore />
      <button className="cursor-ponter" >
        <Image src="/search.png" alt="search" width={16} height={16}/>
      </button>
    </form>
  );
};

export default SearchBar;