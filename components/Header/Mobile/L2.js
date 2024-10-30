import Link from "next/link";
import classnames from "classnames";
import Image from "next/image";
import { useState } from "react";
import MenuTop from "./MenuTop";
import MobileMenuWithSubMenu from "./MobileMenuWithSubMenu";
import MobileMenuWithOutSubMenu from "./MobileMenuWithOutSubMenu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
function L2({ levelTwoMenus, isAllProducts, prevLink, hideMenu, setIsL2Open }) {
  const [accordian, setAccordian] = useState(0);

  const ShowAccordian = (index) => {
    setAccordian(index);
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
      {/* <ul className="text-16 leading-16 font-medium text-black">
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
                      "icon-minus": accordian === index,
                    },
                    {
                      "icon-plus": accordian !== index,
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

            <ul
              className={classnames(
                "flex flex-col ease-in-out duration-500 transition-all",
                { "h-0": accordian !== index },
                { "h-auto": accordian === index }
              )}
            >
              {levelTwo.linkChildrenCollection?.items.map((menu, indexAcc) => (
                <li
                  className="text-14 leading-14 font-normal p-4"
                  key={menu.linkText}
                >
                  {menu.linkText}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul> */}
      <Accordion type="single" collapsible className="w-full menu-accordian">
        {levelTwoMenus.map((levelTwo, index) => (
          <>
            {levelTwo.linkChildrenCollection?.items &&
            levelTwo.linkChildrenCollection?.items?.length > 0 ? (
              <AccordionItem value={`item-${index}`} key={`item-${index}`}>
                <AccordionTrigger className="text-16 font-medium leading-16">
                  {levelTwo.linkText}
                </AccordionTrigger>

                <AccordionContent className="text-14 leading-14 font-normal">
                  <ul className={classnames("flex flex-col")}>
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
                </AccordionContent>
              </AccordionItem>
            ) : (
              <Link
                href={levelTwo.linkUrl}
                title={levelTwo.linkText}
                className={classnames(
                  "py-4 text-black border-b border-gray200 text-16 font-medium leading-16 flex"
                )}
              >
                {levelTwo.linkText}
              </Link>
            )}
          </>
        ))}
      </Accordion>
    </>
  );
}

export default L2;
