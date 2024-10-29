import categories from "@/public/assets/data/popular-categories.json";
import Image from "next/image";

export default function PopularCategories() {
  return (
    <>
      {categories && (
        <div className="container mx-auto">
          <h3 className="md:text-center mb-6 md:mb-8">Popular Categories</h3>
          <div className="flex gap-x-3 md:gap-x-[48px] flex-wrap justify-center">
            {categories.categories.map((cat: any, index: number) => (
              <div className="flex flex-col w-[110px]  md:w-[150px]  mb-6">
                <div className="rounded-full bg-gray-200 p-[10px] w-[110px] h-[110px] md:w-[150px] md:h-[150px] flex justify-center items-center">
                  <Image
                    src={cat.image}
                    width={80}
                    height={80}
                    alt={cat.ctaText}
                    className="w-20 h-20 "
                  ></Image>
                </div>
                <p className="text-12 md:text-16 md:font-medium text-center mt-[14px]">
                  {cat.ctaText}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
