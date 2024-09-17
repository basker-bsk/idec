"use client";

export default function Hit({ hit }) {
  return (
    <>
      <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-5">
        <h2>{hit.product_name}</h2>
        <a href="#" className="block mt-5">
          <img
            src={hit.product_image}
            width={550}
            height={600}
            alt={hit.product_name}
            className="border p-2 border-gray-300 bg-white rounded-md w-auto h-auto"
          />
        </a>
        <div class="p-5">
          <a href="#">
            <h5 class="mb-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-white">
              {hit.product_code}
            </h5>
          </a>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {hit.product_description}
          </p>
        </div>
      </div>
    </>
  );
}
