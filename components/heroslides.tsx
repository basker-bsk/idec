"use client";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Link from "next/link";
import { useEffect, useState } from "react";

function HeroSlides({ props }: any) {
  // const [isBigScreen, setIsBigScreen] = useState(false);
  // useEffect(() => {
  //   if (window.matchMedia("(min-width: 62rem)").matches) {
  //     setIsBigScreen(true);
  //   } else {
  //     setIsBigScreen(false);
  //   }
  // }, []);
  // window.matchMedia("(min-width: 62rem)").addEventListener("change", (e) => {
  //   if (e.matches) {
  //     setIsBigScreen(true);
  //   } else {
  //     setIsBigScreen(false);
  //   }
  // });
  return (
    <div className=" relative flex flex-col lg:flex-row">
      <div className="relative z-1 ">
        {/* {isBigScreen ? (
          <LazyLoadImage
            alt={props.bannerBgImgDsktp.title}
            effect="blur"
            src={props.bannerBgImgDsktp.url}
          />
        ) : (
          <LazyLoadImage
            alt={props.bannerBgImgMob.title}
            effect="blur"
            src={props.bannerBgImgMob.url}
          />
        )} */}
        <LazyLoadImage
          alt={props.bannerBgImgDsktp.title}
          effect="blur"
          src={props.bannerBgImgDsktp.url}
        />
      </div>
      <div className="pt-6 md:pt-0 z-10 absolute w-full md:w-1/3 md:left-20 xl:left-40 md:top-1/2 md:-translate-y-2/4 px-4 md:px-0  ">
        <div
          className={`flex flex-col mb-6 md:mb-8 w-full md:max-w-[500px]`}
          style={{
            color: `${props.bannerTextColor}`,
          }}
        >
          {props.bannerOverlineTxt && (
            <div>
              <span className="float-left mb-3 text-10 font-bold uppercase text-white bg-black rounded-tl-md rounded-br-md py-[5px] px-[15px]">
                {props.bannerOverlineTxt}
              </span>
            </div>
          )}
          <h2 className="text-32 leading-32 md:text-48 md:leading-48 font-medium mb-2 md:mb-3">
            {props.bannerTitle}
          </h2>
          <p className="text-14 leading-14 md:text-16 md:leading-16 mb-6 md:mb-8">
            {props.bannerBody}
          </p>
          <div>
            <Link
              href={props.bannerLinkCollection.items[0].linkUrl}
              target={
                props.bannerLinkCollection.items[0].linkNewWindow
                  ? "_blank"
                  : "_self"
              }
              className="py-[7px] md:py-3 px-5 bg-white  text-12 md:text-14 font-medium rounded-md text-black w-auto"
            >
              {props.bannerLinkCollection.items[0].linkText}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSlides;
