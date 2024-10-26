"use client";
import { useState } from "react";
import classnames from "classnames";
import Link from "next/link";
import LevelThree from "./LevelThree";
import LevelTwoTop from "./LevelTwoTop";
import MenuWithSubMenu from "./MenuWithSubMenu";
import MenuWithOutSubMenu from "./MenuWithOutSubMenu";
export default function LevelTwo({
  levelTwoMenus,
  selectedMenu,
  setIsLevelTwo,
  isAllProducts,
}) {
  const [levelThreeMenus, setLevelThreeMenus] = useState([]);
  const [isLevelThree, setIsLevelThree] = useState(false);
  const [hoverArrowIndex, setHoverArrowIndex] = useState();
  const [menuActive, setMenuActive] = useState({
    activeLink: "",
    activeUrl: "",
    activeIndex: "",
  });
  const showLevelMenu = (subCategory, link, url, index) => {
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
  const hideMenu = () => {};
  return (
    <div
      className="flex w-full"
      onMouseLeave={() => {
        hideMenu();
      }}
    >
      <div
        className={classnames(
          "flex flex-col p-4 border-r border-gray-300",
          {
            "w-1/2": isAllProducts,
          },
          {
            "w-full": !isAllProducts,
          }
        )}
      >
        {isAllProducts && (
          <LevelTwoTop
            selectedMenu={selectedMenu}
            setIsLevelTwo={setIsLevelTwo}
          />
        )}
        <div className="overflow-y-auto h-[450px]">
          {levelTwoMenus.map((levelTwo, index) => (
            <div key={levelTwo.linkText}>
              {levelTwo?.linkChildrenCollection?.items?.length > 0 ? (
                <MenuWithSubMenu
                  menu={levelTwo}
                  menuIndex={index}
                  hoverArrowIndex={hoverArrowIndex}
                  hoverMenu={hoverMenu}
                  showLevelMenu={showLevelMenu}
                  hideMenu={hideMenu}
                  icon={false}
                />
              ) : (
                <MenuWithOutSubMenu
                  menu={levelTwo}
                  menuIndex={index}
                  hoverArrowIndex={hoverArrowIndex}
                  hoverMenu={hoverMenu}
                  icon={false}
                />
              )}
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
