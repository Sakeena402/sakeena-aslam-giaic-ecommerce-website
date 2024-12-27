import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar: React.FC = () => {
  return (
    <div className="relative w-full md:w-[350px] sm:w-[220px] lg:w-[450px] ">
      {/* Search Icon */}
      <span className="absolute inset-y-0 left-0 flex items-center pl-2">
        <FaSearch className="h-5 w-5 text-gray-500" />
      </span>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search for products..."
        className="hidden sm:block w-full h-8 pl-10 pr-4 text-sm text-gray-700 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500 md:pl-12 sm:h-10 sm:pl-8 sm:text-xs"
      />
    </div>
  );
};

export default SearchBar;
