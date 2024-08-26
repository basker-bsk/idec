import Image from "next/image";
import Link from "next/link";
import AddToCart from "../addtocart";
import CartLength from "@/components/cartLength";

type idType = {
  params: { id: string };
};
export default async function ProductDetail({ params }: idType) {
  const res = await fetch(`https://fakestoreapi.com/products/${params.id}`);
  console.log("params.id---", params.id);
  const detail = await res.json();
  return (
    <>
      <div className="flex justify-between">
        <Link href="/products" className="text-[12px] underline">
          Back to Products
        </Link>
        <div>
          <Link
            className="bg-pink-800 text-white hover:bg-pink-700 duration-300 transition-all text-sm rounded-md px-4 py-2"
            href="/cart"
          >
            View Cart (<CartLength />)
          </Link>
        </div>
      </div>

      <div className="flex gap-4 mt-4 items-start flex-col lg:flex-row">
        <div className="w-full lg:w-5/12">
          <div className="bg-white p-4 border border-gray-300">
            <Image
              src={detail.image}
              alt={detail.title}
              width="0"
              height="0"
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div>
        <div className="w-full lg:w-7/12">
          <h1 className="text-[56px] tracking-tight leading-[56px] text-gray-800">
            {detail.title}
          </h1>
          <p>
            <span className="text-sm text-gray-400 uppercase">
              {detail.category}
            </span>
          </p>
          <p className="text-4xl my-4 font-bold text-pink-800">
            ${detail.price}
          </p>
          <p className="text-gray-600">{detail.description}</p>
          <p className="my-4">
            <AddToCart product={detail} name="Add to cart" />
          </p>
        </div>
      </div>
    </>
  );
}
