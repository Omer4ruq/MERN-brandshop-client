import React from "react";
import { NavLink } from "react-router-dom";

const Partner = () => {
  return (
    <div>
      <div className="hero w-full md:h-[410px] bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://i.ibb.co/80rKvdD/istockphoto-1160000498-612x612.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">
              Explore Partnership Opportunities with Us
            </h1>
            <p className="py-6">
              Join forces with us to grow your business and reach new heights.
              We believe in the power of collaboration and are excited to offer
              partnership opportunities that can benefit both parties.
            </p>
            <NavLink to="/contact">
              <button className="btn btn-neutral">Explore</button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partner;
