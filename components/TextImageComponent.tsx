import Link from "next/link";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import classnames from "classnames";
import { Button } from "./ui/button";
import ScreenSize from "@/utils/ScreenSize";
import Image from "next/image";
export default function TextImageComponent({ data }: any) {
  const options = {
    renderMark: {
      [MARKS.BOLD]: (text: any) => `<custom-bold>${text}<custom-bold>`,
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node: any, next: any) =>
        `<custom-paragraph>${next(node.content)}</custom-paragraph>`,
    },
  };
  return (
    <>
      {data && (
        <div className="container mx-auto px-4 lg:px-[50px]">
          <div
            className={classnames(
              "flex flex-col md:flex-row  relative",
              {
                "md:justify-end md:items-end": data.tiImagePosition === "Right",
              },
              {
                "": data.tiImagePosition === "Left",
              }
            )}
          >
            <div
              className={classnames(
                "bg-gray-100 md:w-7/12",
                {
                  "flex-row-reverse": data.tiImagePosition === "Left",
                },
                {
                  "flex-row ": data.tiImagePosition === "Right",
                }
              )}
            >
              <Image
                src={data.tiImageDesktop.url}
                width={358}
                height={178}
                alt={data.tiImageDesktop.title}
                className="md:w-[878px] md:h-[460px] w-full h-auto rounded-tl-2xl rounded-tr-2xl md:rounded-md"
              ></Image>
            </div>
            <div
              className={classnames(
                "md:absolute md:top-1/2 md:-translate-y-1/2 md:w-6/12 gradient-red text-white py-8 px-6 lg:py-20 md:px-8 rounded-bl-2xl rounded-br-2xl md:rounded-md flex flex-col gap-2",
                {
                  "md:right-0": data.tiImagePosition === "Left",
                },
                {
                  "md:left-0": data.tiImagePosition === "Right",
                }
              )}
            >
              <span className="font-medium text-12 leading-12 md:text-14 md:leading-14 uppercase">
                {data.tiOverline}
              </span>
              <h4>{data.tiTitle}</h4>
              <div>{documentToReactComponents(data?.tiDescription?.json)}</div>
              <div className="flex gap-3 mt-4 md:mt-8">
                {data?.tiButton && (
                  <Button theme="secondary">
                    <Link href={data?.tiButton?.linkUrl}>
                      {data?.tiButton?.linkText}
                    </Link>
                  </Button>
                )}
                {data?.tiLink && (
                  <Button theme="link" variant="iconText">
                    <Link className="text-white" href={data?.tiLink?.linkUrl}>
                      {data?.tiLink?.linkText}
                    </Link>
                    <span className="icon-chevron-right text-white"></span>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
