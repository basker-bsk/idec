"use client";

import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import HeroSlides from "./HeroSlides";

function HeroBanner({ banner }: any) {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    pauseOnFocus: false,
  };

  return (
    <div className="herobanner mx-auto container">
      {banner && (
        <Slider {...settings}>
          {banner.map((data: any, index: number) => (
            <HeroSlides props={data} key={`b-${index}`} />
          ))}
        </Slider>
      )}
    </div>
  );
}

export default HeroBanner;
