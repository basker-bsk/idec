"use client";
import { useState } from "react";
import classnames from "classnames";
import Link from "next/link";
import LevelThree from "./LevelThree";
export default function LevelTwo({
  levelTwoMenus,
  selectedMenu,
  setIsLevelTwo,
}) {
  const [levelThreeMenus, setLevelThreeMenus] = useState([]);
  const [isLevelThree, setIsLevelThree] = useState(false);
  const [hoverArrowIndex, setHoverArrowIndex] = useState();
  const [menuActive, setMenuActive] = useState({
    activeLink: "",
    activeUrl: "",
    activeIndex: "",
  });
  const showLevelThreeMenu = (subCategory, link, url, index) => {
    if (subCategory && subCategory.length > 0) {
      setIsLevelThree(true);
      setMenuActive({
        activeLink: link,
        activeUrl: url,
        activeIndex: index,
      });
      const isLevelThree = subCategory.length > 0;
      console.log("levelThree", isLevelThree, subCategory);
      setLevelThreeMenus(subCategory);
    }
  };
  const hoverMenu = (index) => {
    setHoverArrowIndex(index);
  };
  return (
    <div className="flex w-full">
      <div className="w-1/2 flex flex-col p-4 border-r border-gray-300">
        <div className="flex justify-between  mb-4">
          <div
            className="flex gap-4 items-center"
            onClick={() => setIsLevelTwo(false)}
          >
            <span className="text-20 text-white bg-primary icon-arrowleft rounded-full  w-8 h-8 p-[6px] "></span>
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
          {levelTwoMenus.map((levelTwo, index) => (
            <div
              key={levelTwo.linkText}
              className={classnames(
                "text-20 leading-20 flex cursor-pointer gap-2 items-center p-4 relative hover:text-primary hover:bg-gray-50 rounded-md"
              )}
              onClick={() => {
                showLevelThreeMenu(
                  levelTwo.linkChildrenCollection?.items,
                  levelTwo.linkText,
                  levelTwo.linkUrl,
                  index
                );
              }}
              onMouseEnter={() => {
                hoverMenu(index);
              }}
            >
              <span>{levelTwo.linkText}222</span>
              <span
                className={classnames(
                  "icon-arrowright rounded-full  w-8 h-8 p-[6px]  text-black absolute right-4 top-1/2 -translate-y-1/2",
                  {
                    "text-white bg-primary ": hoverArrowIndex === index,
                  }
                )}
              ></span>
            </div>
          ))}
        </div>
      </div>

      {/* Level Two Starts here */}
      {isLevelThree && (
        <div className={classnames("levelThree flex flex-col w-1/2")}>
          <LevelThree
            levelThreeMenus={levelThreeMenus}
            selectedMenu={menuActive}
            setIsLevelThree={setIsLevelThree}
          />
        </div>
      )}
    </div>
  );
}
