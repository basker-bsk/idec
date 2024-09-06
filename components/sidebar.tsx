"use client";
import { usePathname } from "next/navigation";

import Link from "next/link";
import Header from "./header";
import Menus from "./menus";

export default function Sidebar() {
  const pathName = usePathname();
  const menuList = Menus();

  return (
    <>
      <div className="flex min-w-[300px] fixed top-0 left-0 bg-slate-300 shadow overflow-y-auto">
        <div className=" w-[300px] px-4 pt-4 pb-10 rounded-lg ">
          <Header />
          <div className="bg-white flex flex-col text-sm capitalize mb-4 overflow-y-auto sidebar-menu">
            {menuList.map((menu: any, id: number) => (
              <div
                key={`menu-${id}`}
                className={`border-b border-gray-200 px-4 py-2 flex  ${
                  pathName === menu.link ? "menu-active" : ""
                }`}
              >
                <Link href={menu.link} className="w-full">
                  {menu.text}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
