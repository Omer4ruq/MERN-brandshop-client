import React from "react";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";

const CartList = ({ cart }) => {
  const { _id, photo, brand, name, color, price, type, description, rating } =
    cart;

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/cart/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };
  return (
    <div>
      <div className=" w-80 glass">
        <figure>
          <img className="w-96 h-60" src={photo} />
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
              <button
                onClick={() => handleDelete(_id)}
                className="btn rounded-none px-1  hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartList;
