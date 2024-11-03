"use client";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import React, { useEffect, useState } from "react";
import Odometer from "react-odometerjs";
import "odometer/themes/odometer-theme-default.css";
export default function USP({ usp }) {
  const [valueOne, setValueOne] = useState(0);
  const [valueTwo, setValueTwo] = useState(0.0);
  const [valueThree, setValueThree] = useState(0);
  let exp;
  let expValue;
  let expYear;
  exp = usp.counter1Text.split(" ");
  expValue = exp[0];
  expYear = exp[exp.length - 1];
  console.log(exp, expValue, expYear);
  useEffect(() => {
    const timeoutIdOne = setTimeout(
      () => setValueOne(parseInt(expValue)),
      1500
    );
    const timeoutIdTwo = setTimeout(
      () => setValueTwo(parseFloat(usp.counter2Text)),
      1500
    );
    const timeoutIdThree = setTimeout(
      () => setValueThree(parseInt(usp.counter3Text)),
      1500
    );
    return () => {
      clearTimeout(timeoutIdOne);
      clearTimeout(timeoutIdTwo);
      clearTimeout(timeoutIdThree);
    };
  }, []);

  return (
    <div className="gradient-gray w-full py-6" onScroll={() => handleScroll()}>
      <div className="flex container mx-auto px-4 md:px-[50px] xl:px-[100px] items-center">
        <div className="flex md:gap-5 lg:gap-10 flex-col lg:flex-row  items-center">
          <div className="text-18 leading-18 font-medium md:text-20 md:leading-[30px] w-full lg:w-1/2">
            {documentToReactComponents(usp?.introText?.json)}
          </div>
          <div className="flex gap-7 md:gap-12 w-full lg:w-1/2">
            <div className="flex flex-col md:gap-1">
              <span className="text-12 leading-12 md:text-14 md:leading-14">
                {usp.counter1Prefix}
              </span>
              <div className="flex items-center gap-1">
                <Odometer
                  value={valueOne}
                  className="text-20 leading-20 md:text-24 md:leading-24 font-medium"
                  format="(,ddd).dd"
                />
                <span className="text-20 leading-20 md:text-24 md:leading-24 font-medium">
                  {expYear}
                </span>
              </div>
              <span className="text-12 leading-12 md:text-14 md:leading-14">
                {usp.counter1Suffix}
              </span>
            </div>
            <div className="flex flex-col md:gap-1">
              <span className="text-12 leading-12 md:text-14 md:leading-14">
                {usp.counter2Prefix}
              </span>
              <Odometer
                value={valueTwo}
                className="text-20 leading-20 md:text-24 md:leading-24 font-medium"
                format="(,ddd).dd"
              />
              <span className="text-12 leading-12 md:text-14 md:leading-14">
                {usp.counter2Suffix}
              </span>
            </div>
            <div className="flex flex-col md:gap-1">
              <span className="text-12 leading-12 md:text-14 md:leading-14">
                {usp.counter3Prefix}
              </span>
              <div className="flex items-center gap-1">
                <Odometer
                  value={valueThree}
                  className="text-20 leading-20 md:text-24 md:leading-24 font-medium"
                  format="(,ddd).dd"
                />
                <span className="text-20 leading-20 md:text-24 md:leading-24 font-medium">
                  +
                </span>
              </div>
              <span className="text-12 leading-12 md:text-14 md:leading-14">
                {usp.counter3Suffix}
              </span>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          section {
            height: 100vh;
            background: #fefae0;
            display: grid;
            place-items: center;
            font-size: 90px;
          }

          .stats-container {
            display: grid;
            gap: 24px;
            grid-template-columns: 1fr 1fr 1fr;
            margin: 30px auto;
            max-width: 1000px;
            padding-inline: 16px;
          }

          .stats-container .stat {
            background: #ef233c;
            padding: 24px;
            text-align: center;
            color: #edf2f4;
          }

          .stats-container .stat .odometer {
            font-size: 50px;
            font-weight: bold;
            display: inline-block;
          }

          .stats-container .stat .type {
            font-size: 20px;
          }

          .odometer.plus {
            position: relative;
          }

          .odometer.plus::after {
            content: "+";
            position: absolute;
            top: 0;
            right: -16px;
            font-size: 20px;
          }

          @media (max-width: 700px) {
            .stats-container {
              grid-template-columns: 1fr;
            }
          }
        `}
      </style>
    </div>
  );
}
