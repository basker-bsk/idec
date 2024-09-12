import Categories from "@/public/assets/data/categories.json";
import { Button } from "./ui/button";
export default function CategoriesComponent() {
  return (
    <div className="flex flex-col pb-16 lg:pb-8 p-4 lg:p-8 border border-gray-300 bg-white">
      <h2 className="uppercase font-bold text-blue-800 ">
        {Categories.category}
      </h2>
      <h3 className="idec-title uppercase text-[20px] lg:text-[50px] font-extrabold w-full lg:w-3/4 ">
        {Categories.title}
      </h3>
      <div className="my-8">
        <div className="flex w-full relative ">
          <ul className="w-full categories">
            {Categories.categories.map((cat, index) => (
              <li
                className=" w-full flex flex-col lg:flex-row "
                key={`cat-${index}`}
              >
                <span className="hover:text-red-800 title cursor-pointer border-b border-gray-300 py-2 font-bold uppercase w-full lg:w-1/2">
                  {cat.title}
                </span>
                <span className="desc bg-white h-full lg:absolute left-0 lg:left-1/2 top-0 w-full lg:w-1/2 lg:px-6 leading-8">
                  {cat.desc}
                </span>
              </li>
            ))}
          </ul>
          <div className="absolute left-0 lg:left-1/2 -bottom-16 lg:bottom-0 lg:px-6">
            <Button className="uppercase">See all {Categories.category}</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
