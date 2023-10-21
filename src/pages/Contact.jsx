import React from "react";

const Contact = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/MsBMHYJ/5226399-mountain-mountain-range-sunlight-orange-cloudy-cloud-purple-snow-glow-peak-movement-light-la.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Why US?</h1>
            <p className="mb-5">
              At our website, we offer a wide range of stylish men's fashion,
              exceptional customer experience, competitive pricing, and a
              commitment to quality. We're your one-stop shop for fashion that
              meets your needs and enhances your style. Shop with us to discover
              the difference."
            </p>
            <button className="btn btn-primary">Start Business Acount</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
