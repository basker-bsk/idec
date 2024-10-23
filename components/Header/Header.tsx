"use client";
import Image from "next/image";
import Link from "next/link";
import { User, ShoppingBag, ShoppingCart } from "lucide-react";
import MenuLinks from "@/public/assets/data/header.json";
import MobileMenu from "./MobileMenu";
import SearchComponent from "../search";
import DesktopMenu from "./Desktop/DesktopMenu";
import { useState } from "react";
import CartComponent from "../cart";
export default function Header() {
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
          <div className="lg:hidden">
            <MobileMenu />
          </div>
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
      <div className="relative hidden lg:flex lg:flex-col border-t border-gray100 ">
        <DesktopMenu
          menuItems={
            MenuLinks?.data?.headerCollection?.items[0]?.hdMainNavigation
              ?.menusItemsCollection?.items
          }
          setShowOverlay={setShowOverlay}
        />
      </div>
    </div>
  );
}
