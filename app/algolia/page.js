"use client";
// Importing modules
import algoliasearch from "algoliasearch/lite";
import { InstantSearch, SearchBox, Hits } from "react-instantsearch-dom";

const searchClient = algoliasearch(
  "MRO29UE8V8",
  "4c7f782ea67e241310a15817a29e277c"
);

export default function SearchBar() {
  return (
    <>
      <InstantSearch searchClient={searchClient} indexName="algolia_data">
        {/* Adding Search Box */}
        <SearchBox />

        {/* Adding Data */}
        <Hits />
      </InstantSearch>
    </>
  );
}
