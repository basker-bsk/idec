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
  const [levelTwoHasSubMenu, setLevelTwoHasSubMenu] = useState(false);
  const [submenuPostion, setSubmenuPostion] = useState(0);
  let levelOneHasSubMenu;

  const showMenu = (subCategory, index, linkText) => {
    setBrowseBy(linkText);
    levelOneHasSubMenu = subCategory.length > 0;
    subCategory.map((cat, index) => {
      if (cat.linkChildrenCollection.items.length > 0) {
        setLevelTwoHasSubMenu(true);
      } else {
        setLevelTwoHasSubMenu(false);
      }
    });
    const element = document.getElementById(linkText);
    //const rect = element.getBoundingClientRect();
    setSubmenuPostion(element.offsetLeft.toFixed());
    console.log(
      "subCategory",
      subCategory,
      levelOneHasSubMenu,
      levelTwoHasSubMenu,
      submenuPostion,
      element.offsetLeft.toFixed()
    );
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
        <>
          <div className="relative container mx-auto">
            <div
              onMouseLeave={() => {
                hideMenu();
              }}
              className="float-left"
            >
              <ul className="float-left level-0 text-14 leading-14 font-medium">
                {menuItems.map((menu, index) => (
                  <li
                    id={menu.linkText}
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
                        "flex gap-1 items-center py-3 px-5 text-center justify-center"
                      )}
                    >
                      <span>{menu.linkText}</span>
                      {menu.linkChildrenCollection.items &&
                        menu.linkChildrenCollection.items.length > 0 && (
                          <i
                            className={classnames(
                              "text-20  ease-in-out duration-500",
                              { "icon-chevron-down": menuActive !== index },
                              {
                                "icon-chevron-down rotate-180":
                                  menuActive === index,
                              }
                            )}
                          ></i>
                        )}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* All Products Menu */}
              {isLevelOne && allProducts && (
                <LevelOneAll
                  levelOneMenus={levelOneMenus}
                  isAllProducts={allProducts}
                  bowseBy={bowseBy}
                  levelTwoHasSubMenu={levelTwoHasSubMenu}
                />
              )}

              {/* Other Menus */}
              {isLevelOne && !allProducts && (
                <LevelOne
                  levelOneMenus={levelOneMenus}
                  bowseBy={bowseBy}
                  isAllProducts={allProducts}
                  levelTwoHasSubMenu={levelTwoHasSubMenu}
                  submenuPostion={submenuPostion}
                />
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default DesktopMenu;
