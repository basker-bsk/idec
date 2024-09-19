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
        <SearchBox translations={{ placeholder: "Search for products" }} />
        <div className="filter-group">
          <Stats />
          <SortBy
            defaultRefinement="algolia_data"
            items={[
              { value: "algolia_data", label: "Most Relevant" },
              { value: "algolia_data_price_asc", label: "Lowest Price" },
              { value: "algolia_data_price_desc", label: "Highest Price" },
            ]}
          />
        </div>
        <div className="content_block">
          <div className="category_block">
            <h2>Categories</h2>
            <RefinementList attribute="category" />
          </div>
          <div className="hits_block">
            {/* Adding Data */}
            <Hits hitComponent={Hit} />
            <Pagination showLast />
          </div>
        </div>
      </InstantSearch>
    </>
  );
}
