"use client";
import classnames from "classnames";
import Link from "next/link";
import { useEffect, useState } from "react";
import LevelOneAll from "./LevelOneAll";
import LevelOne from "./LevelOne";
const DesktopMenu = ({ setShowOverlay, menuItems }) => {
  const [levelOneMenus, setLevelOneMenus] = useState([]);
  const [menuActive, setMenuActive] = useState("");
  const [isLevelOne, setIsLevelOne] = useState(false);
  const [allProducts, setAllProducts] = useState(false);
  const [bowseBy, setBrowseBy] = useState("");
  const showMenu = (subCategory, index, linkText) => {
    setBrowseBy(linkText);
    if (subCategory.length > 0) {
      setIsLevelOne(true);
    }
    if (index === 0) {
      setAllProducts(true);
    } else {
      setAllProducts(false);
    }
    setLevelOneMenus(subCategory);
    setShowOverlay(true);
    setMenuActive(index);
  };

  const hideMenu = () => {
    setIsLevelOne(false);
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
                    {
                      "active-bdr  ":
                        menuActive === index &&
                        index !== 0 &&
                        menu.linkClass === null,
                    },
                    { "text-primary": menu.linkClass !== null }
                  )}
                  key={menu.linkText}
                  // onClick={() => {
                  //   if (
                  //     menu.linkChildrenCollection.items &&
                  //     menu.linkChildrenCollection.items.length > 0
                  //   ) {
                  //     showMenu(menu.linkChildrenCollection.items, index, menu.linkText);
                  //   } else {
                  //     hideMenu();
                  //   }
                  // }}
                  onMouseEnter={() => {
                    if (
                      menu.linkChildrenCollection.items &&
                      menu.linkChildrenCollection.items.length > 0
                    ) {
                      showMenu(
                        menu.linkChildrenCollection.items,
                        index,
                        menu.linkText
                      );
                    }
                  }}
                >
                  <Link
                    href={menu.linkUrl}
                    title={menu.linkText}
                    className={classnames(
                      "flex gap-2 items-center py-3 px-5 text-center justify-center"
                    )}
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
          {isLevelOne && allProducts && (
            <div className="megamenu-dropdown absolute z-10 left-0 top-[47px] w-full">
              <LevelOneAll
                levelOneMenus={levelOneMenus}
                isAllProducts={allProducts}
                bowseBy={bowseBy}
              />
            </div>
          )}
          {isLevelOne && !allProducts && (
            <div className="megamenu-dropdown absolute z-10 left-0 top-[47px] w-full">
              <LevelOne
                levelOneMenus={levelOneMenus}
                bowseBy={bowseBy}
                isAllProducts={allProducts}
              />
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default DesktopMenu;
