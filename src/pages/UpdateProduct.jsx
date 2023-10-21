import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateProduct = () => {
  const product = useLoaderData();
  const { _id, photo, brand, name, price, type, description, rating } = product;
  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const brand = form.brand.value;
    const name = form.name.value;
    const price = form.price.value;
    const type = form.type.value;
    const description = form.description.value;
    const photo = form.photo.value;
    const rating = form.rating.value;
    const updatedProduct = {
      brand,
      name,
      price,
      type,
      description,
      photo,
      rating,
    };
    console.log(updatedProduct);

    fetch(
      `https://fashion-server-2l4qjc9mm-omers-projects-269a87b2.vercel.app/products/${_id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updatedProduct),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Product Update Successfully",
            icon: "success",
            confirmButtonText: "OK",
          });
        }
      });
  };
  console.log(product);

  console.log(name);
  return (
    <div>
      <div className="bg-cyan-500 ">
        <h1 className="font-bold text-4xl text-center ">Update Products</h1>
        <form onSubmit={handleUpdate}>
          <div className=" p-20 px-60 ml-40">
            <div className="flex gap-4">
              <div className="form-control">
                <div className="input-group">
                  <select
                    name="brand"
                    defaultValue={brand}
                    className="select select-bordered"
                  >
                    <option disabled selected>
                      Pick Brand
                    </option>
                    <option>Adidas</option>
                    <option>Nike</option>
                    <option>Puma</option>
                    <option>Zara</option>
                    <option>Levis</option>
                    <option>H&M</option>
                  </select>
                </div>
              </div>
              <div className="form-control">
                <div className="input-group">
                  <select
                    name="type"
                    defaultValue={type}
                    className="select select-bordered"
                  >
                    <option disabled selected>
                      Types
                    </option>
                    <option>Sneakers</option>
                    <option>T-shirt</option>
                    <option>Jeans</option>
                    <option>Hoddie</option>
                    <option>Jacket</option>
                    <option>Shirt</option>
                    <option>Shorts</option>
                    <option>Backpack</option>
                  </select>
                </div>
              </div>
              <div className="form-control">
                <div className="input-group">
                  <select
                    name="rating"
                    defaultValue={rating}
                    className="select select-bordered"
                  >
                    <option disabled selected>
                      Pick Rating
                    </option>
                    <option>1</option>
                    <option>1.5</option>
                    <option>2</option>
                    <option>2.5</option>
                    <option>3</option>
                    <option>3.5</option>
                    <option>4</option>
                    <option>4.5</option>
                    <option>5</option>
                  </select>
                </div>
              </div>
              {/* <div className="form-control ">
              <label className="label">
                <span className="label-text"></span>
              </label>
              <label className="input-group w-96">
                <span>Brand Name</span>
                <input
                  type="text"
                  placeholder="Brand Image"
                  className="input input-bordered"
                  name="brand"
                />
              </label>
            </div> */}
              {/* <div className="form-control">
              <label className="label">
                <span className="label-text"></span>
              </label>
              <label className="input-group w-96">
                <span>Quantity</span>
                <input
                  type="text"
                  placeholder="Quantity"
                  className="input input-bordered"
                  name="Quantity"
                />
              </label>
            </div> */}
            </div>

            <div className=" gap-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text"></span>
                </label>
                <label className="input-group">
                  <span>Product Name</span>
                  <input
                    type="text"
                    placeholder="Product Name"
                    className="input input-bordered"
                    name="name"
                    defaultValue={name}
                  />
                </label>
              </div>
            </div>
            {/* <div className="flex">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Email</span>
            </label>
            <label className="input-group">
              <span>Email</span>
              <input
                type="text"
                placeholder="info@site.com"
                className="input input-bordered"
              />
            </label>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Email</span>
            </label>
            <label className="input-group">
              <span>Email</span>
              <input
                type="text"
                placeholder="info@site.com"
                className="input input-bordered"
              />
            </label>
          </div>
        </div> */}
            <div className=" gap-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text"></span>
                </label>
                <label className="input-group w-96">
                  <span className="44">Price</span>
                  <input
                    type="text"
                    placeholder="Price"
                    className="input input-bordered"
                    name="price"
                    defaultValue={price}
                  />
                </label>
              </div>
              <div className="form-control w-72">
                <label className="label">
                  <span className="label-text"></span>
                </label>
                <label className="input-group">
                  <span>Description</span>
                  <input
                    type="text"
                    placeholder="Description"
                    className="input input-bordered"
                    name="description"
                    defaultValue={description}
                  />
                </label>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="form-control ">
                <label className="label">
                  <span className="label-text"></span>
                </label>
                <label className="input-group">
                  <span>Photo</span>
                  <input
                    type="text"
                    placeholder="Product Photo"
                    className="input input-bordered"
                    name="photo"
                    defaultValue={photo}
                  />
                </label>
              </div>
            </div>
            <button className="btn btn-primary mt-4">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProduct;
