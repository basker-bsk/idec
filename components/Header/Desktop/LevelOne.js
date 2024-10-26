"use client";
import classnames from "classnames";
import LevelTwo from "./LevelTwo";
import { useState } from "react";
import MenuWithSubMenu from "./MenuWithSubMenu";
import MenuWithOutSubMenu from "./MenuWithOutSubMenu";

export default function LevelOne({ levelOneMenus, bowseBy, isAllProducts }) {
  const [levelTwoMenus, setLevelTwoMenus] = useState([]);

  const [hoverArrowIndex, setHoverArrowIndex] = useState();
  const [menuActive, setMenuActive] = useState({
    activeIndex: "",
    activeLink: "",
    activeUrl: "",
  });

  const showLevelMenu = (subCategory, link, url) => {
    if (subCategory.length > 0) {
      setLevelTwoMenus(subCategory);
    }
    setMenuActive({
      activeLink: link,
      activeUrl: url,
    });
    const isLevelTwo = subCategory.length > 0;
    console.log("levelTwo", isLevelTwo);
  };

  const hoverMenu = (index) => {
    setHoverArrowIndex(index);
  };

  const hideMenu = () => {
    setLevelTwoMenus([]);
    setMenuActive({
      activeMenu: false,
      activeIndex: "",
    });
  };
  return (
    <div
      className={classnames(
        " border-t border-gray100 mx-auto relative container-menu max-w-[1000px]"
      )}
    >
      <div
        className="shadow-md w-full h-[528px]  bg-white  max-h-100 rounded-br-md rounded-bl-md"
        onMouseLeave={() => {
          hideMenu();
        }}
      >
        <div className="mx-auto container flex w-full h-full justify-between">
          {/* Level One  Starts here */}

          <div
            className={classnames(
              "levelOne flex flex-col p-4 w-1/2 border-r border-gray-300"
            )}
          >
            <p className="text-14 text-gray-400  mb-4">Browse by {bowseBy}</p>
            <div className="overflow-y-auto h-[450px]">
              {levelOneMenus.map((levelOne, index) => (
                <div key={levelOne.linkText}>
                  {levelOne?.linkChildrenCollection?.items?.length > 0 ? (
                    <MenuWithSubMenu
                      menu={levelOne}
                      menuIndex={index}
                      hoverArrowIndex={hoverArrowIndex}
                      hoverMenu={hoverMenu}
                      showLevelMenu={showLevelMenu}
                      icon={true}
                      hideMenu={hideMenu}
                    />
                  ) : (
                    <MenuWithOutSubMenu
                      menu={levelOne}
                      menuIndex={index}
                      hoverArrowIndex={hoverArrowIndex}
                      hoverMenu={hoverMenu}
                      icon={true}
                      hideMenu={hideMenu}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Level Two Starts here */}

          <div
            className={classnames("levelTwo flex flex-col w-1/2", {
              "bg-gray-200": !isAllProducts,
            })}
          >
            <LevelTwo
              levelTwoMenus={levelTwoMenus}
              selectedMenu={menuActive}
              isAllProducts={isAllProducts}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
