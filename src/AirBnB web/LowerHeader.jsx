import React from "react";
import SearchIcon from "@mui/icons-material/Search";

const LowerHeader = () => {
  return (
    <div className="mt-5 sticky">
      <div className="w-3/4 mx-auto flex items-center rounded-full shadow-md bg-white overflow-hidden">
        
        {/* Where */}
        <div className="flex-1 px-6 py-3 hover:bg-gray-100 hover:rounded-full cursor-pointer border-r border-gray-200">
          <h1 className="text-sm font-semibold">Where</h1>
          <p className="text-gray-500 text-sm">Search destinations</p>
        </div>

        {/* Check in */}
        <div className="flex-1 px-6 py-3 hover:bg-gray-100 hover:rounded-full cursor-pointer border-r border-gray-200">
          <h1 className="text-sm font-semibold">Check in</h1>
          <p className="text-gray-500 text-sm">Add dates</p>
        </div>

        {/* Check out */}
        <div className="flex-1 px-6 py-3 hover:bg-gray-100 hover:rounded-full cursor-pointer border-r border-gray-200">
          <h1 className="text-sm font-semibold">Check out</h1>
          <p className="text-gray-500 text-sm">Add dates</p>
        </div>

        {/* Who + Search */}
        <div className="flex-1 flex items-center justify-between hover:rounded-full px-6 py-3 hover:bg-gray-100 cursor-pointer">
          <div>
            <h1 className="text-sm font-semibold">Who</h1>
            <p className="text-gray-500 text-sm">Add guests</p>
          </div>
          <button className="bg-red-500 hover:bg-red-600 text-white p-3 rounded-full shadow-md">
            <SearchIcon />
          </button>
        </div>

      </div>
    </div>
  );
};

export default LowerHeader;
