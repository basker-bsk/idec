import Link from "next/link";
import { Button } from "./ui/button";
import rd from "@/public/assets/data/RD.json";
import Image from "next/image";
export default function ResourceAndDocuments() {
  return (
    <div className="gradient-blue ">
      <div className="container mx-auto px-5 md:px-[50px] py-6 md:py-12">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-4 md:mb-6">
          <h3>{rd.listLinkTitle}</h3>
          <p className="md:hidden text-14 leading-14">
            Check out our resource hub for CAD files and documents to streamline
            workflow and boost collaboration for engineers & designers.
          </p>
          <div className="">
            <Button theme="primary">{rd.listLinkviewAllLink.linkText}</Button>
          </div>
        </div>
        <div>
          <ul className="grid md:grid-cols-2 gap-1 flex-wrap">
            {rd.listLinkCollection.items.map((list, index) => (
              <li
                key={list.linkText}
                className="px-5 py-4 flex justify-between items-center border-b border-gray-300"
              >
                <Link
                  href={list.linkUrl}
                  className="text-16 font-medium flex gap-2 items-center"
                >
                  <Image
                    src={list.linkIcon.url}
                    width={24}
                    height={24}
                    alt={list.linkIcon.title}
                    className="w-6 h-6 "
                  ></Image>
                  <span>{list.linkText}</span>
                </Link>
                <span className="text-24 icon-arrowright"></span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
