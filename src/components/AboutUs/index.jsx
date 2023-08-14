import React from "react";

// Stats data
import stats from "./data";

const AboutUs = () => {
  return (
    <div className="bg-white p-4 py-14">
      <div className="max-w-[1400px] w-full mx-auto grid grid-cols-1 md:grid-cols-2 place-items-center lg:gap-60 gap-10">
        <div className="w-full">
          <h1 className="lg:text-3xl text-2xl font-medium text-[#344054]">
            About Us
          </h1>
          <h3 className="lg:text-xl text-md font-medium text-[#344054] py-4">
            Find out briefly but informatively
          </h3>
          <p className="text-sm font-normal text-[#344054] leading-6">
            As an upscale and exclusive chauffeur and limousine service near
            Indonesia, we have been ensuring for more than 15 years that you get
            to your destination on time and safely. We sell in around Indonesia
            , as well as beyond to destinations throughout World. From the
            Indonesia to shuttle service, you can look forward to a professional
            team and comfort of our car service.
          </p>
        </div>

        <div className="w-full grid grid-cols-2 place-items-center gap-8 bg-[#E3E6E9] rounded-3xl h-full py-12 px-6">
          {stats?.map((stat) => (
            <div
              className="w-full flex flex-col justify-center items-center gap-4"
              key={stat?.id}
            >
              <img src={stat?.icon} alt="Card-Icon" className={stat?.size} />
              <h3 className="text-md text-[#344054] text-center">
                {stat?.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
