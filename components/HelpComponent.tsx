import Link from "next/link";
import { Button } from "./ui/button";

import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import help from "@/public/assets/data/help.json";
import Image from "next/image";
export default function HelpComponent() {
  return (
    <div className="gradient-blue ">
      <div className="container mx-auto px-5 lg:px-[50px] py-6 md:py-12">
        <div className="flex flex-col gap-2 mb-4 md:mb-8">
          <h3>{help.clmTitle}</h3>
          <p className="text-16 leading-16">
            Get the help and resources you need quickly with IDEC
          </p>
        </div>
        <div>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 flex-wrap">
            {help?.clmContentsCollection?.items?.map(
              (list: any, index: number) => (
                <li
                  key={list.cdTitle}
                  className="flex p-6  gap-5 justify-between bg-white rounded-md"
                >
                  <Link
                    href={list.cdLink.linkUrl}
                    target={list.cdLink.linkNewWindow ? "_blank" : "_self"}
                  >
                    <Image
                      src={list.cdImage.url}
                      width={44}
                      height={44}
                      alt={list.cdImage.title}
                      className="w-[44px] h-[44px] "
                    ></Image>
                  </Link>
                  <div className="flex flex-col gap-1 md:gap-2">
                    <h4 className="text-16 leading-16 md:text-20 md:leading-20">
                      <Link
                        href={list.cdLink.linkUrl}
                        target={list.cdLink.linkNewWindow ? "_blank" : "_self"}
                      >
                        {list.cdLink.linkText}
                      </Link>
                    </h4>
                    <div className="text-14 leading-14">
                      {documentToReactComponents(list?.cdDescription?.json)}
                    </div>
                  </div>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
