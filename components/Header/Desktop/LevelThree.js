"use client";
import { useState } from "react";
import classnames from "classnames";
import Link from "next/link";
export default function LevelThree({
  levelThreeMenus,
  selectedMenu,
  setIsLevelThree,
}) {
  const [hoverArrowIndex, setHoverArrowIndex] = useState();
  const hoverMenu = (index) => {
    setHoverArrowIndex(index);
  };
  return (
    <div className="w-full flex flex-col p-4 border-r border-gray-300">
      <div className="flex justify-between  mb-4">
        <div className="flex gap-4 items-center">
          <span className="text-14 text-gray-400">
            {selectedMenu.activeLink}
          </span>
        </div>
        <div className="flex gap-2 items-center">
          <Link
            href={selectedMenu.activeUrl}
            className="text-14 text-black font-bold"
          >
            Explore All
          </Link>
          <span className="w-6 h-6 relative">
            <i className="icon-chevron-right absolute top-1/2 -translate-y-1/2"></i>
          </span>
        </div>
      </div>
      <div className="overflow-y-auto h-[431px]">
        {levelThreeMenus.map((levelThree, index) => (
          <Link
            href={levelThree.linkUrl}
            key={levelThree.linkText}
            className={classnames(
              "text-16 font-medium leading-16 flex gap-2 items-center p-4 relative hover:text-primary hover:bg-gray-50 rounded-md"
            )}
            onMouseEnter={() => {
              hoverMenu(index);
            }}
          >
            <span>{levelThree.linkText}</span>
            <span
              className={classnames(
                "icon-arrowright rounded-full text-20 w-8 h-8 p-[6px]  text-black absolute right-4 top-1/2 -translate-y-1/2",
                {
                  "text-white bg-primary ": hoverArrowIndex === index,
                }
              )}
            ></span>
          </Link>
        ))}
      </div>
    </div>
  );
}
