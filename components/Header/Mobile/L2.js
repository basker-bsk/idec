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
  // Hide Menu when click Overlay
  const hideL2Menu = () => {
    setIsL2Open(false);
    hideMenu();
  };
  return (
    <>
      <MenuTop
        hideMenu={hideL2Menu}
        prevLink={prevLink}
        backtoLink={setIsL2Open}
      ></MenuTop>
      <div className="text-12 leading-12 text-black my-4 flex justify-center border font-medium border-black p-2">
        Expore All {prevLink}
      </div>
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
