"use client";

import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter } from "next/navigation";
import Menus from "./menus";
import { useState } from "react";
export default function Header() {
  const router = useRouter();
  const menuList = Menus();

  const handleChange = (e: any) => {
    router.push(e);
  };

  return (
    <div className="mb-4 flex flex-col gap-2 w-full">
      <Image
        src="/images/logo.jpg"
        width={150}
        height={100}
        alt="Picture of the author"
        className="w-[150px]"
      />
      <h2 className="font-bold">UI Components</h2>
      <div className="lg:hidden flex w-full custom-select">
        <Select onValueChange={handleChange}>
          <SelectTrigger className="w-[180px] capitalize">
            <SelectValue placeholder="Select a UI component" />
          </SelectTrigger>
          <SelectContent>
            {menuList.map((menu: any, id: number) => (
              <SelectItem
                value={menu.link}
                key={`menu-${id}`}
                className="capitalize"
              >
                {menu.text}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
