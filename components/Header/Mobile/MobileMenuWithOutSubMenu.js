import Link from "next/link";
import classnames from "classnames";
import Image from "next/image";
function MobileMenuWithOutSubMenu({ menu, menuIndex, icon, isAllProducts }) {
  return (
    <Link
      href={menu.linkUrl}
      title={menu.linkText}
      className="flex justify-between items-center"
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
    </Link>
  );
}

export default MobileMenuWithOutSubMenu;
