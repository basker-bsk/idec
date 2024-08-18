import Image from "next/image";
import Link from "next/link";
import AddToCart from "./addtocart";
import CartLength from "@/components/cartLength";
export default async function Products() {
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();
  return (
    <div className="flex flex-col w-full">
      <a id="products"></a>
      <div className="flex w-full justify-between items-center">
        <h1>Products</h1>
        <div>
          <Link
            className="bg-lime-600 hover:bg-lime-800 duration-300 transition-all text-slate-50 rounded-md px-4 py-2"
            href="/cart"
          >
            View Cart (<CartLength />)
          </Link>
        </div>
      </div>
      <div className="mt-8 md:grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 pb-16 list-item-wpr gap-6">
        {products.map((product: any, index: number) => (
          <div
            className="border border-gray-200 rounded-lg p-4 bg-white flex flex-col justify-between mb-3 "
            key={`P-${product.id}`}
          >
            <Image
              src={product.image}
              alt={product.title}
              width="0"
              height="0"
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
            />
            <div className="flex flex-col">
              <p className="text-sm mt-4 font-semibold">{product.title}</p>
              <div className="flex justify-between items-start mt-2">
                <p className="text-2xl">${product.price}</p>
                <AddToCart product={product} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
