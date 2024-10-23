"use client";
import classnames from "classnames";
import Link from "next/link";
import LevelTwo from "./LevelTwo";
import Image from "next/image";
import ProductFinderSearch from "./ProductFinderSearch";
import { useState } from "react";
export default function LevelOne({ levelOneMenus }) {
  const [levelTwoMenus, setLevelTwoMenus] = useState([]);
  const [menuActive, setMenuActive] = useState({
    activeMenu: false,
    activeIndex: "",
  });

  const showMenu = (subCategory, index) => {
    setLevelTwoMenus(subCategory);
    setMenuActive({
      activeMenu: true,
      activeIndex: index,
    });
  };
  const hideMenu = () => {
    setMenuActive({
      activeMenu: false,
      activeIndex: "",
    });
  };
  return (
    <div className="container border-t border-gray100 mx-auto relative ">
      <div className="levelOne w-full h-[500px]  bg-white  cursor-pointer  lg:top-[48px] max-h-100">
        <div className="mx-auto container flex w-full justify-between">
          <div className={classnames("flex flex-col p-4 w-2/3 ")}>
            <p className="text-14 text-gray-400  mb-4">Browse by categories</p>
            <div className="overflow-y-auto h-[431px]">
              {levelOneMenus.map((levelOne, index) => (
                <div className="" key={levelOne.linkText}>
                  <div
                    className={classnames(
                      "text-20 leading-20 flex gap-2 items-center p-4 relative hover:text-primary hover:bg-gray-50 rounded-md"
                    )}
                    onMouseEnter={() => {
                      showMenu(levelOne.linkChildrenCollection.items, index);
                    }}
                    onMouseLeave={() => {
                      hideMenu();
                    }}
                  >
                    <Image
                      src={levelOne.linkIcon ? levelOne.linkIcon : ""}
                      width={42}
                      height={42}
                      alt={levelOne.linkText}
                      className="w-10 h-10 bottom-1 border-gray-400"
                    ></Image>
                    <span>{levelOne.linkText}</span>
                    <span
                      className={classnames(
                        "icon-arrowright rounded-full  w-8 h-8 p-[6px]  text-black absolute right-4 top-1/2 -translate-y-1/2",
                        {
                          "text-white bg-primary ":
                            menuActive.activeIndex === index,
                        }
                      )}
                    ></span>
                  </div>

                  {/* {submenu?.levelOneMenus &&
                  submenu?.levelOneMenus.length > 0 && (
                    <div className={classnames("flex flex-col p-4 w-1/3")}>
                      <LevelTwo levelOneMenus={submenu.levelOneMenus} />
                    </div>
                  )} */}
                </div>
              ))}
            </div>
          </div>
          <div className="flex w-1/3">
            <ProductFinderSearch />
          </div>
        </div>
      </div>
    </div>
  );
}
