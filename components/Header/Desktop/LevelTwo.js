"use client";
import classnames from "classnames";
import Link from "next/link";
export default function LevelTwo({ levelTwoMenus }) {
  return (
    <>
      <ul className="flex flex-col max-h-80 flex-wrap gap-x-4">
        {levelTwoMenus.map((levelTwo, index) => (          
            <li
              key={levelTwo.linkText}
              className={classnames("text-[12px] mb-2 hover:text-red-800")}
            >
              <Link
                className=""
                href={levelTwo.linkUrl}
                title={levelTwo.linkText}
              />
              {levelTwo.linkText}
            </li>          
        ))}
      </ul>
    </>
  );
}
