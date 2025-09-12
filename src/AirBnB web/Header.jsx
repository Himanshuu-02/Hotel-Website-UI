import React from "react";
import LowerHeader from "./LowerHeader";
import LanguageIcon from '@mui/icons-material/Language';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  return (
    <>
    <div className=" bg-base-200 ">
      <div className="navbar  bg-base-200 h-25  flex justify-between items-center">
        <a className=" btn-ghost text-xl cursor-pointer">
          <img
            className="w-25 h-20 mx-4"
            src="https://logos-world.net/wp-content/uploads/2020/10/Airbnb-Logo-2014.png"
            alt="logo"
          />
        </a>
        {/* mid item */}
        <div className="flex gap-2 items-center justify-center cursor-pointer mt-5">
          <span>
            <img
              className="w-13 h-13 hover:scale-150"
              src="https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-search-bar-icons/original/4aae4ed7-5939-4e76-b100-e69440ebeae4.png?im_w=240"
              alt="home-icon"
            />
          </span>
          <h1 className="font-bold hover:underline">Home</h1>

          <span>
             <div className="indicator">
              <span className="indicator-item badge bg-blue-700 text-white text-[7px] w-2 h-4 px-4 py-2 rounded-tl-lg rounded-tr-lg rounded-br-lg animate-bounce">New</span>
              <img
                className="w-13 h-13 hover:scale-150"
                src="https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-search-bar-icons/original/e47ab655-027b-4679-b2e6-df1c99a5c33d.png?im_w=240"
                alt="home-icon"
              />
            </div>
          </span>
          <span>
            <h1 className="font-bold hover:underline">Experience</h1>
          </span>

          <span>
            <div className="indicator ">
              <span className="indicator-item badge bg-blue-700 text-white text-[7px] w-2 h-4 px-4 py-2 rounded-tl-lg rounded-tr-lg rounded-br-lg animate-bounce">New</span>
              <img
                className="w-13 h-13 hover:scale-140"
                src="https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-search-bar-icons/original/3d67e9a9-520a-49ee-b439-7b3a75ea814d.png?im_w=240"
                alt="home-icon"
              />
            </div>
          </span>
          <span>
            <h1 className="font-bold hover:underline">Service</h1>
          </span>
        </div>
       {/* { last Portion} */}
       <div className="flex gap-5 mx-7">
        <h1 className="font-bold text-lg">Become a host</h1>
        <span className="cursor-pointer  rounded-full bg-gray-200 hover:scale-90">
            <LanguageIcon />
        </span>
        <span className="cursor-pointer px-2  rounded-full bg-gray-200 hover:scale-90">
            <MenuIcon/>
        </span>
        
       </div>
      </div>
      <LowerHeader />
      
    </div>
    
    </>
  );
};

export default Header;
