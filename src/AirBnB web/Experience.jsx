import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
//import { div } from "framer-motion/client";

//mock data
const experiencesData = [
  {
    id: 1,
    title: "Red Fort and Sunrise in Delhi",
    location: "Delhi, India",
    price: "₹2000/person",
    rating: 4.29,
    img: "https://www.shutterstock.com/image-photo/red-fort-delhi-sunrise-indian-600w-601641743.jpg"
  },
  {
    id: 2,
    title: "Taj Mahal Evening Tour",
    location: "Agra, India",
    price: "₹3500/person",
    rating: 4.9,
    img: "https://assets.cntraveller.in/photos/679c9d02dab5bc859661c266/3:2/w_810,h_540,c_limit/Inside%20AJ6DF4.jpeg"
  },
  {
    id: 3,
    title: "Jaipur Pink City Walk",
    location: "Jaipur, Rajasthan",
    price: "₹1800/person",
    rating: 4.7,
    img: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/07/90/8f/69.jpg"
  },
  {
    id: 4,
    title: "Goa Beach Party",
    location: "Baga Beach, Goa",
    price: "₹2200/person",
    rating: 4.5,
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
  },
  {
    id: 5,
    title: "Golden Temple Visit",
    location: "Amritsar, Punjab",
    price: "₹1500/person",
    rating: 4.8,
    img: "https://www.tripsavvy.com/thmb/cG7HPbgCzsO7KCWCE1g8eE9v0mk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-142737748-5af5332a642dca0037b452da.jpg"
  },
  {
    id: 6,
    title: "Backwaters of Kerala",
    location: "Alleppey, Kerala",
    price: "₹5000/person",
    rating: 4.95,
    img: "https://upload.wikimedia.org/wikipedia/commons/2/27/Houseboats_at_Kerala_Backwaters.jpg"
  },
  {
    id: 7,
    title: "Himalayan Trek Adventure",
    location: "Manali, Himachal Pradesh",
    price: "₹6000/person",
    rating: 4.6,
    img: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
  },
  {
    id: 8,
    title: "Mumbai City Lights Tour",
    location: "Mumbai, Maharashtra",
    price: "₹2500/person",
    rating: 4.3,
    img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
  },
  {
    id: 9,
    title: "Paris Eiffel Tower Experience",
    location: "Paris, France",
    price: "€120/person",
    rating: 4.95,
    img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
  },
  {
    id: 10,
    title: "New York Central Park Walk",
    location: "New York, USA",
    price: "$90/person",
    rating: 4.7,
    img: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
  },
  {
    id: 11,
    title: "Tokyo Street Food Tour",
    location: "Tokyo, Japan",
    price: "¥8000/person",
    rating: 4.88,
    img: "https://images.unsplash.com/photo-1549692520-acc6669e2f0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
  },
  {
    id: 12,
    title: "Bali Yoga & Surf Retreat",
    location: "Bali, Indonesia",
    price: "$150/person",
    rating: 4.92,
    img: "https://photos.tpn.to/es/kr/gk/kl/1600x900.jpg"
  },
  {
    id: 13,
    title: "London Historical Walking Tour",
    location: "London, UK",
    price: "£70/person",
    rating: 4.84,
    img: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
  },
  {
    id: 14,
    title: "Dubai Desert Safari",
    location: "Dubai, UAE",
    price: "AED 350/person",
    rating: 4.76,
    img: "https://media2.thrillophilia.com/images/photos/000/124/492/original/1527232809_shutterstock_705430021.jpg?width=975&height=600"
  },
  {
    id: 15,
    title: "Sydney Opera House Visit",
    location: "Sydney, Australia",
    price: "AUD 120/person",
    rating: 4.89,
    img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/93/a7/be/sydney-opera-house.jpg?w=900&h=500&s=1"
  }
];



const Experience = ({name}) => {
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
            
               {experiencesData.map((item) => (
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
