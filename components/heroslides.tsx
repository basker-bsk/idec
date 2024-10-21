import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function heroslides(props: any) {
  return (
    <div className="min-h-[260px] lg:min-h-[460px] relative flex flex-col lg:flex-row">
      <div className="relative z-1 min-h-[140px]">
        <LazyLoadImage
          alt={props.data.heading}
          effect="blur"
          src={props.data.bgImageDesktop}
        />
      </div>
      <div className=" z-10 relative lg:absolute w-full md:w-1/2  md:left-20 xl:left-40 md:top-1/2 md:-translate-y-2/4 text-center md:text-left px-4 md:px-0 lg:pt-16 md:pt-0">
        <div className=" flex flex-col">
          <h4 className="font-bold lg:text-4xl">{props.data.heading}</h4>
          <p className="text-[12px] lg:text-2xl">{props.data.description}</p>
        </div>
      </div>
    </div>
  );
}

export default heroslides;
