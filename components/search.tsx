'use client';
import { X , Search } from "lucide-react";
import { useState } from 'react';
import classnames from "classnames";
export default function SearchComponent() {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleIconClick = () => {
    setIsExpanded(!isExpanded);
  };
  return  ( 
  <div className="searchContainer">
  <div 
  className={classnames("searchIcon",{'expanded' :isExpanded})}
    
    onClick={handleIconClick}
  >
    <Search className="h-4 w-4 hover:text-red-800  cursor-pointer " />
  </div>
  <div className={classnames("searchInput flex justify-between",{'expanded' :isExpanded})}>
    <input type="text" placeholder="Search..."  />
    <X onClick={handleIconClick} className="h-4 w-4 hover:text-red-800  cursor-pointer " />
  </div>
</div>
)

}
