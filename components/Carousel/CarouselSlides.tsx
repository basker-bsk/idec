import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";
import { isEmpty } from "lodash";
import classnames from "classnames";

export default function CarouselSlides({ props, crStyle }: any) {
  return (
    <>
      {props && (
        <div
          className={classnames(
            " ease-in-out duration-500",
            {
              "series-banner": crStyle === "Series card",
            },
            {
              "news-banner": crStyle === "News card",
            }
          )}
        >
          {!isEmpty(props.cdBadge) && (
            <span className="tag absolute left-0 top-0 ">{props.cdBadge}</span>
          )}
          <div
            className={classnames(
              "flex flex-col",
              {
                " w-1/2 gap-2": crStyle === "Series card",
              },
              {
                "p-5 gap-5": crStyle === "News card",
              }
            )}
          >
            <div className="flex flex-col">
              {!isEmpty(props.cdOverline1) && (
                <span
                  className={classnames(
                    "text-12 font-medium leading-12 md:text-14 md:font-bold md:leading-14",
                    {
                      "text-gray-500": crStyle === "News card",
                    }
                  )}
                >
                  {props.cdOverline1}
                </span>
              )}
              {!isEmpty(props.cdOverline2) && (
                <span className="text-12 font-medium leading-12 md:text-14 md:leading-14 text-gray-400">
                  {props.cdOverline2}
                </span>
              )}
            </div>
            <p className="text-16 leading-16 md:text-18 md:leading-18 font-medium">
              {props.cdTitle}
            </p>
            <Link
              href={props.cdLink.linkUrl}
              target={props.cdLink.linkNewWindow ? "_blank" : "_self"}
              className={classnames(
                "flex gap-1 items-center py-[5px] font-medium  hover:text-primary",
                {
                  "leading-14 text-14": crStyle === "Series card",
                },
                {
                  "leading-16 text-16": crStyle === "News card",
                }
              )}
            >
              {crStyle === "News card" && (
                <span className="icon-plus text-primary text-24"></span>
              )}
              {props.cdLink.linkText}
              {crStyle === "Series card" && (
                <span className="icon-chevron-right text-24"></span>
              )}
            </Link>
          </div>
          <div
            className={classnames(
              " ",
              {
                "w-1/2": crStyle === "Series card",
              },
              {
                "w-full": crStyle === "News card",
              }
            )}
          >
            {crStyle === "Series card" ? (
              <Image
                src={props.cdImage.url}
                width={150}
                height={150}
                alt={props.cdImage.title}
                className={classnames("md:w-full md:h-full ", {
                  "rounded-tl-md rounded-tr-md rounded-md":
                    crStyle === "News card",
                })}
              ></Image>
            ) : (
              <Image
                src={props.cdImage.url}
                width={250}
                height={250}
                alt={props.cdImage.title}
                className={classnames("md:w-full md:h-full ", {
                  "rounded-tl-md rounded-tr-md rounded-md":
                    crStyle === "News card",
                })}
              ></Image>
            )}
          </div>
        </div>
      )}
    </>
  );
}
