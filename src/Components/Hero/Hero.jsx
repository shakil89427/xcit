import React from "react";
import hero from "../img/Hero Image.png";
import triangular from "../img/Triangular Vector.png";
import rectangle_28 from "../img/Rectangle 28.png";
import rectangle_29 from "../img/Rectangle 29.png";
import rectangle_30 from "../img/Rectangle 30.png";

const Hero = () => {
  return (
    <div className="bg-red-900 p-8">
      <div className="bg-white p-5 rounded-t-2xl flex justify-between items-center">
        <h1 className="text-4xl font-bold text-red-900">XcitEducation</h1>
        <span className="flex items-center">
          <p className="underline text-red-900 font-semibold">New here?</p>
          <button className="bg-red-900 text-white py-1 px-5 rounded-lg ml-2 font-semibold">
            Register
          </button>
        </span>
      </div>
      <div className="flex flex-col md:flex-row lg:flex-row">
        <div className="w-full md:w-1/2 lg:1/2 lg:pl-20 relative">
          <h1 className="text-4xl text-white font-semibold mt-14  mb-8">
            Lorem ipsum dolor sit amet consectetur
          </h1>
          <p className=" text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ex
            porro architecto magni possimus mollitia minus. Dignissimos
            perspiciatis quod ipsa laboriosam, in corporis est eveniet tenetur
            cupiditate explicabo cum ex.
          </p>
          <div className="mt-20">
            <button className="bg-white text-red-900 py-1 px-5 rounded-lg mr-5 font-semibold">
              Start Now
            </button>
            <button className="bg-white text-red-900 py-1 px-5 rounded-lg font-semibold">
              Find More
            </button>
          </div>
          <div className="relative -left-20 mt-44">
            <img
              className="absolute bottom-0 -left-10"
              src={rectangle_28}
              alt=""
            />
            <img
              className="absolute bottom-0 left-5"
              src={rectangle_29}
              alt=""
            />
            <img
              className="absolute bottom-0 left-10"
              src={rectangle_30}
              alt=""
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:1/2">
          {/* <img className="" src={triangular} alt="" />
          <img className="" src={hero} alt="" /> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
