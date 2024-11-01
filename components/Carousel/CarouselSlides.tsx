import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";
import { isEmpty } from "lodash";
import classnames from "classnames";

export default function CarouselSlides({ props }: any) {
  return (
    <>
      {props && (
        <div className="series-banner ease-in-out duration-500">
          {!isEmpty(props.cdBadge) && (
            <span className="tag absolute left-0 top-0 ">{props.cdBadge}</span>
          )}
          <div className="flex flex-col gap-2">
            <div className="flex flex-col">
              <span className="text-12 font-medium leading-12 md:text-14 md:font-bold md:leading-14">
                {props.cdOverline1}
              </span>
              <span className="text-12 font-medium leading-12 md:text-14 md:leading-14 text-gray-400">
                {props.cdOverline2}
              </span>
            </div>
            <p className="text-16 leading-16 md:text-18 md:leading-18 font-medium">
              {props.cdTitle}
            </p>
            <Link
              href={props.cdLink.linkUrl}
              target={props.cdLink.linkNewWindow ? "_blank" : "_self"}
              className="flex gap-1 items-center py-[5px] font-medium leading-14 text-14 hover:text-primary"
            >
              {props.cdLink.linkText}
              <span className="icon-chevron-right text-24"></span>
            </Link>
          </div>
          <div>
            <Image
              src={props.cdImage.url}
              width={150}
              height={150}
              alt={props.cdImage.title}
              className="md:w-[184px] md:h-[184px] "
            ></Image>
          </div>
        </div>
      )}
    </>
  );
}
