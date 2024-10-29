"use client";
import Image from "next/image";
import Link from "next/link";
import { User, ShoppingBag, ShoppingCart } from "lucide-react";
import MenuLinks from "@/public/assets/data/header.json";
import MobileMenu from "./Mobile/MobileMenu";
import SearchComponent from "../search";
import DesktopMenu from "./Desktop/DesktopMenu";
import { useState } from "react";
import CartComponent from "../cart";
export default function Header() {
  const [showOverlay, setShowOverlay] = useState(false);
  let Menus =
    MenuLinks?.data?.headerCollection?.items[0]?.hdMainNavigation
      ?.menusItemsCollection?.items;

  return (
    <div className="flex flex-col header relative z-10  header-shadow ">
      <div className="bg-white header-top container pt-[50px] pb-4 md:pt-5 md:pb-5">
        <div className="flex justify-between gap-2 items-center">
          <div className="flex gap-2 items-center ">
            <div className="lg:hidden">
              <MobileMenu menuItems={Menus} />
            </div>
            <Link href="/">
              <Image
                src="/assets/images/IDEC-Logo.png"
                width={100}
                height={34}
                alt="Logo"
                className="h-[30px] w-[90px] md:h-[34px] md:w-[100px]"
              />
            </Link>
          </div>
          <SearchComponent />

          <p>Login</p>
        </div>
      </div>
      <div className="relative hidden lg:flex lg:flex-col border-t border-gray100 bg-white  desktop-menu text-black ">
        <DesktopMenu menuItems={Menus} setShowOverlay={setShowOverlay} />
      </div>
    </div>
  );
}
