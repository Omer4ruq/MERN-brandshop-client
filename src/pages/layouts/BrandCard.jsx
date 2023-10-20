import React from "react";
import { NavLink } from "react-router-dom";

const BrandCard = ({ brandName }) => {
  const { brand, brandImage } = brandName;

  return (
    <div>
      <NavLink to={`/products/${brand}`}>
        <div className="hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer">
          <div
            className="border-[2px] border-gray-600 rounded-lg 
     "
          >
            <img
              src={brandImage}
              className=" w-56 md:w-96 h-16 md:h-36"
              alt=""
            />
          </div>
          <div>
            <h2 className="text-orange-500 absolute -mt-6 px-[70px]">
              {brand}
            </h2>
          </div>
        </div>
      </NavLink>
    </div>
  );
};

export default BrandCard;
