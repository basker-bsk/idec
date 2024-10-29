"use client";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
export default function ProductFinderBanner() {
  const PFBanner = {
    __typename: "CallToAction",
    ctaText: {
      json: {
        data: {},
        content: [
          {
            data: {},
            content: [
              {
                data: {},
                marks: [],
                value:
                  "The product finder helps you easily locate and select the right solutions to meet your specific needs. ",
                nodeType: "text",
              },
            ],
            nodeType: "paragraph",
          },
        ],
        nodeType: "document",
      },
    },
    ctaTitle: "Product Finder",
    ctaTextColor: "#ffffff",
    ctaHideForLoggedInUsers: false,
    ctaStyle: "Transparent",
    ctaLink: {
      linkText: "Configure Your Own",
      linkId: null,
      linkUrl: "https://idec.com/configure-your-own",
      linkStyle: "Button",
      linkClass: null,
      linkNewWindow: false,
    },
    ctaBgImageDsktp: {
      title: "Product Finder-Desktop",
      url: "https://images.ctfassets.net/fg4hnnyn9urp/2AgVXQrL7BfTlk3tXCJLft/a7f9d3a0e2b24ccf1d4f460f347e4f04/product-finder-bg.png",
    },
    ctaBgImageMob: {
      title: "Product Finder-Mobile",
      url: "https://images.ctfassets.net/fg4hnnyn9urp/27eVEFDEsNNJ7vf1A0H4lS/5097d43fd05721ecff57833aa953015e/product-finder-bg-mob.png",
    },
  };
  const [screen, setScreen] = useState(
    window.innerWidth > 768 ? "desk" : "mob"
  );
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setScreen("desk");
      } else {
        setScreen("mob");
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const styleDesktop = {
    background: `url(${PFBanner.ctaBgImageDsktp.url}) repeat-x center`,
  };
  const styleMobile = {
    background: `url(${PFBanner.ctaBgImageMob.url}) repeat-x center`,
  };
  return (
    <>
      {PFBanner && (
        <div
          className=" text-white"
          style={screen === "desk" ? styleDesktop : styleMobile}
        >
          <div className="flex gap-4 justify-center items-center py-10 text-center flex-col">
            <h2>{PFBanner.ctaTitle}</h2>
            <p className="text-14 leading-14 md:text-16 md:leading-16">
              The product finder helps you easily locate and select the right
              solutions to meet your specific needs.
            </p>
            <div>
              <Button theme="secondary">{PFBanner.ctaLink.linkText}</Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
