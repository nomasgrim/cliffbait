import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="py-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 bg-gray-100 text-sm mt-24">
      {/* TOP */}
      <div className="flex flex-col md:flex-row jusitfy-between gap-24">
        {/* LEFT */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <Link href="/">
            <div className="text-2xl tracking-wide">Cliff Bait</div>
          </Link>
          <p>
            Lake Placid, FL
          </p>
          <span className="font-semibold">thedude@cliffbait.com</span>
          <div className="flex gap-6">
            <Image src="/facebook.png" alt="facebook" width={16} height={16} />
            <Image src="/instagram.png" alt="instagram" width={16} height={16} />
            <Image src="/youtube.png" alt="youtube" width={16} height={16} />
            <Image src="/x.png" alt="x" width={16} height={16} />
          </div>
        </div>
        {/* CENTER */}
        <div className="hidden lg:flex justify-between w-1/2">
          <div className="flex flex-col gap-12">
            <h1 className="font-medium text-lg">Company</h1>
            <div className="flex flex-col gap-6">
              <Link href="/">Home</Link>
              <Link href="/">Shop</Link>
              <Link href="/">Deals</Link>
              <Link href="/">About</Link>
              <Link href="/">Contact</Link>
            </div>
          </div>
          <div className="flex flex-col gap-12">
            <h1 className="font-medium text-lg">Shop</h1>
            <div className="flex flex-col gap-6">
              <Link href="/list?cat=featured">Featured</Link>
              <Link href="/list?cat=worms">Worms</Link>
              <Link href="/list">All Products</Link>
            </div>
          </div>
          <div className="flex flex-col gap-12">
            <h1 className="font-medium text-lg">Help</h1>
            <div className="flex flex-col gap-6">
              <Link href="/customercare">Customer Service</Link>
              <Link href="/profile">My Account</Link>
              <Link href="/legal">Legal & Privacy</Link>
              <Link href="/gift">Gift</Link>
            </div>
          </div>
        </div>
        {/* RIGHT */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <h1 className="font-medium text-lg">Subscribe</h1>
          <p>Be the first to get the latest news about trends, promotions, and much more!</p>
          <div className="flex">
            <input 
              type="text" 
              placeholder="Email Address"
              className="p-4 w-3/4"
            />
            <button className="w-1/4 bg-primary text-white">JOIN</button>
          </div>
          <span className="font-semibold">Secure Payments</span>
          <div className="flex justify-between">
            <Image src="/discover.png" alt="discover" width={40} height={20} />
            <Image src="/skrill.png" alt="discover" width={40} height={20} />
            <Image src="/paypal.png" alt="discover" width={40} height={20} />
            <Image src="/mastercard.png" alt="discover" width={40} height={20} />
            <Image src="/visa.png" alt="discover" width={40} height={20} />
          </div>
        </div>
      </div>
      {/* BOTTOM */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-16">
        <div className="">&copy; 2025 Cliff Bait Shop</div>
        <div className="flex flex-col gap-8 md:flex-row">
          <div className="">
            <span className="text-gray-500 mr-4">Language</span>
            <span className="font-medium">United States | English</span>
          </div>
          <div className="">
            <span className="text-gray-500 mr-4">Currency</span>
            <span className="font-medium">$ USD</span>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Footer;