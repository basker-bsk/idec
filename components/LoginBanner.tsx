import Link from "next/link";
import { Button } from "./ui/button";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
export default function LoginBanner({ data }: any) {
  return (
    <div className="container mx-auto px-4 lg:px-[50px]">
      <div className="gradient-red p-4 md:p-10 lg:px-20 rounded-md flex flex-col md:flex-row justify-between gap-4 md:items-center ">
        <div className="text-white font-medium md:w-3/4">
          <h3 className="mb-1">{data.ctaTitle}</h3>
          <div className="text-14 leading-14 md:text-16 md:leading-16">
            {documentToReactComponents(data.ctaText.json)}
          </div>
        </div>
        <div className="md:w-1/4 flex justify-end">
          <Button theme="secondary">
            <Link
              href={data.ctaLink.linkUrl}
              target={data.ctaLink.linkNewWindow ? "_blank" : "_self"}
            >
              {data.ctaLink.linkText}
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
