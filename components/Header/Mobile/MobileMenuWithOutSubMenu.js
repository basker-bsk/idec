import Link from "next/link";
import classnames from "classnames";
import Image from "next/image";
function MobileMenuWithOutSubMenu({
  menu,
  menuIndex,
  thumbImage,
  isAllProducts,
}) {
  return (
    <Link
      href={menu.linkUrl}
      title={menu.linkText}
      className="flex justify-between items-center"
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
    </Link>
  );
}

export default MobileMenuWithOutSubMenu;
