"use client";
import FeatureProductsData from "@/public/assets/data/feature-products.json";
import { Button } from "../ui/button";
import Image from "next/image";
import { useState } from "react";
import { useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import { Scrollbar } from "swiper/modules";
import Buttons from "@/app/buttons/page";

export default function FeatureProducts() {
  const swiper = useSwiper();
  const [selectedCategory, setSelectedCategory] = useState("automation");
  const [productList, setProductList] = useState([]);

  const filterCategory = (category: any) => {
    setSelectedCategory(category);
  };
  useEffect(() => {
    swiper?.init();
  }, [selectedCategory]);
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
      // console.log(productList);
    }
  }, [productList]);

  return (
    <div className="flex flex-col pb-16 lg:pb-8 p-4 lg:p-8 border border-gray-300 bg-white">
      <h4 className="idec-title uppercase text-[20px] lg:text-[50px] font-bold w-full lg:w-3/4 ">
        {FeatureProductsData.title}
      </h4>
      <div className="mt-8">
        <div className="flex relative flex-wrap overflow-hidden w-full">
          <ul className="flex gap-4 overflow-x-auto ">
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
                theme={selectedCategory === "auto-id" ? "primary"
                  : "secondary"}
                onClick={() => filterCategory("auto-id")}
              >
                auto-id
              </Button>
            </li>
          </ul>
        </div>
        <div className="mt-6 flex w-full relative flex-wrap">
          <Swiper
            breakpoints={{
              390: {
                slidesPerView: 1.5,
              },
              600: {
                slidesPerView: 2.5,
              },
              1024: {
                slidesPerView: 4.5,
              },
            }}
            initialSlide={0}
            spaceBetween={20}
            scrollbar={{
              hide: false,
            }}
            autoplay={{
              delay: 2500,
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
                        className="border p-1 border-gray-300 bg-white rounded-md w-[300px] h-auto"
                      />
                      <div className="mt-2 text-[12px] lg:text-[14px] font-bold">
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
