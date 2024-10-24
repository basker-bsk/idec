"use client";
import classnames from "classnames";
import Link from "next/link";
import { useEffect, useState } from "react";
import LevelOne from "./LevelOne";

const DesktopMenu = ({ setShowOverlay, menuItems }) => {
  const [levelOneMenus, setLevelOneMenus] = useState([]);
  const [menuActive, setMenuActive] = useState("");

  const showMenu = (subCategory, index) => {
    setLevelOneMenus(subCategory);
    setShowOverlay(true);
    setMenuActive(index);
  };

  const hideMenu = () => {
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
          <div className="bg-white shadow-md desktop-menu ">
            <ul className=" container mx-auto level-0 text-14 leading-14 md:text-16 md:leading-18 font-medium lg:flex gap-2 items-center">
              {menuItems.map((menu, index) => (
                <li
                  className={classnames(
                    "cursor-pointer py-3 px-5 ",
                    {
                      "gradient text-white": menuActive === index,
                    },
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
                    className="flex gap-2 items-center"
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
          {levelOneMenus && levelOneMenus.length > 0 && (
            <div className=" megamenu-dropdown">
              <LevelOne levelOneMenus={levelOneMenus} />
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default DesktopMenu;
