import Link from "next/link";
import classnames from "classnames";
import Image from "next/image";
import { useState } from "react";
import MenuTop from "./MenuTop";
import MobileMenuWithSubMenu from "./MobileMenuWithSubMenu";
import MobileMenuWithOutSubMenu from "./MobileMenuWithOutSubMenu";
import L2 from "./L2";

function L1({
  levelOneMenus,
  isAllProducts,
  prevLink,
  hideMenu,
  thumbImage,
  menuOpen,
  setIsL1Open,
}) {
  const [levelTwoMenus, setLevelTwoMenus] = useState([]);
  const [isL2Open, setIsL2Open] = useState(false);
  const [prevLinkOne, setPrevLinkOne] = useState("");
  const showLevelMenu = (subCategory, index, link) => {
    setIsL2Open(true);
    setPrevLinkOne(link);
    if (subCategory.length > 0) {
      setLevelTwoMenus(subCategory);
    }
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
            {levelOne.linkChildrenCollection?.items &&
            levelOne.linkChildrenCollection?.items?.length > 0 ? (
              <MobileMenuWithSubMenu
                menu={levelOne}
                menuIndex={index}
                thumbImage={true}
                isAllProducts={isAllProducts}
                showLevelMenu={showLevelMenu}
              />
            ) : (
              <MobileMenuWithOutSubMenu
                menu={levelOne}
                menuIndex={index}
                thumbImage={true}
                isAllProducts={isAllProducts}
              />
            )}
          </li>
        ))}
      </ul>

      {/* level 1 Menu */}
      <div
        className={classnames(
          "w-full fixed bg-white overflow-auto top-0 ease-in-out duration-500 transition-all h-full px-4 z-10",
          { "left-0": isL2Open },
          { "-left-full": !isL2Open }
        )}
      >
        <L2
          levelTwoMenus={levelTwoMenus}
          isAllProducts={isAllProducts}
          setIsL2Open={setIsL2Open}
          prevLink={prevLinkOne}
          hideMenu={hideMenu}
        />
      </div>
    </>
  );
}

export default L1;
