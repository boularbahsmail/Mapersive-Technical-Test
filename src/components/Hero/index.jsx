import React from "react";

// Icons
import { BsSearch } from "react-icons/bs";
import {
  MdOutlineArrowForwardIos,
  MdOutlineArrowBackIos,
} from "react-icons/md";

// Car info
import cartInfo from "./data";

// Assets
import HeroImage from "../../assets/hero-image-01.png";

const Hero = () => {
  return (
    <div className="p-6 max-w-[1400px] w-full mx-auto grid grid-cols-1 lg:grid-cols-2 place-items-center gap-10">
      <div className="w-full flex flex-col justify-center items-center lg:items-start lg:gap-24 gap-16 h-full">
        <div className="flex flex-col justify-center items-center lg:items-start gap-6">
          <h1 className="text-5xl lg:text-6xl font-bold text-[#344054] lg:text-left text-center">
            Best Car For Your Performance
          </h1>
          <p className="text-md text-[#98A2B3] max-w-md w-full lg:text-left text-center">
            We will serve you to get dream car here easily and quickly thet is
            reliable
          </p>
          <form className="w-full h-14 bg-white rounded-xl flex flex-row justify-between items-center overflow-hidden">
            <input
              type="text"
              placeholder="Search"
              className="px-4 h-full lg:w-[90%] w-[80%] text-md outline-none"
              required
            />
            <button
              className="h-full lg:w-[10%] w-[20%] bg-[#1A89EC] text-white text-xl flex justify-center items-center"
              title="Search"
            >
              <BsSearch />
            </button>
          </form>
        </div>

        <div className="w-full flex flex-col justify-center items-center lg:items-start gap-6">
          <h3 className="lg:text-3xl text-2xl font-medium text-[#344054]">
            BMW Series 3 BLUE
          </h3>
          <div className="grid grid-cols-3 place-items-center gap-8">
            {cartInfo?.map((info) => (
              <div
                className="w-full flex flex-col justify-center items-center lg:items-start gap-2"
                key={info?.id}
              >
                <h5 className="text-md text-[#98A2B3] font-light">
                  {info?.title}
                </h5>
                <h4 className="text-xl text-[#667085]">{info?.value}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full lg:h-auto h-full flex flex-col justify-center items-center gap-10 lg:absolute lg:-top-40 lg:right-0 lg:w-auto">
        <div className="relative">
          <img
            src={HeroImage}
            alt="Hero-Image"
            className="w-full h-full relative"
          />

          <div className="w-[30%] mx-auto flex flex-row justify-between items-center absolute left-0 lg:right-20 right-12 lg:bottom-32 bottom-8">
            <button className="h-10 w-10 flex justify-center items-center rounded-full border border-gray-600 text-gray-600">
              <MdOutlineArrowBackIos />
            </button>

            <button className="h-10 w-10 flex justify-center items-center rounded-full border border-gray-600 text-gray-600">
              <MdOutlineArrowForwardIos />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
