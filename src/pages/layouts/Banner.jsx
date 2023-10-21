import React from "react";

const Banner = () => {
  return (
    <div className="px-16 py-4">
      <div className="carousel w-full md:h-[410px] object-cover rounded-md">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            // src="https://i.ibb.co/pKLrK7v/adidas-Originals-Carnaby-Store-Photography-Record-Shop-986-1024x576.jpg"
            src="https://i.ibb.co/98ST6Fq/banner1-9287ef0eb8744148a4e775f2c79ba245.webp"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5  top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/60fmwbx/63b0a657792295-59e4652eb2e41.jpg"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/zmPbtxt/264e3629894817-5609864fcd16d.png"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/K2YBxVv/12eaf097685aff6c6cd91924ba91d3ae.jpg"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle ">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
