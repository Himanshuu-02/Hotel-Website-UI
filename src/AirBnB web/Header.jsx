import React from "react";
import LowerHeader from "./LowerHeader";
import LanguageIcon from "@mui/icons-material/Language";
import MenuIcon from "@mui/icons-material/Menu";
import DarkMode from "./DarkMode";
import { Link } from "react-router-dom";

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
            <Link to={"/"}>
              <h1 className="font-bold hover:underline">Home</h1>
            </Link>

            <span>
              <div className="indicator">
                <span className="indicator-item badge bg-blue-700 text-white text-[7px] w-2 h-4 px-4 py-2 rounded-tl-lg rounded-tr-lg rounded-br-lg animate-bounce">
                  New
                </span>
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
                <span className="indicator-item badge bg-blue-700 text-white text-[7px] w-2 h-4 px-4 py-2 rounded-tl-lg rounded-tr-lg rounded-br-lg animate-bounce">
                  New
                </span>
                <img
                  className="w-13 h-13 hover:scale-140"
                  src="https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-search-bar-icons/original/3d67e9a9-520a-49ee-b439-7b3a75ea814d.png?im_w=240"
                  alt="home-icon"
                />
              </div>
            </span>
            <span>
              <Link to={"/services"}><h1 className="font-bold hover:underline">Service</h1></Link>
              
            </span>
          </div>
          {/* { last Portion} */}
          <div className="flex gap-6 mx-7 items-center">
            {/* modal */}
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button
              className="btn"
              onClick={() => document.getElementById("my_modal_5").showModal()}
            >
              Become a Host
            </button>
            <dialog
              id="my_modal_5"
              className="modal modal-bottom sm:modal-middle"
            >
              <div className="modal-box">
                <h3 className="font-bold text-lg">Hello!</h3>
                <p className="py-4">
                  Thanks for Becoming as a Host for our company
                </p>
                <div className="modal-action">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn">Close</button>
                  </form>
                </div>
              </div>
            </dialog>

            <Link to={"/login"}>
              {" "}
              <span className="cursor-pointer px-2 py-1 rounded-full bg-base-100 hover:scale-90">
                <LanguageIcon />
              </span>
            </Link>
            <span className="cursor-pointer px-2 py-1  rounded-full bg-base-100 hover:scale-90">
              <MenuIcon />
            </span>
            <span className="mx-3 w-1">
              <DarkMode />
            </span>
          </div>
        </div>
        <LowerHeader />
      </div>
    </>
  );
};

export default Header;
