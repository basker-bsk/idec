"use client";
import FeatureProductsData from "@/public/assets/data/feature-products.json";
import { Button } from "./ui/button";
import Image from "next/image";
import { useState } from "react";
import { useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import { Scrollbar } from "swiper/modules";

export default function FeatureProducts() {
  const [selectedCategory, setSelectedCategory] = useState("automation");
  const [productList, setProductList] = useState([]);
  const filterCategory = (category: any) => {
    setSelectedCategory(category);
  };
  useEffect(() => {
    if (selectedCategory) {
      console.log(selectedCategory);
      const selectedProducts: any = FeatureProductsData.products.filter((e) => {
        return e.id === selectedCategory;
      });
      if (selectedProducts) {
        setProductList(selectedProducts[0].types);
      }
    }
  }, [selectedCategory]);
  useEffect(() => {
    if (productList.length > 0) {
      console.log(productList);
    }
  }, [productList]);
  return (
    <div className="flex flex-col pb-16 lg:pb-8 p-4 lg:p-8 border border-gray-300 bg-white">
      <h3 className="idec-title uppercase text-[20px] lg:text-[50px] font-extrabold w-full lg:w-3/4 ">
        {FeatureProductsData.title}
      </h3>
      <div className="my-8">
        <div className="flex w-full relative flex-wrap">
          <ul className="grid gap-4 grid-rows-1 grid-flow-col">
            <li>
              <Button
                className="uppercase"
                variant={
                  selectedCategory === "automation" ? "default" : "outline"
                }
                onClick={() => filterCategory("automation")}
              >
                Automation
              </Button>
            </li>
            <li>
              <Button
                className="uppercase"
                variant={
                  selectedCategory === "safety-explosions"
                    ? "default"
                    : "outline"
                }
                onClick={() => filterCategory("safety-explosions")}
              >
                safety & explosions
              </Button>
            </li>
            <li>
              <Button
                className="uppercase"
                variant={
                  selectedCategory === "switches-indicators"
                    ? "default"
                    : "outline"
                }
                onClick={() => filterCategory("switches-indicators")}
              >
                switches & indicators
              </Button>
            </li>
            <li>
              <Button
                className="uppercase"
                variant={
                  selectedCategory === "industrial-components"
                    ? "default"
                    : "outline"
                }
                onClick={() => filterCategory("industrial-components")}
              >
                industrial components
              </Button>
            </li>
            <li>
              <Button
                className="uppercase"
                variant={selectedCategory === "auto-id" ? "default" : "outline"}
                onClick={() => filterCategory("auto-id")}
              >
                auto-id
              </Button>
            </li>
          </ul>
        </div>
        <div className="mt-6 flex w-full relative flex-wrap">
          <Swiper
            slidesPerView={4}
            spaceBetween={20}
            scrollbar={{
              hide: true,
            }}
            modules={[Scrollbar]}
            className="mySwiper"
          >
            {productList &&
              productList.map((data: any, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div className="pb-8">
                      <Image
                        src={data.image}
                        width={550}
                        height={600}
                        alt={data.name}
                        className="border p-2 border-gray-300 bg-white rounded-md w-auto h-auto"
                      />
                      <div className="mt-5 text-black text-sm font-bold">
                        {data.name}
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </div>

        <div className="mt-5 flex justify-center flex-row">
          <Button className="uppercase">{FeatureProductsData.viewall}</Button>
        </div>
      </div>
    </div>
  );
}
