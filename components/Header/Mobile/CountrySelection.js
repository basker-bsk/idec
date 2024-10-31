import { useState } from "react";
import classnames from "classnames";
import regions from "@/public/assets/data/regions.json";
export default function CountrySelection() {
  const [isCountrySelectionOpen, setIsCountrySelectionOpen] = useState(false);
  const [chooseRegion, setChooseRegion] = useState({
    regionSelected: "",
    regionIndex: "",
  });
  const SelectRegion = (region, index) => {
    setChooseRegion(region);
    setChooseRegion({
      regionSelected: region.regionLabel,
      regionIndex: index,
    });
    setIsCountrySelectionOpen(false);
  };
  return (
    <>
      <div className="bg-gray-50 px-6 py-4 w-full">
        <div className="flex justify-between items-center">
          <p className="text-13 leading-14 font-medium flex items-center gap-1">
            <span className="text-gray-300">You are in</span>
            <span className="icon-globe text-gray-900 text-24"></span>
            <span className="text-gray-900">{chooseRegion.regionSelected}</span>
          </p>
          <p
            className="underline text-black"
            onClick={() => setIsCountrySelectionOpen(true)}
          >
            Change
          </p>
        </div>
      </div>
      <div
        className={classnames(
          "w-full fixed bg-white overflow-auto top-0 ease-in-out duration-500 transition-all h-full px-4 pb-4 z-10 ",
          { "left-0": isCountrySelectionOpen },
          { "-left-full": !isCountrySelectionOpen }
        )}
      >
        <div className="flex flex-col">
          <div className="h-[100px] relative flex justify-between items-end pb-4 mb-7">
            <div className="flex items-center">
              <div
                onClick={() => setIsCountrySelectionOpen(false)}
                className="flex gap-1 items-center"
              >
                <span className="icon-chevron-left text-24"></span>
                <p className="font-medium text-18 leading-18">IDEC Countries</p>
              </div>
            </div>
          </div>
          <ul className="flex flex-col gap-6">
            {regions.regionsCollection.items.map((region, index) => (
              <>
                {region.regionSite === "IDEC" && (
                  <li
                    className=" py-1 flex justify-between items-center"
                    onClick={() => SelectRegion(region, index)}
                  >
                    <span className="text-16 leading-16 font-medium">
                      {region.regionLabel}
                    </span>
                    {chooseRegion.regionIndex === index && (
                      <span className="rounded-full w-6 h-6 flex justify-center items-center bg-success">
                        <i className="icon-tick text-12 text-white font-bold"></i>
                      </span>
                    )}
                  </li>
                )}
              </>
            ))}
          </ul>
          <div className="gradient-red p-6 text-white flex flex-col gap-1 font-medium rounded-md mt-6">
            <span className="text-14 leading-14">Corporate Site</span>
            <div className="text-16 leading-16 flex gap-1 mt-2">
              <span>IDEC Global</span>
              <span className="icon-chevron-right text-24 "></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
