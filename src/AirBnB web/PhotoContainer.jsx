// import React from "react";
// import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
// import StarOutlineIcon from '@mui/icons-material/StarOutline';

// const PhotoContainer = () => {
//   return (
//     <div className="mt-5">
//       <h1 className="font-bold px-3 m-2 text-2xl ">
//         Popular homes in Sahibzada Ajit Singh Nagar -
//       </h1>

//       {/* Image Card */}
//       <div className="relative w-65 m-6">
//         {/* Image */}
//         <img
//           src="https://a0.muscache.com/im/pictures/miso/Hosting-1429577407034090909/original/a31b84a8-84f4-4e66-9d10-335481cf3747.jpeg?im_w=960"
//           alt="img1"
//           className="w-full h-55 hover:scale-100 object-cover rounded-xl shadow-lg"
//         />

//         {/* Overlay Text */}
//         <h1 className="absolute top-2 left-2 bg-gray-100 text-sm font-semibold px-2 py-1 rounded-md shadow">
//           Guest Favorite
//         </h1>

//         {/* Heart Icon */}
//         <span className="absolute top-2 right-3  p-1 rounded-full shadow cursor-pointer">
//           <FavoriteBorderIcon fontSize="small"  />
//         </span>
//     <div className="px-2 my-2">
//         <h1 className="font-bold text-sm">Flat in Sahibzada Ajit Singh Nagar</h1>
//         <p className="text-gray-400 mx-2.5 ">$4,565 for 2 nigths <StarOutlineIcon fontSize="small"/> 4.89 </p>
//     </div>

//       </div>

//     </div>
//   );
// };

// export default PhotoContainer;

//new
import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import Icon from "@mui/material/Icon";
import Icons from "./Icons";
import Footer from "./Footer";
import { Link } from "react-router-dom";

// Fake listings data (replace with API later if needed)


const PhotoContainer = ({name,listings}) => {
  return (
    <div className="mt-5 px-6">
      <h1 className="font-bold text-2xl mb-4">
       {name}
      </h1>

      {/* Cards Grid */}
      <div className="flex gap-6 overflow-x-scroll [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden px-4">
        {/* First Card (static example) */}
        <div className="relative w-65 flex-shrink-0  hover:scale-110 hover:transition duration-500">
          <Link to={"/another"}>
            {" "}
            <img
              src="https://a0.muscache.com/im/pictures/miso/Hosting-1429577407034090909/original/a31b84a8-84f4-4e66-9d10-335481cf3747.jpeg?im_w=960"
              alt="img1"
              className="w-full h-55 object-cover rounded-xl shadow-lg"
            />
          </Link>

          <h1 className="absolute top-2 left-2 bg-base-100 text-sm font-semibold px-2 py-1 rounded-md shadow">
            Guest Favorite
          </h1>

          <span className="absolute top-2 right-3 bg-base-100 p-1 rounded-full shadow cursor-pointer">
            <FavoriteBorderIcon fontSize="small" />
          </span>

          <div className="px-2 my-2">
            <h1 className="font-bold text-sm">
              Flat in Sahibzada Ajit Singh Nagar
            </h1>
            <p className="text-gray-400 text-sm flex items-center gap-1">
              $4,565 for 2 nights <StarOutlineIcon fontSize="small" /> 4.89
            </p>
          </div>
        </div>

        {/* Dynamic Cards */}
        {listings.map((item,idx) => (
          <div
            key={idx}
            className="relative w-65 flex-shrink-0  hover:scale-90 hover:transition duration-500"
          >
            <Link to={"/another"}>
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-55 object-cover rounded-xl shadow-lg"
              />
            </Link>
            <h1 className="absolute top-2 left-2 bg-base-100 text-sm font-semibold px-2 py-1 rounded-md shadow">
              Guest Favorite
            </h1>

            <span className="absolute top-2 right-3 bg-base-100 p-1 rounded-full shadow cursor-pointer">
              <FavoriteBorderIcon fontSize="small" />
            </span>

            <div className="px-2 my-2">
              <h1 className="font-bold text-sm">{item.title}</h1>
              <p className="text-gray-400 text-sm flex items-center gap-1">
                {item.price} <StarOutlineIcon fontSize="small" /> {item.rating}
              </p>
            </div>
          </div>
        ))}
      </div>
      <Icons />
      <div></div>
    </div>
  );
};

export default PhotoContainer;
