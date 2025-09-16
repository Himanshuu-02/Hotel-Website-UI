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
const listings = [
  {
    id: 1,
    image:
      "https://a0.muscache.com/im/pictures/hosting/Hosting-1181820222986566507/original/4942aea3-bcf5-45f2-8b74-e6ead10453e0.jpeg?im_w=960",
    title: "Flat in Sahibzada Ajit Singh Nagar",
    price: "$4,565 for 2 nights",
    rating: 4.89,
  },
  {
    id: 2,
    image:
      "https://a0.muscache.com/im/pictures/hosting/Hosting-1181820222986566507/original/6442ec1a-6678-4808-abf1-f2acc99350fa.jpeg?im_w=720",
    title: "Luxury Apartment in Chandigarh",
    price: "$7,200 for 3 nights",
    rating: 4.92,
  },
  {
    id: 3,
    image:
      "https://a0.muscache.com/im/pictures/hosting/Hosting-1283051799102141261/original/44b72e59-9c09-490f-a193-96d1af1c2b7f.jpeg?im_w=960",
    title: "Cozy Villa near Mohali",
    price: "$6,150 for 2 nights",
    rating: 4.95,
  },
  {
    id: 4,
    image:
      "https://a0.muscache.com/im/pictures/hosting/Hosting-1007964257609982196/original/010666fa-3ced-4b2b-bc93-62a83c078a12.jpeg?im_w=960",
    title: "Modern Studio in Panchkula",
    price: "$3,999 for 1 night",
    rating: 4.75,
  },
  {
    id: 5,
    image:
      "https://a0.muscache.com/im/pictures/hosting/Hosting-1204215111494236072/original/fd0924ca-ccdc-48ec-931f-641967a1202c.jpeg?im_w=960",
    title: "Countryside Home",
    price: "$5,100 for 2 nights",
    rating: 4.82,
  },
  {
    id: 1,
    image:
      "https://a0.muscache.com/im/pictures/hosting/Hosting-1181820222986566507/original/4942aea3-bcf5-45f2-8b74-e6ead10453e0.jpeg?im_w=960",
    title: "Flat in Sahibzada Ajit Singh Nagar",
    price: "$4,565 for 2 nights",
    rating: 4.89,
  },
  {
    id: 2,
    image:
      "https://a0.muscache.com/im/pictures/hosting/Hosting-1181820222986566507/original/6442ec1a-6678-4808-abf1-f2acc99350fa.jpeg?im_w=720",
    title: "Luxury Apartment in Chandigarh",
    price: "$7,200 for 3 nights",
    rating: 4.92,
  },
  {
    id: 3,
    image:
      "https://a0.muscache.com/im/pictures/hosting/Hosting-1283051799102141261/original/44b72e59-9c09-490f-a193-96d1af1c2b7f.jpeg?im_w=960",
    title: "Cozy Villa near Mohali",
    price: "$6,150 for 2 nights",
    rating: 4.95,
  },
  {
    id: 4,
    image:
      "https://a0.muscache.com/im/pictures/hosting/Hosting-1007964257609982196/original/010666fa-3ced-4b2b-bc93-62a83c078a12.jpeg?im_w=960",
    title: "Modern Studio in Panchkula",
    price: "$3,999 for 1 night",
    rating: 4.75,
  },
  {
    id: 5,
    image:
      "https://a0.muscache.com/im/pictures/hosting/Hosting-1204215111494236072/original/fd0924ca-ccdc-48ec-931f-641967a1202c.jpeg?im_w=960",
    title: "Countryside Home",
    price: "$5,100 for 2 nights",
    rating: 4.82,
  },
  {
    id: 1,
    image:
      "https://a0.muscache.com/im/pictures/hosting/Hosting-1181820222986566507/original/4942aea3-bcf5-45f2-8b74-e6ead10453e0.jpeg?im_w=960",
    title: "Flat in Sahibzada Ajit Singh Nagar",
    price: "$4,565 for 2 nights",
    rating: 4.89,
  },
  {
    id: 2,
    image:
      "https://a0.muscache.com/im/pictures/hosting/Hosting-1181820222986566507/original/6442ec1a-6678-4808-abf1-f2acc99350fa.jpeg?im_w=720",
    title: "Luxury Apartment in Chandigarh",
    price: "$7,200 for 3 nights",
    rating: 4.92,
  },
  {
    id: 3,
    image:
      "https://a0.muscache.com/im/pictures/hosting/Hosting-1283051799102141261/original/44b72e59-9c09-490f-a193-96d1af1c2b7f.jpeg?im_w=960",
    title: "Cozy Villa near Mohali",
    price: "$6,150 for 2 nights",
    rating: 4.95,
  },
  {
    id: 4,
    image:
      "https://a0.muscache.com/im/pictures/hosting/Hosting-1007964257609982196/original/010666fa-3ced-4b2b-bc93-62a83c078a12.jpeg?im_w=960",
    title: "Modern Studio in Panchkula",
    price: "$3,999 for 1 night",
    rating: 4.75,
  },
  {
    id: 5,
    image:
      "https://a0.muscache.com/im/pictures/hosting/Hosting-1204215111494236072/original/fd0924ca-ccdc-48ec-931f-641967a1202c.jpeg?im_w=960",
    title: "Countryside Home",
    price: "$5,100 for 2 nights",
    rating: 4.82,
  },
  {
    id: 1,
    image:
      "https://a0.muscache.com/im/pictures/hosting/Hosting-1181820222986566507/original/4942aea3-bcf5-45f2-8b74-e6ead10453e0.jpeg?im_w=960",
    title: "Flat in Sahibzada Ajit Singh Nagar",
    price: "$4,565 for 2 nights",
    rating: 4.89,
  },
  {
    id: 2,
    image:
      "https://a0.muscache.com/im/pictures/hosting/Hosting-1181820222986566507/original/6442ec1a-6678-4808-abf1-f2acc99350fa.jpeg?im_w=720",
    title: "Luxury Apartment in Chandigarh",
    price: "$7,200 for 3 nights",
    rating: 4.92,
  },
  {
    id: 3,
    image:
      "https://a0.muscache.com/im/pictures/hosting/Hosting-1283051799102141261/original/44b72e59-9c09-490f-a193-96d1af1c2b7f.jpeg?im_w=960",
    title: "Cozy Villa near Mohali",
    price: "$6,150 for 2 nights",
    rating: 4.95,
  },
  {
    id: 4,
    image:
      "https://a0.muscache.com/im/pictures/hosting/Hosting-1007964257609982196/original/010666fa-3ced-4b2b-bc93-62a83c078a12.jpeg?im_w=960",
    title: "Modern Studio in Panchkula",
    price: "$3,999 for 1 night",
    rating: 4.75,
  },
  {
    id: 5,
    image:
      "https://a0.muscache.com/im/pictures/hosting/Hosting-1204215111494236072/original/fd0924ca-ccdc-48ec-931f-641967a1202c.jpeg?im_w=960",
    title: "Countryside Home",
    price: "$5,100 for 2 nights",
    rating: 4.82,
  },
];

const PhotoContainer = ({name}) => {
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
        {listings.map((item, idx) => (
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
