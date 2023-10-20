import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const UpComingProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("db.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
    console.log("ami" + data);
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 ml-10">
      {products.map((product) => (
        <NavLink key={product.brandId} to={`/products`}>
          <div className="w-[350px] h-[300px] hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer">
            <div
              className="border-[2px] border-gray-600 rounded-none
   "
            >
              <img src={product.upcoming} className="w-96 h-[300px]" alt="" />
            </div>
            <div>
              <h2 className="text-orange-500 absolute -mt-14 -ml-8 px-[70px]">
                <button className="btn btn-neutral">Pre Order</button>
              </h2>
            </div>
          </div>
        </NavLink>
      ))}
    </div>
  );
};

export default UpComingProducts;
