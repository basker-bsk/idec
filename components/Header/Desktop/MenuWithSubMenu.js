"use client";
import classnames from "classnames";
import Image from "next/image";

function MenuWithOutSubMenu({
  menu,
  menuIndex,
  hoverArrowIndex,
  showLevelMenu,
  hoverMenu,
  hideMenu,
  icon,
  isAllProducts,
  levelTwoHasSubMenu,
}) {
  return (
    <div
      className={classnames(
        "text-20 leading-20 flex cursor-pointer gap-2 items-center py-4 pl-4 pr-16 relative hover:text-primary hover:bg-gray-50 rounded-md",
        {
          "text-primary bg-gray-50 ": hoverArrowIndex === menuIndex,
        }
      )}
      onMouseEnter={() => {
        hoverMenu(menuIndex);
      }}
      // onMouseLeave={() => {
      //   hoverMenu(-1);
      // }}
      onClick={() => {
        showLevelMenu(
          menu.linkChildrenCollection?.items,
          menu.linkText,
          menu.linkUrl,
          menuIndex
        );
      }}
    >
      {icon && isAllProducts && (
        <Image
          src={menu.linkIcon ? menu.linkIcon : ""}
          width={42}
          height={42}
          alt={menu.linkText}
          className="w-10 h-10 bottom-1 border-gray-400"
        ></Image>
      )}
      <span
        className={classnames(
          { "text-20": isAllProducts && !levelTwoHasSubMenu },
          { "text-14": !isAllProducts && levelTwoHasSubMenu }
        )}
      >
        {menu.linkText}----
      </span>
      <span
        className={classnames(
          "icon-arrowright rounded-full  w-8 h-8 p-[6px]  text-black absolute right-4 top-1/2 -translate-y-1/2",
          {
            "text-white bg-primary ": hoverArrowIndex === menuIndex,
          }
        )}
      ></span>
    </div>
  );
}

export default MenuWithOutSubMenu;
