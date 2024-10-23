"use client";
import classnames from "classnames";
import Link from "next/link";
export default function LevelTwo(props) {
  return (
    <>
      <ul className="flex flex-col max-h-80 flex-wrap gap-x-4">
        {props.subCategories.map((level2, index) => (
          <>
            <li
              key={level2.name}
              className={classnames("text-[12px] mb-2 hover:text-red-800")}
            >
              <Link className="" href="/" title={level2.name} />
              {level2.name}
            </li>
          </>
        ))}
      </ul>
    </>
  );
}
