import Image from "next/image";
import Link from "next/link";
import { User, Search, ShoppingBag, ShoppingCart } from "lucide-react";
export default function HeaderIdec() {
  return (
    <div className="flex flex-col header">
      <div className="bg-blue-800 ">
        <div className="p-2 uppercase text-[12px] mx-auto max-w-[1360px]  flex justify-end">
          <div className="font-semibold text-white flex gap-4   ">
            <Link href="/">Partners</Link>
            <Link href="/">Support</Link>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className="p-4 mx-auto max-w-[1360px] flex justify-between items-center">
          <div className="flex gap-8 items-center">
            <Image
              src="/images/logo.jpg"
              width={150}
              height={100}
              alt="Picture of the author"
              className="w-[150px]"
            />
            <ul className="nav text-[14px] font-bold uppercase flex gap-4">
              <li>
                <Link href="/">Products</Link>
              </li>
              <li>
                <Link href="/">Industries</Link>
              </li>
              <li>
                <Link href="/">Solutions</Link>
              </li>
              <li>
                <Link href="/">Resources</Link>
              </li>
              <li>
                <Link href="/">About</Link>
              </li>
            </ul>
          </div>
          <div className="flex gap-10">
            <Search className="h-6 w-6 " />
            <div className="flex gap-1 items-center">
              <User className="h-6 w-6" />
              <span className="text-[14px] font-bold uppercase ">James</span>
            </div>
            <ShoppingCart className="h-6 w-6 " />
          </div>
        </div>
      </div>
    </div>
  );
}
