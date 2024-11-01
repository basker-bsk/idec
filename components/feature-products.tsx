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
    }
  }, [productList]);
  return (
    <div className="flex flex-col pb-16 lg:pb-8 p-4 lg:p-8 border border-gray-300 bg-white">
      <h4 className="idec-title uppercase text-[20px] lg:text-[50px] font-bold w-full lg:w-3/4 ">
        {FeatureProductsData.title}
      </h4>
      <div className="my-8">
        <div className="flex w-full relative flex-wrap">
          <ul className="grid gap-4 grid-rows-1 grid-flow-col">
            <li>
              <Button
                className="uppercase"
                theme={
                  selectedCategory === "automation" ? "primary" : "secondary"
                }
                onClick={() => filterCategory("automation")}
              >
                Automation
              </Button>
            </li>
            <li>
              <Button
                className="uppercase"
                theme={
                  selectedCategory === "safety-explosions"
                    ? "primary"
                    : "secondary"
                }
                onClick={() => filterCategory("safety-explosions")}
              >
                safety & explosions
              </Button>
            </li>
            <li>
              <Button
                className="uppercase"
                theme={
                  selectedCategory === "switches-indicators"
                    ? "primary"
                    : "secondary"
                }
                onClick={() => filterCategory("switches-indicators")}
              >
                switches & indicators
              </Button>
            </li>
            <li>
              <Button
                className="uppercase"
                theme={
                  selectedCategory === "industrial-components"
                    ? "primary"
                    : "secondary"
                }
                onClick={() => filterCategory("industrial-components")}
              >
                industrial components
              </Button>
            </li>
            <li>
              <Button
                className="uppercase"
                theme={selectedCategory === "auto-id" ? "primary" : "secondary"}
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
