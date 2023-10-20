import React from "react";
import { useLoaderData } from "react-router-dom";
import CartList from "./layouts/cartList";

const Cart = () => {
  const Carts = useLoaderData();

  return (
    <div>
      <div className="grid grid-cols-3 gap-6 mt-10">
        {Carts.map((cart) => (
          <CartList key={cart._id} cart={cart}></CartList>
        ))}
      </div>
    </div>
  );
};

export default Cart;
