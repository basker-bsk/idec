import Image from "next/image";
import { Button } from "./ui/button";

export default function SustainabilityComponent() {
  return (
    <div className="flex items-center flex-col lg:flex-row">
      <div className=" w-full lg:w-5/12">
        <Image
          src="/images/people.jpg"
          alt="Content Image"
          width={400}
          height={200}
          layout="responsive"
          className="min-h-[200px]"
        />
      </div>
      <div className="p-6 w-full lg:w-7/12">
        <h2 className="idec-title uppercase text-[32px] lg:text-[50px] font-extrabold mb-6">
          Sustainability
        </h2>
        <p className="text-[14px] lg:text-[16px] mb-6">
          No matter your industry, APEM have the solutions you need to enhance
          productivity, efficiency, and user satisfaction. From material
          handling to defense, we tailor our HMIs to fit your unique industrial
          needs. Our extensive portfolio of products caters to a wide range of
          industries, including defense, agricultural machinery, medical, new
          mobility, material handling, and much more.
        </p>
        <Button className="uppercase">Learn More</Button>
      </div>
    </div>
  );
}
