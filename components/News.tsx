import NewsData from "@/public/assets/data/idec_news.json";
import { MoveUpRight } from "lucide-react";
import Link from "next/link";
export default function News() {
  return (
    <div className="bg-white">
      <div className="flex flex-col pb-16 lg:pb-8 p-4 lg:p-8 border border-gray-300">
        {NewsData.IdecNews.map((data, index) => (
          <div
            className="space-y-2 flex flex-wrap items-baseline"
            key={`news-${index}`}
          >
            <div className="w-full lg:w-1/2 lg:px-6 text-left">
              <h2 className="idec-title uppercase text-[32px] lg:text-[50px] font-extrabold mb-6">
                {data.news_title}
              </h2>
              <p>{data.description}</p>
            </div>
            <div className="w-full lg:w-1/2 lg:px-6">
              <ul className="flex justify-between lg:justify-around mt-4 lg:mt-0">
                {data.links.map((link, index) => (
                  <li
                    className="font-bold flex items-center hover:text-red-800"
                    key={`links-${index}`}
                  >
                    <Link href={link.url} className="">
                      {link.name}
                    </Link>
                    <MoveUpRight className="h-4 w-4 " />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
        <div className="flex flex-col pt-16 lg:pb-8 p-2 lg:p-8">
          <div className="space-y-2 flex flex-wrap items-baseline">
            <div className="w-full">
              <h2 className="font-bold text-left border-b border-t py-3 lg:text-[24px]">
                {NewsData.news_heighlights}
              </h2>
              <ul className="w-full">
                {NewsData.NewsList.map((list, index) => (
                  <li
                    key={`NewsData-${index}`}
                    className="w-full flex border-b flex-col lg:flex-row text-left border-gray-300 py-3 font-bold"
                  >
                    <p className="mr-32 py-2">{list.date}</p>
                    <p className="py-2">{list.news}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
