import React from "react";
import { NavLink } from "react-router-dom";

const DiscountSection = () => {
  return (
    <div>
      <div className="hero w-full md:h-[410px] object-covern bg-yellow-300 mt-6">
        <div className="hero-content text-left md:text-center">
          <div className=" max-w-md">
            <h1 className="text-5xl font-bold">
              WELCOME TO THE <br></br> CELEBRATION
            </h1>
            <p className="py-6">
              Don't miss out on our fantastic limited-time discount offer. Enjoy
              amazing savings on a wide range of products that you love. To stay
              up to date on it all. make suer you sign up.
            </p>
            <div className="flex gap-2">
              <NavLink to="/signup">
                {" "}
                <button className="btn btn-neutral w-32">Sign Up</button>
              </NavLink>
              <NavLink to="collection">
                <button className="btn btn-neutral">Shop The Collection</button>
              </NavLink>
              <NavLink to="/app">
                <button className="btn btn-neutral">Download Our Apps</button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscountSection;
