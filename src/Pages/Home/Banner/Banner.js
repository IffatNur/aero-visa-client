import React from 'react';
import image1 from "../../../image/image1.jpg";
import image2 from "../../../image/image3.jpg";
import image3 from "../../../image/image2.jpg";
import './Banner.css'

const Banner = () => {
    return (
      <div>
        <div className="carousel  mb-0">
          <div id="slide1" className="banner-img carousel-item relative w-full">
            <img
              src={image1}
              alt=""
              className="w-full "
              style={{ height: "60%" }}
            />

            <div className="absolute transform -translate-y-1/2  top-60 heading left-64">
              <h1 className="text-6xl font-bold text-cyan-400 heading mb-5">
                Choose Your Destination
              </h1>

              <button className="btn btn-warning sm:btn-sm md:btn-md text-black">
                Explore
              </button>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-60">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="banner-img carousel-item relative w-full">
            <img
              src={image2}
              alt=""
              className="w-full"
              style={{ height: "60%" }}
            />
            <div className="absolute transform -translate-y-1/2  top-60 heading left-64">
              <h1 className="text-6xl font-bold text-white heading mb-5">
                Follow Your Dreams
              </h1>
              <button className="btn btn-warning sm:btn-sm md:btn-md text-black">
                Explore
              </button>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-60">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="banner-img carousel-item relative w-full">
            <img
              src={image3}
              alt=""
              className="w-full"
              style={{ height: "60%" }}
            />
            <div className="absolute transform -translate-y-1/2  top-60 heading left-64">
              <h1 className="text-6xl font-bold text-yellow-400 heading mb-5">
                Feel Free To Contact
              </h1>
              <button className="btn btn-warning sm:btn-sm md:btn-md text-black">
                Explore
              </button>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-60">
              <a href="#slide2" className="btn btn-circle">
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