import React from "react";
import Navbar from "./Navbar";
import greenDot from "../assets/images/dots-green.svg";
import couch from "../assets/images/couch.png";

const Hero = () => {
  return (
    <div className="h-[70vh] w-full bg-[#3B5D50] px-[200px] relative">
      <Navbar />
      <div className=" absolute z-10 top-40 right-32">
        <img
          src={greenDot}
          alt="developia_green_dot"
          className="w-full h-full object-cover"
        />
      </div>
      <div className=" absolute z-10 top-40 right-40">
        <img
          src={couch}
          alt="developia_couch"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="py-[200px]">
        <div className="w-1/3">
          <h1 className="font-semibold text-white text-6xl leading-tight mb-7">
            Modern Interior <br /> Design Studio
          </h1>
          <p className="text-[#738B82] text-lg leading-tight">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis ea qui fugiat quidem ad magnam quibusdam labore ab
            deserunt, commodi soluta explicabo cupiditate error ipsam pariatur
            autem iusto accusantium suscipit.
          </p>
          <div className="mt-6 font-medium flex justify-start gap-5 items-center">
            <button className="bg-[#F8BF28] flex justify-center items-center px-10 py-4 rounded-[50px] hover:bg-transparent border border-[#F8BF28] hover:text-[#F8BF28] hover:border-[#F8BF28] hover:border transform transition-all duration-300">
              Shop Now
            </button>
            <button className="bg-transparent text-white border-2 border-[#738B82] flex justify-center items-center px-10 py-4 rounded-[50px]">
              Explore
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
