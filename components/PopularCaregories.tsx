import categories from "@/public/assets/data/popular-categories.json";
import Image from "next/image";
import Link from "next/link";

export default function PopularCategories() {
  return (
    <>
      {categories && categories.clmContentsCollection && (
        <div className="container mx-auto px-4 xl:px-[50px]">
          <h3 className="md:text-center mb-6 md:mb-8">Popular Categories</h3>
          <div className="flex gap-x-3 lg:gap-x-[48px] flex-wrap justify-center">
            {categories.clmContentsCollection.items.map(
              (cat: any, index: number) => (
                <Link
                  href={cat.cdLink.linkUrl}
                  className="flex flex-col w-[110px]  lg:w-[150px]  mb-6"
                  key={cat.ctaText}
                  target={cat.cdLink.linkNewWindow ? "_blank" : "_self"}
                >
                  <span className="rounded-full bg-gray-50 p-[10px] w-[110px] h-[110px] lg:w-[150px] lg:h-[150px] flex justify-center items-center">
                    <Image
                      src={cat.cdImageVideo.url}
                      width={80}
                      height={80}
                      alt={cat.cdImageVideo.title}
                      className="w-20 h-20 "
                    ></Image>
                  </span>
                  <span className="text-12 md:text-16 md:font-medium text-center mt-[14px]">
                    {cat.cdTitle}
                  </span>
                </Link>
              )
            )}
          </div>
        </div>
      )}
    </>
  );
}
