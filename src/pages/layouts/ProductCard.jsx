import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import AdidasSlider from "./AdidasSlider";
import NikeSlider from "./NikeSlider";
import Rating from "react-rating";

const ProductCard = ({ product }) => {
  const { _id, photo, brand, name, price, type, description, rating } = product;

  const handleAddProduct = (event) => {
    event.preventDefault();
    // const form = event.target;
    // const brand = form.brand.value;
    // const color = form.color.value;
    // const name = form.name.value;
    // const price = form.price.value;
    // const type = form.type.value;
    // const description = form.description.value;
    // const photo = form.photo.value;
    // const rating = form.rating.value;
    const newProducts = {
      brand,
      name,
      price,
      type,
      description,
      photo,
      rating,
    };
    console.log(newProducts);

    fetch("http://localhost:5000/cart", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newProducts),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("br " + data);
      });
  };

  return (
    <div className="ml-14 mb-6 ">
      <div></div>
      <div className=" w-72  glass">
        <figure>
          <img className="w-72 h-60" src={photo} />
          <p className="bg-red-600 w-10 pl-2">${price}</p>
        </figure>
        <div className="card-body">
          <h2 className="card-title text-white">{name}</h2>
          <p className="flex gap-2">
            <div className="">
              {" "}
              <input type="radio" name="rating-1" className="mask mask-star " />
            </div>

            <div className="text-gray-400"> {rating}</div>
          </p>
          <div className="card-actions justify-between">
            <div className="flex gap-2">
              <NavLink to={`/productdetails/${_id}`}>
                <button className="btn rounded-none px-1  hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer">
                  Details
                </button>
              </NavLink>
              <NavLink to={`/updateproducts/${_id}`}>
                {" "}
                <button className="btn rounded-none px-1  hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer">
                  Update
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
