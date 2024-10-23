import { Button } from "@/components/ui/button";

export default function ProductFinderSearch() {
  return (
    <div className="bg-black bg-opacity-80 text-white p-4 rounded-br-md">
      <span className="tracking-[0.8px] gradient text-white  uppercase text-10 font-bold py-[5px] px-[15px] rounded-tl-md rounded-br-md ">
        Product Finder
      </span>
      <h4 className="my-2">Enhance Your Search</h4>
      <p className="text-16 leading-16 mb-2">
        The product finder helps you quickly find the right solutions for your
        needs.
      </p>
      <Button theme="secondary">Try it out</Button>
    </div>
  );
}
