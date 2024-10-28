import Link from "next/link";
import classnames from "classnames";
import Image from "next/image";
import { useState } from "react";
import MenuTop from "./MenuTop";
import MobileMenuWithSubMenu from "./MobileMenuWithSubMenu";
import MobileMenuWithOutSubMenu from "./MobileMenuWithOutSubMenu";

function L1({
  levelOneMenus,
  isAllProducts,
  prevLink,
  hideMenu,
  icon,
  menuOpen,
  setIsL1Open,
}) {
  const [levelTwoMenus, setLevelTwoMenus] = useState([]);
  const showLevelMenu = (subCategory, link, url) => {
    if (subCategory.length > 0) {
      setLevelTwoMenus(subCategory);
    }

    const isLevelTwo = subCategory.length > 0;
    console.log("levelTwo", isLevelTwo);
  };
  return (
    <>
      <MenuTop
        hideMenu={hideMenu}
        prevLink={prevLink}
        backtoLink={setIsL1Open}
      ></MenuTop>
      <p className="text-14 text-gray-400 mb-4">Browse By Categories</p>
      <ul className="text-20 leading-20 text-black">
        {levelOneMenus.map((levelOne, index) => (
          <li
            className={classnames("p-4 text-black", {
              "text-primary": levelOne.linkClass !== null,
            })}
            key={levelOne.linkText}
          >
            {levelOne.linkChildrenCollection.items &&
            levelOne.linkChildrenCollection.items.length > 0 ? (
              <MobileMenuWithSubMenu
                menu={levelOne}
                menuIndex={index}
                icon={true}
                isAllProducts={isAllProducts}
                showLevelMenu={showLevelMenu}
              />
            ) : (
              <MobileMenuWithOutSubMenu
                menu={levelOne}
                menuIndex={index}
                icon={true}
                isAllProducts={isAllProducts}
              />
            )}
          </li>
        ))}
      </ul>
    </>
  );
}

export default L1;