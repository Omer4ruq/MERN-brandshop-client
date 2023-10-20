import React from "react";
import { useLoaderData } from "react-router-dom";
import BrandCard from "./BrandCard";

const Brands = ({ brands }) => {
  console.log(brands);
  return (
    <div>
      <div className="flex gap-2 md:gap-5 px-5 md:px-16">
        {brands.map((brandName) => (
          <BrandCard key={brandName.brandId} brandName={brandName}></BrandCard>
        ))}
      </div>
    </div>
  );
};

export default Brands;
