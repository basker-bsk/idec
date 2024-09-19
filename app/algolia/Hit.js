"use client";
import { Highlight } from "react-instantsearch";
export default function Hit({ hit }) {
  return (
    <>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-5">
        <h2 className="prod_title">{hit.product_name}</h2>
        <a href="#" className="block mt-5">
          <img
            src={hit.product_image}
            width={550}
            height={600}
            alt={hit.product_name}
            className="border p-2 border-gray-300 bg-white rounded-md w-auto h-auto"
          />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="brandname">{hit.brand}</h5>
          </a>
          <div className="price">{hit.price}</div>

          <Highlight attribute="product_description" hit={hit} />
        </div>
      </div>
    </>
  );
}
