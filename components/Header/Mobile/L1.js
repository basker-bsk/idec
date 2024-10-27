import Link from "next/link";
import classnames from "classnames";
import Image from "next/image";
import { useState } from "react";
import MenuTop from "./MenuTop";

function L1({
  levelOneMenus,
  isAllProducts,
  prevLink,
  hideMenu,
  icon,
  menuOpen,
  setIsL1Open,
}) {
  return (
    <>
      <MenuTop
        hideMenu={hideMenu}
        prevLink={prevLink}
        backtoLink={setIsL1Open}
      ></MenuTop>
      <p className="text-14 text-gray-400 mb-4">Browse By Categories</p>
      <ul className="text-20 leading-20 text-black">
        {levelOneMenus.map((menu, index) => (
          <li
            className={classnames("py-4 text-black", {
              "text-primary": menu.linkClass !== null,
            })}
            key={menu.linkText}
          >
            {menu.linkChildrenCollection.items &&
            menu.linkChildrenCollection.items.length > 0 ? (
              <div
                className="flex justify-between items-center"
                onClick={() => {
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
                <div className="flex gap-1 items-center">
                  {icon && isAllProducts && (
                    <Image
                      src={menu.linkIcon ? menu.linkIcon : ""}
                      width={42}
                      height={42}
                      alt={menu.linkText}
                      className="w-10 h-10 bottom-1 border-gray-400"
                    ></Image>
                  )}
                  <span>{menu.linkText}</span>
                </div>
                <i
                  className={classnames(
                    "text-24 ease-in-out text-black duration-500 icon-chevron-right"
                  )}
                ></i>
              </div>
            ) : (
              <Link
                href={menu.linkUrl}
                title={menu.linkText}
                className="flex justify-between items-center"
              >
                <div className="flex gap-1 items-center">
                  {icon && isAllProducts && (
                    <Image
                      src={menu.linkIcon ? menu.linkIcon : ""}
                      width={42}
                      height={42}
                      alt={menu.linkText}
                      className="w-10 h-10 bottom-1 border-gray-400"
                    ></Image>
                  )}
                  <span>{menu.linkText}</span>
                </div>
                <i
                  className={classnames(
                    "text-24 ease-in-out text-black duration-500 icon-chevron-right"
                  )}
                ></i>
              </Link>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}

export default L1;
