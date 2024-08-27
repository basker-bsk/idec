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
            className="bg-pink-800 text-white hover:bg-pink-700 duration-300 transition-all text-sm rounded-md px-4 py-2"
            href="/cart"
          >
            View Cart (<CartLength />)
          </Link>
        </div>
      </div>
      <div className="mt-4 lg:mt-8 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 pb-16 list-item-wpr gap-3 lg:gap-6">
        {products.map((product: any, index: number) => (
          <Link
            href={`products/${product.id}`}
            key={`P-${product.id}`}
            className="border border-gray-200 rounded-lg p-2 lg:p-4 bg-white flex flex-col justify-between lg:mb-3 "
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
              <p className="text-sm mt-4">{product.title}</p>
              <div className="flex justify-between items-center mt-2">
                <p className="text-md font-semibold">${product.price}</p>
                <AddToCart product={product} name="Add" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
