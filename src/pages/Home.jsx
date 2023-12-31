import React from "react";
import Banner from "./layouts/Banner";
import { NavLink, useLoaderData } from "react-router-dom";

import DiscountSection from "./layouts/DiscountSection";

import Brands from "./layouts/Brands";
import UpComingProducts from "./UpComingProducts";
import Partner from "./layouts/Partner";

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
        <h1 className="text-white font-medium text-2xl ml-16 mb-4">
          Upcoming Collections
        </h1>
        <NavLink to={`/preorders`}>
          <UpComingProducts></UpComingProducts>
        </NavLink>
      </div>
      <div className="mb-4">
        <Partner></Partner>
      </div>
    </div>
  );
};

export default Home;
