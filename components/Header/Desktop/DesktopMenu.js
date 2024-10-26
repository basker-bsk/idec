"use client";
import classnames from "classnames";
import Link from "next/link";
import { useEffect, useState } from "react";
import LevelOne from "./LevelOne";

const DesktopMenu = ({ setShowOverlay, menuItems }) => {
  
  const [levelOneMenus, setLevelOneMenus] = useState([]);
  const [menuActive, setMenuActive] = useState("");
  const [isLevelOne, setIsLevelOne] = useState(false)
  const showMenu = (subCategory, index) => { 
    if(subCategory.length > 0){
      setIsLevelOne(true)      
    }
    setLevelOneMenus(subCategory);
    setShowOverlay(true);
    setMenuActive(index);
  };

  const hideMenu = () => {
    setIsLevelOne(false)
    setLevelOneMenus("");
    setShowOverlay(false);
    setMenuActive("");
  };

  return (
    <>
      {menuItems && (
        <div
          onMouseLeave={() => {
            hideMenu();
          }}
          className=""
        >
          <div className="snip1168 bg-white shadow-md desktop-menu relative ">
            <ul className="relative container mx-auto level-0 text-14 leading-14 md:text-16 md:leading-18 font-medium lg:flex gap-2 items-center">
              {menuItems.map((menu, index) => (
                <li
                  className={classnames(
                    "cursor-pointer  relative",
                    {
                      "gradient text-white": index === 0,
                    },
                    { "active-bdr  ": menuActive === index && index !== 0 && menu.linkClass === null},
                    { "text-primary": menu.linkClass !== null }
                  )}
                  key={menu.linkText}
                  onClick={() => {
                    if (
                      menu.linkChildrenCollection.items &&
                      menu.linkChildrenCollection.items.length > 0
                    ) {
                      showMenu(menu.linkChildrenCollection.items, index);
                    } else {
                      hideMenu();
                    }
                  }}
                  onMouseEnter={() => {
                    if (
                      menu.linkChildrenCollection.items &&
                      menu.linkChildrenCollection.items.length > 0
                    ) {
                      showMenu(menu.linkChildrenCollection.items, index);
                    }
                  }}
                >
                  <Link
                    href={menu.linkUrl}
                    title={menu.linkText}
                    className={classnames("flex gap-2 items-center py-3 px-5 text-center justify-center",{
                      
                    },)}
                  >
                    <span>{menu.linkText}</span>
                    {menu.linkChildrenCollection.items &&
                      menu.linkChildrenCollection.items.length > 0 && (
                        <i
                          className={classnames(
                            "icon",
                            { "icon-chevron-down": menuActive !== index },
                            { "icon-chevron-up": menuActive === index }
                          )}
                        ></i>
                      )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {isLevelOne && (
            <div className="megamenu-dropdown absolute z-10 left-0 top-[47px] w-full">
              <LevelOne levelOneMenus={levelOneMenus} />
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default DesktopMenu;
