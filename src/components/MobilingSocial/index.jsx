import React from "react";

// Icons
import { MdOutlineArrowForwardIos } from "react-icons/md";

const MobilingSocial = () => {
  return (
    <div className="bg-white lg:mt-[137px] z-50 px-4 pt-16">
      <div className="max-w-[1400px] w-full mx-auto flex flex-col justify-center items-start gap-6">
        <h1 className="lg:text-3xl text-2xl font-semibold text-[#344054]">
          Mobiling Social
        </h1>

        <div className="w-full bg-gradient-to-t from-[#000000] to-[#b8b8b8] rounded-3xl min-h-[320px] h-full p-6">
          <div className="w-full h-[320px] border-2 border-white border-dashed p-5 flex flex-col justify-end items-start gap-2">
            <h2 className="lg:text-2xl text-xl font-medium text-white">
              Information on data processing
            </h2>
            <p className="lg:text-md text-sm text-gray-100 max-w-[560px] font-light w-full">
              On our website we provide content from Storysiream. To view this
              content, you must agree tothe dota processing by Storystream.
            </p>
            <div className="w-full mt-3 flex flex-row justify-start items-center flex-wrap gap-3 lg:pb-6">
              <button className="py-3 px-6 w-max text-sm bg-[#344054] text-white font-normal flex flex-row justify-center items-center gap-2">
                <span>
                  <MdOutlineArrowForwardIos />
                </span>
                <span>Agree</span>
              </button>

              <button className="py-3 px-6 w-max text-sm bg-[#344054] text-white font-normal flex flex-row justify-center items-center gap-2">
                <span>
                  <MdOutlineArrowForwardIos />
                </span>
                <span>Information on data privacy</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobilingSocial;
