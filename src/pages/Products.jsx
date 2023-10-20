import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import ProductCard from "./layouts/ProductCard";
import { data } from "autoprefixer";
import Slider from "./layouts/Slider";
import Banner from "./layouts/Banner";
import NikeSlider from "./layouts/NikeSlider";

const Products = () => {
  const products = useLoaderData();

  console.log(products.brand);

  return (
    <div>
      {/* slider */}
      {/* <Banner products={products}></Banner> */}
      {products.brand == "Nike" ? (
        <NikeSlider></NikeSlider>
      ) : products.brand == "Adidas" ? (
        <Banner></Banner>
      ) : null}
      {/* <div>
        {slides.map((slide) => (
          <Slider key={slide.brandId} slide={slide}></Slider>
        ))}
      </div> */}

      <div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-10">
          {products.map((product) => (
            <ProductCard key={product._id} product={product}></ProductCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
