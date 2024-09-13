"use client";
import classnames from "classnames";
import Link from "next/link";
import { useEffect, useState } from "react";

const DesktopMenu = ({ setShowOverlay, menuItems }) => {
  const [subCategories, setSubCategories] = useState([]);

  const showMenu = (subCategory) => {
    setSubCategories(subCategory);
    setShowOverlay(true);
  };

  const hideMenu = () => {
    setSubCategories("");
    setShowOverlay(false);
  };

  return (
    <>
      {menuItems && (
        <div
          onMouseLeave={() => {
            hideMenu();
          }}
        >
          <ul className="snip1168 nav text-[14px] font-semibold uppercase lg:flex gap-4 items-center">
            {menuItems.map((menu, index) => (
              <li
                className="cursor-pointer mr-20 lg:mr-40 last:mr-0 uppercase "
                key={index}
                onClick={() => {
                  if (menu.subCategories && menu.subCategories.length > 0) {
                    showMenu(menu.subCategories);
                  } else {
                    hideMenu();
                  }
                }}
                onMouseEnter={() => {
                  if (menu.subCategories && menu.subCategories.length > 0) {
                    showMenu(menu.subCategories);
                  }
                }}
              >
                <Link
                  className="py-[28px] font-bold"
                  href="/"
                  title={menu.name}
                >
                  {menu.name ? menu.name : ""}
                </Link>
              </li>
            ))}
          </ul>
          {subCategories && subCategories.length > 0 && (
            <div
              className="w-full h-[400px] bg-white absolute z-20 cursor-pointer
       overflow-hidden  megamenu-dropdown max-h-100 left-0"
            >
              <div className="mx-auto container">
                <div
                  className={classnames(
                    "flex lg:px-12 xl:px-0 lg:pr-24 ",
                    {
                      "justify-between":
                        subCategories[0] && subCategories[0].subCategories,
                    },
                    {
                      "flex-col":
                        subCategories[0] && !subCategories[0].subCategories,
                    }
                  )}
                >
                  {subCategories.map((submenu, index) => (
                    <ul
                      key={submenu && submenu.name}
                      className={classnames("flex pr-5 last:pr-0")}
                    >
                      <li className="flex flex-col">
                        <Link
                          className={classnames(
                            "",
                            {
                              "font-bold uppercase mb-4":
                                subCategories[0] &&
                                subCategories[0].subCategories,
                            },
                            {
                              "font-semibold hover:text-red-800":
                                subCategories[0] &&
                                !subCategories[0].subCategories,
                            }
                          )}
                          href="/"
                          target={submenu.type === "internal" ? "" : "_blank"}
                          title={submenu.name}
                        >
                          {submenu.name ? submenu.name : ""}
                        </Link>

                        {submenu?.subCategories &&
                          submenu?.subCategories.length > 0 && (
                            <ul className="flex flex-col mt-8 max-h-80 flex-wrap gap-x-4">
                              {submenu.subCategories.map((level1, index) => (
                                <>
                                  {level1 && (
                                    <li
                                      key={level1.name}
                                      className={classnames(
                                        "text-[12px] mb-2 hover:text-red-800"
                                      )}
                                    >
                                      <Link
                                        className=""
                                        href="/"
                                        target={
                                          level1.type === "internal"
                                            ? ""
                                            : "_blank"
                                        }
                                        title={level1.name}
                                      />
                                      {level1.name}
                                    </li>
                                  )}
                                </>
                              ))}
                            </ul>
                          )}
                      </li>
                    </ul>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default DesktopMenu;
