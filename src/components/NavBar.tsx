import Link from "next/link";
import Menu from "./Menu";
import Image from "next/image";
import SearchBar from "./SearchBar";
import NavIconsWrapper from "./NavIconsWrapper";

const NavBar = () => {
  return (
    <header className="h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 fixed inset-x-0 top-0 z-50 bg-white">
      
      {/* MOBILE */}
      <div className="h-full flex items-center justify-between md:hidden">
        
        <Link href="/">
          <Image src="/home.png" alt="Cliff Bait" width={40} height={40} />
        </Link>

        {/* FIX: flex + gap for spacing */}
        <div className="flex items-center gap-6 text-sm font-medium">
          <Link href="/about" className="hover:underline">
            About
          </Link>
          <Link href="/blog" className="hover:underline">
            Blog
          </Link>
        </div>

        <Menu />
      </div>

      {/* DESKTOP */}
      <div className="hidden md:flex items-center h-full justify-between gap-8">

        {/* LEFT */}
        <div className="w-1/3 xl:w-1/2 flex items-center gap-6">
          
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.png" alt="Cliff Bait" width={24} height={24} />
            <div className="text-2xl tracking-wide">Cliff Bait</div>
          </Link>

          {/* FIX: flex + spacing */}
          <div className="flex items-center gap-6 text-sm font-medium">
            <Link href="/about" className="hover:underline">
              About
            </Link>
            <Link href="/blog" className="hover:underline">
              Blog
            </Link>
          </div>
        </div>

        {/* RIGHT */}
        <div className="w-2/3 xl:w-1/2 flex items-center justify-between gap-8">
          <SearchBar />
          <NavIconsWrapper />
        </div>
      </div>
    </header>
  );
};

export default NavBar;