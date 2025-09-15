// import React from "react";
// import SearchIcon from "@mui/icons-material/Search";

// const LowerHeader = () => {
//   return (
//     <div className="mt-5 sticky">
//       <div className="w-3/4 mx-auto flex items-center rounded-full shadow-md bg-white overflow-hidden">
        
//         {/* Where */}
//         <div className="flex-1 px-6 py-3 hover:bg-gray-100 hover:rounded-full cursor-pointer border-r border-gray-200">
//           <h1 className="text-sm font-semibold">Where</h1>
//           <p className="text-gray-500 text-sm">Search destinations</p>
//         </div>

//         {/* Check in */}
//         <div className="flex-1 px-6 py-3 hover:bg-gray-100 hover:rounded-full cursor-pointer border-r border-gray-200">
//           <h1 className="text-sm font-semibold">Check in</h1>
//           <p className="text-gray-500 text-sm">Add dates</p>
//         </div>

//         {/* Check out */}
//         <div className="flex-1 px-6 py-3 hover:bg-gray-100 hover:rounded-full cursor-pointer border-r border-gray-200">
//           <h1 className="text-sm font-semibold">Check out</h1>
//           <p className="text-gray-500 text-sm">Add dates</p>
//         </div>

//         {/* Who + Search */}
//         <div className="flex-1 flex items-center justify-between hover:rounded-full px-6 py-3 hover:bg-gray-100 cursor-pointer">
//           <div>
//             <h1 className="text-sm font-semibold">Who</h1>
//             <p className="text-gray-500 text-sm">Add guests</p>
//           </div>
//           <button className="bg-red-500 hover:bg-red-600 text-white p-3 rounded-full shadow-md">
//             <SearchIcon />
//           </button>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default LowerHeader;



//new
import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

const LowerHeader = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`transition-all duration-300 ease-in-out ${
        isSticky
          ? "fixed top-0 left-0 w-full z-50 bg-base-300 shadow-md py-2"
          : "relative mt-5 py-5"
      }`}
    >
      <div
        className={`mx-auto flex items-center rounded-full shadow-md bg-base-100 text-base-content overflow-hidden transition-all duration-300 ${
          isSticky ? "scale-90 w-[54%]" : "scale-100 w-[70%] "
        }`}
      >
        {/* logo */}
        {isSticky && (<a className=" btn-ghost text-xl cursor-pointer">
          <img
            className="w-25 h-20 mx-4"
            src="https://logos-world.net/wp-content/uploads/2020/10/Airbnb-Logo-2014.png"
            alt="logo"
          />
        </a>)}
        {/* Where */}
        <div className={`flex-1 px-6 py-3  cursor-pointer border-r border-gray-200 ${isSticky? "hover:scale-110 hover:underline":"hover:bg-gray-100 hover:text-black hover:rounded-full"}`}>
          <h1 className={`  ${isSticky? "text-xl font-bold":"text-lg font-semibold"}`}>Where</h1>
          <p className={`text-gray-500 text-sm ${isSticky? "hidden ":"block"}`}>Search destinations</p>
        </div>

        {/* Check in */}
        <div className={`flex-1 px-6 py-3  cursor-pointer border-r border-gray-200 ${isSticky? "hover:scale-110 hover:underline":"hover:bg-gray-100 hover:text-black hover:rounded-full"}`}>
          <h1 className={`  ${isSticky? "text-xl font-bold":"text-lg font-semibold"}`}>Check in</h1>
          <p className={`text-gray-500 text-sm ${isSticky? "hidden ":"block"}`}>Add dates</p>
        </div>

        {/* Check out */}
        <div className={`flex-1 px-6 py-3  cursor-pointer border-r border-gray-200 ${isSticky? "hover:scale-110 hover:underline":"hover:bg-gray-100 hover:text-black hover:rounded-full"}`}>
          <h1 className={`  ${isSticky? "text-xl font-bold":"text-lg font-semibold"}`}>Check out</h1>
          <p className={`text-gray-500 text-sm ${isSticky? "hidden ":"block"}`}>Add dates</p>
        </div>

        {/* Who + Search */}
        <div className={`flex-1 flex items-center justify-between hover:rounded-full  py-3 hover:bg-gray-100 hover:text-black cursor-pointer ${isSticky? "px-7 ":"px-6"}`}>
          <div className={`${isSticky? "hidden":"block"}`}>
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

