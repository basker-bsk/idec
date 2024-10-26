"use client";
import classnames from "classnames";
import LevelTwo from "./LevelTwo";
import Image from "next/image";
import ProductFinderSearch from "./ProductFinderSearch";
import { useState } from "react";
import MenuWithSubMenu from "./MenuWithSubMenu";
import MenuWithOutSubMenu from "./MenuWithOutSubMenu";

export default function LevelOne({ levelOneMenus }) {
  const [levelTwoMenus, setLevelTwoMenus] = useState([]);
  const [isLevelTwo, setIsLevelTwo] = useState(false);
  const [hoverArrowIndex, setHoverArrowIndex] = useState();
  const [menuActive, setMenuActive] = useState({
    activeIndex: "",
    activeLink: "",
    activeUrl: "",
  });

  const showLevelMenu = (subCategory, link, url) => {
    if (subCategory.length > 0) {
      setIsLevelTwo(true);
    }
    setMenuActive({
      activeLink: link,
      activeUrl: url,
    });
    const isLevelTwo = subCategory.length > 0;
    console.log("levelTwo", isLevelTwo);
    setLevelTwoMenus(subCategory);
  };

  const hoverMenu = (index) => {
    setHoverArrowIndex(index);
  };

  const hideMenu = () => {
    setIsLevelTwo(false);
    setLevelTwoMenus([]);
    setMenuActive({
      activeMenu: false,
      activeIndex: "",
    });
  };
  return (
    <div className="container border-t border-gray100 mx-auto relative ">
      <div className="shadow-md w-full h-[528px]  bg-white  max-h-100 rounded-br-md rounded-bl-md">
        <div className="mx-auto container flex w-full h-full justify-between">
          {/* Level One  Starts here */}
          {!isLevelTwo && (
            <div className={classnames("levelOne flex flex-col p-4 w-2/3")}>
              <p className="text-14 text-gray-400  mb-4">
                Browse by categories
              </p>
              <div className="overflow-y-auto h-[450px]">
                {levelOneMenus.map((levelOne, index) => (
                  <div key={levelOne.linkText}>
                    {levelOne?.linkChildrenCollection?.items?.length > 0 ? (
                      <MenuWithOutSubMenu
                        menu={levelOne}
                        menuIndex={index}
                        hideMenu={hideMenu}
                        hoverArrowIndex={hoverArrowIndex}
                        hoverMenu={hoverMenu}
                        showLevelMenu={showLevelMenu}
                        icon={true}
                      />
                    ) : (
                      <MenuWithSubMenu
                        menu={levelOne}
                        menuIndex={index}
                        hoverArrowIndex={hoverArrowIndex}
                        hoverMenu={hoverMenu}
                        icon={true}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Level Two Starts here */}
          {isLevelTwo && (
            <div className={classnames("levelTwo flex flex-col w-2/3")}>
              <LevelTwo
                levelTwoMenus={levelTwoMenus}
                selectedMenu={menuActive}
                setIsLevelTwo={setIsLevelTwo}
              />
            </div>
          )}

          <div className="flex w-1/3">
            <ProductFinderSearch />
          </div>
        </div>
      </div>
    </div>
  );
}
