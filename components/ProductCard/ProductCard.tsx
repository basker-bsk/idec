"use client";
import Image from "next/image";
import { Button } from "../ui/button";
function ProductCard() {
  return (
    <div className="max-w-[323px] ml-14 rounded-2xl border-halfGray border bg-white px-5">
      <div className="w-full flex justify-center py-10">
        <Image
          src="/assets/images/switch.png"
          width={180}
          height={180}
          alt=""
          className="object-cover"
        />
      </div>
      <div className="py-6">
        <div className="font-medium text-20 leading-7 text-black">
          Pushbuttons and Pilot Lights (23)
        </div>
        <p className="text-16 leading-6 mt-2 text-black">
          IDEC switches and pilot lights are the best engineered switches in the
          world for a reason.
        </p>
      </div>
      <div className="flex justify-start">
        <Button theme="secondary" variant="iconText">
          View All Series <span className="icon-chevron-right"></span>
        </Button>
      </div>
    </div>
  );
}

export default ProductCard;
