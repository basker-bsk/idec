import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function heroslides(props: any) {
  return (
    <div className="relative flex">
      <div className="relative z-1">
        <LazyLoadImage
          alt={props.data.heading}
          effect="blur"
          src={props.data.bgImageDesktop}
        />
      </div>
      <div className=" z-2 absolute w-full md:w-1/2  md:left-20 xl:left-40 md:top-1/2 md:-translate-y-2/4 text-center md:text-left px-16 md:px-0 pt-16 md:pt-0">
        <div className=" hidden lg:flex flex-col">
          <h3 className="font-bold text-4xl">{props.data.heading}</h3>
          <p className="text-2xl">{props.data.description}</p>
        </div>
      </div>
    </div>
  );
}

export default heroslides;
