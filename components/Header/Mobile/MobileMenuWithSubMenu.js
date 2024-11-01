import classnames from "classnames";
import Image from "next/image";
function MobileMenuWithSubMenu({
  menu,
  menuIndex,
  showLevelMenu,
  thumbImage,
  isAllProducts,
  accodian,
}) {
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
            menuIndex,
            menu.linkText
          );
        }
      }}
    >
      <div className="flex gap-1 items-center">
        {thumbImage && isAllProducts && (
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
      {accodian ? (
        <i
          className={classnames(
            "text-24 ease-in-out text-black duration-500",
            {
              "icon-minus": accodian.open && menuIndex === accodian.index,
            },
            {
              "icon-plus": !accodian.open && menuIndex !== accodian.index,
            }
          )}
        ></i>
      ) : (
        <i
          className={classnames(
            "text-24 ease-in-out text-black duration-500 icon-arrowright"
          )}
        ></i>
      )}
    </div>
  );
}

export default MobileMenuWithSubMenu;
