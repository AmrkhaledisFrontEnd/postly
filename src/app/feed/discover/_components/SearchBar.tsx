"use client";
import { Dispatch, SetStateAction } from "react";
import { LuSearch } from "react-icons/lu";
// ==============================================================
function SearchBar({
  searchText,
  setSearchText,
}: {
  searchText: string;
  setSearchText: Dispatch<SetStateAction<string>>;
}) {
  return (
    <div className="w-full sm:p-5 p-2 bg-white shadow rounded-md">
      <div className="h-10 flex items-center border border-dashed focus-within:shadow hover:shadow border-gray-300 rounded-md overflow-hidden w-full pl-3 text-gray-500 focus-within:border-gray-700 transition-css">
        <LuSearch className="text-gray-400" />
        <input
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search people by name, username, bio, or location..."
          className="h-full flex-1 sm:py-2 py-1 sm:px-4 px-2 outline-none cursor-pointer sm:text-[15px] text-xs"
          type="text"
        />
      </div>
    </div>
  );
}

export default SearchBar;
