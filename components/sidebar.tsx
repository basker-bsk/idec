"use client";
import { useParams } from "next/navigation";

import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import Link from "next/link";

export default function Sidebar() {
  const menuList = [
    {
      link: "/#accordian",
      text: "accordian",
    },
    {
      link: "/#buttons",
      text: "buttons",
    },
    {
      link: "/#calendar",
      text: "calendar",
    },
    {
      link: "/#modal",
      text: "modal",
    },
    {
      link: "/#popover",
      text: "popover",
    },
    {
      link: "/#card",
      text: "card",
    },
    {
      link: "/#hoverCard",
      text: "hoverCard",
    },
    {
      link: "/#form",
      text: "form",
    },
  ];

  return (
    <>
      <div className="flex min-w-[300px] fixed top-0 left-0 bg-slate-300 shadow">
        <div className=" w-[300px] p-4 rounded-lg min-h-screen">
          <div className="mb-4 flex flex-col gap-2">
            <img src="../images/logo.jpg" width="150" />
            <h2 className="font-semibold">UI Components</h2>
          </div>
          <Command>
            <CommandInput placeholder="Type a command or search..." />
            <CommandList className="capitalize">
              <CommandEmpty>No results found.</CommandEmpty>
              {menuList.map((menu: any, id: number) => (
                <div key={`menu-${id}`}>
                  <Link href={menu.link}>
                    <CommandGroup>
                      <CommandItem>{menu.text}</CommandItem>
                    </CommandGroup>
                  </Link>
                  <CommandSeparator />
                </div>
              ))}
            </CommandList>
          </Command>
        </div>
      </div>
    </>
  );
}
