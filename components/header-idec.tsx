"use client";
import Image from "next/image";
import Link from "next/link";
import { User, ShoppingBag, ShoppingCart } from "lucide-react";
import MenuLinks from "@/public/assets/data/menu.json";
import MobileMenu from "../components/Header/Mobile/MobileMenu";
import SearchComponent from "./search";
import DesktopMenu from "./mega-menu";
import { useState } from "react";
import CartComponent from "./cart";
export default function HeaderIdec() {
  const [showOverlay, setShowOverlay] = useState(false);
  return (
    <div className="flex flex-col header relative z-10">
      <div className="bg-black ">
        <div className="p-2 uppercase text-[10px] tracking-wide container  flex justify-end">
          <div className="text-white flex gap-4   ">
            <Link href="/">Partners</Link>
            <Link href="/">Support</Link>
          </div>
        </div>
      </div>
      <div className="bg-white shadow-md px-4 lg:px-0">
        <div className="py-4 lg:py-0 container flex justify-between items-center">
          <div className="flex gap-8 items-center ">
            <Link href="/">
              <Image
                src="/images/logo.jpg"
                width={150}
                height={100}
                alt="Picture of the author"
                className="w-[100px] lg:w-[150px]"
              />
            </Link>
            <div className="hidden lg:flex">
              <DesktopMenu
                menuItems={MenuLinks.menus}
                setShowOverlay={setShowOverlay}
              />
            </div>
            {/* <ul className="snip1168 hidden nav text-[14px] font-medium uppercase  gap-4">
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
            </ul> */}
          </div>
          <div className="flex gap-2 lg:gap-4 items-center relative">
            <SearchComponent />
            <div className="flex gap-1 items-center hover:text-red-800  cursor-pointer ">
              <User className="h-4 w-4" />
              <span className="text-[14px] font-medium uppercase hidden lg:flex">
                James
              </span>
            </div>
            <CartComponent />
          </div>
        </div>
      </div>
    </div>
  );
}
