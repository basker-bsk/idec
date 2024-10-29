import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function heroslides({ props }: any) {
  return (
    <div className="min-h-[260px] lg:min-h-[460px] relative flex flex-col lg:flex-row">
      <div className="relative z-1 min-h-[140px]">
        <LazyLoadImage alt="" effect="blur" src={props.bgImageDesktop?.url} />
      </div>
      <div className=" z-10 relative lg:absolute w-full md:w-1/2  md:left-20 xl:left-40 md:top-1/2 md:-translate-y-2/4 text-center md:text-left px-4 md:px-0 lg:pt-16 md:pt-0 ">
        <div
          className={` flex flex-col gap-2 md:gap-3 mb-6 md:mb-8`}
          style={{
            color: `${props.bannerTextColor}`,
          }}
        >
          <h2 className="font-bold lg:text-4xl">{props.bannerTitle}</h2>
          <p className="text-14 leading-14 md:text-16 md:leading-16">
            {props.bannerBody}
          </p>
        </div>
      </div>
    </div>
  );
}

export default heroslides;
