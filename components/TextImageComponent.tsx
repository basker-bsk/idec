import categories from "@/public/assets/data/text-image.json";
import Link from "next/link";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import classnames from "classnames";
import { Button } from "./ui/button";
import ScreenSize from "@/utlis/ScreenSize";
export default function TextImageComponent() {
  return (
    <div className="container mx-auto px-4 lg:px-[50px]">
      <div
        className={classnames(
          "flex flex-col md:flex-row  relative",
          {
            "md:justify-end md:items-end":
              categories.tiImagePosition === "Right",
          },
          {
            "": categories.tiImagePosition === "Left",
          }
        )}
      >
        <div
          className={classnames(
            "bg-gray-100 md:w-7/12",
            {
              "flex-row-reverse": categories.tiImagePosition === "Left",
            },
            {
              "flex-row ": categories.tiImagePosition === "Right",
            }
          )}
        >
          <img
            src={categories.tiImageDesktop.url}
            width={42}
            height={42}
            alt={categories.tiImageDesktop.title}
            className="w-full h-auto rounded-tl-2xl rounded-tr-2xl md:rounded-md"
          ></img>
        </div>
        <div
          className={classnames(
            "md:absolute md:top-1/2 md:-translate-y-1/2 md:w-6/12 gradient-red text-white py-8 px-6 lg:py-20 md:px-8 rounded-bl-2xl rounded-br-2xl md:rounded-md flex flex-col gap-2",
            {
              "md:right-0": categories.tiImagePosition === "Left",
            },
            {
              "md:left-0": categories.tiImagePosition === "Right",
            }
          )}
        >
          <span className="font-medium text-12 leading-12 md:text-14 md:leading-14 uppercase">
            {categories.tiOverline}
          </span>
          <h4>{categories.tiTitle}</h4>
          <div>{documentToReactComponents(categories.tiDescription.json)}</div>
          <div className="flex gap-3 mt-4 md:mt-8">
            <Button theme="secondary">
              <Link href={categories.tiButton.linkUrl}>
                {categories.tiButton.linkText}
              </Link>
            </Button>
            <Button theme="link" variant="iconText">
              <Link className="text-white" href={categories.tiLink.linkUrl}>
                {categories.tiLink.linkText}
              </Link>
              <span className="icon-chevron-right text-white"></span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
