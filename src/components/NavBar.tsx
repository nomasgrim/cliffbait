import Link from "next/link";
import Menu from "./Menu";
import Image from "next/image";
import SearchBar from "./SearchBar";
import NavIcons from "./NavIcons";

const NavBar = () => {
  return (
    <div className="h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
      {/* MOBILE */}
      <div className="h-full flex items-center justify-between md:hidden">
        <Link href="/">
          <div className="text-2xl tracking-wide">Cliff Bait</div>
        </Link>
        <Menu />
      </div>
      {/* Bigger Screens */}
      <div className="hidden md:flex items-center h-full justify-between gap-8">
        {/* LEFT */}
        <div className="w-1/3 xl:w-1/2 flex items-center gap-6">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.png" alt="Cliff Bait" width={24} height={24} />
            <div className="text-2xl tracking-wide">Cliff Bait</div>
          </Link>
          <div className="hidden xl:flex gap-4">
            <Link href="/">Home</Link>
            <Link href="/shop">Shop</Link>
            <Link href="/deals">Deals</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
        {/* RIGHT */}
        <div className="w-2/3 xl:w-1/2 flex items-center justify-between gap-8">
          <SearchBar />
          <NavIcons />
        </div>
      </div>
    </div>
  )
};

export default NavBar;