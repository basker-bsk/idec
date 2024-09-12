"use client";
import { Menu } from "lucide-react";
import Link from "next/link";
import classnames from "classnames";
import { useEffect, useState } from "react";
export default function MobileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const showMenu = () => {
    setIsMenuOpen(true);
    setShowOverlay(true);
  };
  // Hide Menu when click Overlay
  const hideMenu = () => {
    setIsMenuOpen(false);
    setShowOverlay(false);
  };
  return (
    <>
      <div className={classnames({ "menu-open": isMenuOpen })}>
        <div onClick={() => showMenu()}>
          <Menu className="w-6 h-6" />
        </div>
        <div
          className={classnames(
            "w-3/4 fixed bg-white overflow-auto top-0 transition-all h-full z-50",
            { "left-0": isMenuOpen && showOverlay },
            { "-left-full": !isMenuOpen && !showOverlay }
          )}
        >
          <div className="p-6">
            <ul className="text-[14px] font-semibold uppercase">
              <li className="py-4 border-b border-gray-200">
                <Link href="/" data-hover="Products">
                  Products
                </Link>
              </li>
              <li className="py-4 border-b border-gray-200">
                <Link href="/" data-hover="Industries">
                  Industries
                </Link>
              </li>
              <li className="py-4 border-b border-gray-200">
                <Link href="/" data-hover="Solutions">
                  Solutions
                </Link>
              </li>
              <li className="py-4 border-b border-gray-200">
                <Link href="/" data-hover="Resources">
                  Resources
                </Link>
              </li>
              <li className="py-4 border-b border-gray-200">
                <Link href="/" data-hover="About">
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {showOverlay && (
        <div
          className="fixed w-full h-full bg-black opacity-50 overlaySection z-20 top-0 left-0"
          onClick={() => hideMenu()}
        ></div>
      )}
    </>
  );
}
