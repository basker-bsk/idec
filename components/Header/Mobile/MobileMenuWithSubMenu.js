import classnames from "classnames";
import Image from "next/image";
function MobileMenuWithSubMenu({ menu, menuIndex, icon, isAllProducts }) {
  return (
    <div
      className="flex justify-between items-center"
      onClick={() => {
        if (
          menu.linkChildrenCollection.items &&
          menu.linkChildrenCollection.items.length > 0
        ) {
          showLevelMenu(
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
          "text-24 ease-in-out text-black duration-500 icon-arrowright"
        )}
      ></i>
    </div>
  );
}

export default MobileMenuWithSubMenu;
