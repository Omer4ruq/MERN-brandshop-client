import React from "react";
import { useLoaderData } from "react-router-dom";

const UpdateProduct = () => {
  const product = useLoaderData();
  console.log(product);
  const { name, photo } = product;
  console.log(name);
  return (
    <div>
      <h1>here {name}</h1>
      <figure>
        <img className="w-96 h-60" src={photo} />
      </figure>
    </div>
  );
};

export default UpdateProduct;
