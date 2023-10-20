import React from "react";
import Banner from "./layouts/Banner";
import { useLoaderData } from "react-router-dom";
import BrandCard from "./layouts/BrandCard";
import DiscountSection from "./layouts/DiscountSection";

import Brands from "./layouts/Brands";
import UpComingProducts from "./UpComingProducts";

const Home = () => {
  const brands = useLoaderData();
  console.log(brands);
  return (
    <div>
      <Banner></Banner>
      <h1 className="text-white font-medium text-2xl ml-16 mb-4">Brands</h1>
      {/* <div className="flex gap-2 md:gap-5 px-5 md:px-16">
        {brands.map((brandName) => (
          <BrandCard key={brandName.brandId} brandName={brandName}></BrandCard>
        ))}
      </div> */}
      <div>
        <Brands brands={brands}></Brands>
      </div>
      <div>
        <DiscountSection></DiscountSection>
      </div>
      <div className="mt-8 mb-8">
        {/* <div className="flex gap-2 md:gap-5 px-5 md:px-16">
        {brands.map((brandName) => (
          <BrandCard key={brandName.brandId} brandName={brandName}></BrandCard>
        ))}
      </div> */}
        <h1 className="text-white font-medium text-2xl ml-16 mb-4">
          Up Coming Collections
        </h1>
        <UpComingProducts></UpComingProducts>
      </div>
    </div>
  );
};

export default Home;
