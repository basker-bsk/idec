import Image from "next/image";
import Link from "next/link";
import { User, Search, ShoppingBag, ShoppingCart } from "lucide-react";
export default function HeaderIdec() {
  return (
    <div className="flex flex-col header relative z-10">
      <div className="bg-blue-800 ">
        <div className="p-2 uppercase text-[10px] tracking-wide container  flex justify-end">
          <div className="text-white flex gap-4   ">
            <Link href="/">Partners</Link>
            <Link href="/">Support</Link>
          </div>
        </div>
      </div>
      <div className="bg-white shadow-md">
        <div className="p-4 container flex justify-between items-center">
          <div className="flex gap-8 items-center">
            <Image
              src="/images/logo.jpg"
              width={150}
              height={100}
              alt="Picture of the author"
              className="w-[150px]"
            />
            <ul className="nav text-[14px] font-semibold uppercase flex gap-4 snip1168">
              <li>
                <Link href="/" data-hover="Products">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/" data-hover="Industries">
                  Industries
                </Link>
              </li>
              <li>
                <Link href="/" data-hover="Solutions">
                  Solutions
                </Link>
              </li>
              <li>
                <Link href="/" data-hover="Resources">
                  Resources
                </Link>
              </li>
              <li className="current">
                <Link href="/" data-hover="About">
                  About
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex gap-6">
            <Search className="h-6 w-6 " />
            <div className="flex gap-1 items-center">
              <User className="h-6 w-6" />
              <span className="text-[14px] font-semibold uppercase ">
                James
              </span>
            </div>
            <ShoppingCart className="h-6 w-6 " />
          </div>
        </div>
      </div>
    </div>
  );
}
