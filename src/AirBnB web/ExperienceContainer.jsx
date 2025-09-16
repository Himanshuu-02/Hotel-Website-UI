import React from "react";
import Experience from "./Experience";

const ExperienceContainer = () => {
  return (
    <div>
       <h1 className="font-bold text-lg md:text-xl p-3  text-center">
          Popular with travellers from your area
        </h1>
      <Experience name="In India" />
      <Experience name="In Europe" />
      <Experience name="In Asia" />
      <Experience name="In USA" />
    </div>
  );
};

export default ExperienceContainer;