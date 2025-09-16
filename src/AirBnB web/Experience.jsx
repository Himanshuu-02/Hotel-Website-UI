import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
//import { div } from "framer-motion/client";

//mock data



const Experience = ({name,listings}) => {
  return (
    <div>
      <div className="p-2 ">
       
        <div className="mt-3 px-4">
          <h2 className="font-bold text-lg mx-3 ">{name}</h2>
          <div className="flex p-3 gap-6 overflow-x-scroll [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            <div className="relative w-65 flex-shrink-0  ">
              <img
                src="https://a0.muscache.com/im/pictures/lombard/MtTemplate-1180121-active_media/original/9b2014e3-6110-49f4-9fbd-cce46b68d6d7.jpg?im_w=320"
                alt="taj mahal"
                className=" w-full h-55 object-cover rounded-lg shadow-lg hover:scale-105 transition duration-500"
              />

              <h1 className="absolute top-2 left-2 bg-base-100 text-sm font-semibold px-2 py-1 rounded-md shadow">
                Popular
              </h1>

              <span className="absolute top-2 right-3 bg-base-100 p-1 rounded-full shadow cursor-pointer">
                <FavoriteBorderIcon fontSize="small" />
              </span>

              <span>
                <h1 className="font-bold my-1 px-1">
                  Taj Mahal and sunrise in Agra
                </h1>
                <span>
                  <h1 className="text-gray-400 -mt-2 px-2 text-sm">
                    From Rs 4000/person <StarOutlineIcon fontSize="smaller" />{" "}
                    4.89
                  </h1>
                </span>
              </span>
            </div>
            {/* //other content */}
            
               {listings.map((item) => (
                <div key={item.id} className="relative w-65 flex-shrink-0  hover:scale-105 transition duration-500">
                    <img src={item.img} alt={item.tag} className=" w-full h-55 rounded-lg shadow-lg " />

                       <h1 className="absolute top-2 left-2 bg-base-100 text-sm font-semibold px-2 py-1 rounded-md shadow">
                Popular
              </h1>

              <span className="absolute top-2 right-3 bg-base-100 p-1 rounded-full shadow cursor-pointer">
                <FavoriteBorderIcon fontSize="small" />
              </span>

              <span>
                <h1 className="font-bold my-1 px-1">
                  {item.title}
                </h1>
                <span>
                  <h1 className="text-gray-400 -mt-2 px-2 text-sm">
                    From {item.price} <StarOutlineIcon fontSize="smaller" />{" "}
                   {item.rating}
                  </h1>
                </span>
              </span>

                    </div>
               ))}
                
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default Experience;
