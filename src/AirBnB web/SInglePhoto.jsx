import React from "react";
import CrosuelWall from "./CrosuelWall";

const SInglePhoto = () => {
  return (
    <>
    <div className="p-4">
      <h1 className="font-bold text-2xl p-2">
        BlueBliss bath tub/selfcheckin/free parking/genset
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {/* Left big image */}
        <div>
          <img
            className="w-full h-[300px] md:h-[500px] object-cover rounded-lg shadow-lg"
            src="https://a0.muscache.com/im/pictures/hosting/Hosting-1181820222986566507/original/4942aea3-bcf5-45f2-8b74-e6ead10453e0.jpeg?im_w=1200"
            alt="big-image"
          />
        </div>

        {/* Right side images */}
        <div className="grid grid-cols-2 gap-3">
          <img
            className="w-full h-[150px] md:h-[240px] object-cover rounded-lg shadow"
            src="https://a0.muscache.com/im/pictures/hosting/Hosting-1181820222986566507/original/6442ec1a-6678-4808-abf1-f2acc99350fa.jpeg?im_w=720"
            alt="2nd"
          />
          <img
            className="w-full h-[150px] md:h-[240px] object-cover rounded-lg shadow"
            src="https://a0.muscache.com/im/pictures/hosting/Hosting-1181820222986566507/original/da9cea25-99a4-443c-9e9d-891939e03f06.jpeg?im_w=720"
            alt="3rd"
          />
          <img
            className="w-full h-[150px] md:h-[240px] object-cover rounded-lg shadow"
            src="https://a0.muscache.com/im/pictures/hosting/Hosting-1183130540602841268/original/119a0823-88ce-4334-8654-46bcd285ceaa.jpeg?"
            alt="4th"
          />
          <img
            className="w-full h-[150px] md:h-[240px] object-cover rounded-lg shadow"
            src="https://a0.muscache.com/im/pictures/hosting/Hosting-1181820222986566507/original/8a648a9e-b8fa-43ce-8b36-80f143c2b88a.jpeg?"
            alt="5th"
          />
        </div>
      </div>
      
    </div>
    <CrosuelWall/>
    </>
  );
};

export default SInglePhoto;
