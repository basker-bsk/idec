import Link from "next/link";
import classnames from "classnames";
import Image from "next/image";
import { useState } from "react";
import MenuTop from "./MenuTop";
import MobileMenuWithSubMenu from "./MobileMenuWithSubMenu";
import MobileMenuWithOutSubMenu from "./MobileMenuWithOutSubMenu";

function L2({ levelTwoMenus, isAllProducts, prevLink, hideMenu, setIsL2Open }) {
  console.log("levelTwoMenus >>", levelTwoMenus);
  const [accordian, setAccordian] = useState({
    open: false,
    index: "",
  });

  const ShowAccordian = (index) => {
    setAccordian({ open: !accordian.open, index: index });
  };

  return (
    <>
      <MenuTop
        hideMenu={hideMenu}
        prevLink={prevLink}
        backtoLink={setIsL2Open}
      ></MenuTop>
      <div className="text-12 leading-12 text-black my-4 flex justify-center border font-medium border-black p-2">
        Expore All {prevLink}
      </div>
      <ul className="text-16 leading-16 font-medium text-black">
        {levelTwoMenus.map((levelTwo, index) => (
          <li
            className={classnames(
              "py-4 px-2 text-black border-b border-gray200",
              {
                "text-primary": levelTwo.linkClass !== null,
              }
            )}
            key={levelTwo.linkText}
          >
            {levelTwo.linkChildrenCollection?.items &&
            levelTwo.linkChildrenCollection?.items?.length > 0 ? (
              <div
                className="flex justify-between items-center"
                onClick={() => {
                  if (
                    levelTwo.linkChildrenCollection.items &&
                    levelTwo.linkChildrenCollection.items.length > 0
                  ) {
                    ShowAccordian(index);
                  }
                }}
              >
                <div className="flex gap-1 items-center">
                  <span>{levelTwo.linkText}111</span>
                </div>
                <i
                  className={classnames(
                    "text-24 ease-in-out text-black duration-500",
                    {
                      "icon-minus": accordian.open,
                    },
                    {
                      "icon-plus": !accordian.open,
                    }
                  )}
                ></i>
              </div>
            ) : (
              <MobileMenuWithOutSubMenu
                menu={levelTwo}
                menuIndex={index}
                thumbImage={false}
                accodian={false}
                isAllProducts={isAllProducts}
              />
            )}
            {accordian.open && accordian.index === index && (
              <ul className="flex flex-col py-4">
                {levelTwo.linkChildrenCollection?.items.map(
                  (menu, indexAcc) => (
                    <li
                      className="text-14 leading-14 font-normal p-4"
                      key={menu.linkText}
                    >
                      {menu.linkText}
                    </li>
                  )
                )}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}

export default L2;
