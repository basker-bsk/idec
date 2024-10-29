"use client";

import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Banners from "@/public/assets/data/banner.json";
import HeroSlides from "./heroslides";

function banner() {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    pauseOnFocus: false,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="lg:min-h-[460px] herobanner">
      {Banners && (
        <Slider {...settings}>
          {Banners.crComponentsCollection.items.map(
            (data: any, index: number) => (
              <div key={index}>
                <HeroSlides props={data} />
              </div>
            )
          )}
        </Slider>
      )}
    </div>
  );
}

export default banner;
