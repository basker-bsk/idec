"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import classnames from "classnames";
import CarouselSlides from "./CarouselSlides";
import { useState } from "react";
import ScreenSize from "@/utlis/ScreenSize";
import Link from "next/link";
export default function Carousel({ series, crStyle }: any) {
  const [loadMore, setLoadMore] = useState(false);
  const settings: any = {
    dots: false,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: crStyle === "Series card" ? series?.crSlidesPerRow : 3.75,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    pauseOnFocus: false,
    responsive: [
      {
        breakpoint: 767,
        settings: "unslick",
      },
    ],
  };
  return (
    <>
      <div className="bg-gray-50">
        {series && (
          <div
            className={classnames(
              " mx-auto container  py-8",
              {
                "px-4 xl:py-12 xl:px-[50px]": crStyle === "Series card",
              },
              {
                "pl-4 xl:pl-[50px] xl:!pr-0 ": crStyle === "News card",
              }
            )}
          >
            <h3 className="mb-6 lg:mb-8">{series.crTitle}</h3>
            {ScreenSize() ? (
              <Slider {...settings}>
                {series?.crComponentsCollection?.items.map(
                  (slide: any, index: number) => (
                    <CarouselSlides
                      props={slide}
                      key={`b-${index}`}
                      crStyle={crStyle}
                    />
                  )
                )}
              </Slider>
            ) : (
              <div className="flex flex-col gap-4">
                {series?.crComponentsCollection?.items
                  .slice(
                    0,
                    !loadMore ? 3 : series?.crComponentsCollection?.items.length
                  )
                  .map((slide: any, index: number) => (
                    <CarouselSlides
                      props={slide}
                      key={`b-${index}`}
                      crStyle={crStyle}
                    />
                  ))}
              </div>
            )}
            {crStyle === "Series card" && (
              <>
                {series?.crComponentsCollection?.items?.length > 3 && (
                  <div
                    className="pt-6 md:hidden flex justify-center px-5 py-2 items-center text-12 font-medium"
                    onClick={() => setLoadMore(!loadMore)}
                  >
                    <span className="min-w-[80px] text-center">
                      {loadMore ? "Load Less" : "Load More"}
                    </span>
                    <span
                      className={classnames(
                        "icon-chevron-down ease-in-out duration-500 text-16",
                        { "rotate-180": loadMore }
                      )}
                    ></span>
                  </div>
                )}
              </>
            )}
            {crStyle === "News card" && (
              <>
                <div className="pt-6  hover:text-primary gap-2 flex justify-center py-2 items-center text-12 font-medium">
                  <Link
                    href={series?.crViewAllLink?.linkUrl}
                    target={
                      series?.crViewAllLink?.linkNewWindow ? "_blank" : "_self"
                    }
                    className={classnames(
                      "flex gap-1 items-center py-[5px] font-medium "
                    )}
                  >
                    {series?.crViewAllLink?.linkText}
                  </Link>
                  <span
                    className={classnames(
                      "icon-chevron-right ease-in-out duration-500 text-16"
                    )}
                  ></span>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </>
  );
}
