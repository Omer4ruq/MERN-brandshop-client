import React from "react";

const PreOrders = () => {
  return (
    <div>
      <h1 className="font-bold text-4xl text-center text-yellow-300">
        Pre Orders
      </h1>
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row-reverse ">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl  bg-yellow-300">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">product Name</span>
                </label>
                <input
                  type="text"
                  name="product"
                  placeholder="product Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-neutral">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreOrders;
