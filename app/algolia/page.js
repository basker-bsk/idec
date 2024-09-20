"use client";
// Importing modules
import algoliasearch from "algoliasearch/lite";
import {
  InstantSearch,
  SearchBox,
  Hits,
  Stats,
  SortBy,
  Pagination,
  RefinementList,
  Menu,
} from "react-instantsearch";
import Hit from "./Hit";
import "./search.css";
const searchClient = algoliasearch(
  "MRO29UE8V8",
  "4c7f782ea67e241310a15817a29e277c"
);

export default function SearchBar() {
  return (
    <>
      <InstantSearch searchClient={searchClient} indexName="algolia_data">
        {/* Adding Search Box */}
        <div className="flex items-end my-8 justify-between w-full gap-4">
          <div className="w-1/4">&nbsp;</div>
          <div className="w-full lg:w-3/4 flex justify-between px-3">
            <div className="flex  flex-col">
              <SearchBox translations={{ placeholder: "Search for products" }} className="" />
              <Stats />
            </div>
            <div className="filter-group flex items-end">          
              <SortBy
                defaultRefinement="algolia_data"
                items={[
                  { value: "algolia_data", label: "Most Relevant" },
                  { value: "algolia_data_price_asc", label: "Lowest Price" },
                  { value: "algolia_data_price_desc", label: "Highest Price" },
                ]}
              />         
            </div>
          </div>
        </div>
       
        <div className="flex gap-4">
          <div className="w-full lg:w-1/4 flex gap-4 flex-col">
            <h2 className="text-sm">Brands</h2>
            <RefinementList attribute="brand" />
            <h2 className="text-sm">Categories</h2>
            <RefinementList attribute="category" />
            <h2 className="text-sm">Price</h2>
            <RefinementList attribute="price" />
            <h2 className="text-sm">Free Shipping</h2>
            <RefinementList attribute="free_shipping" />
          </div>
          <div className="w-full lg:w-3/4">
            {/* Adding Data */}
            <Hits hitComponent={Hit} />
            <Pagination showLast />
          </div>
        </div>
      </InstantSearch>
    </>
  );
}
