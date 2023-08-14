import React from "react";

// Icons
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsArrowRight, BsFacebook, BsLinkedin } from "react-icons/bs";
import { BiLogoInstagramAlt } from "react-icons/bi";

const Footer = () => {
  return (
    <div className="bg-[#021E35] px-6 py-16 pb-10">
      <div className="max-w-[1400px] w-full mx-auto flex flex-col justify-center items-center gap-24">
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-start place-content-center gap-16">
          <div className="w-full flex flex-col justify-center items-start gap-6">
            <a href="/">
              <img
                src="/logo-01-white.png"
                className="max-w-[120px] w-full"
                alt="Site-Logo"
              />
            </a>
            <p className="text-sm text-white">
              As an upscale and exclusive chauffeur and limousine service near
              Indonesia, we have been ensuring for more than 15 years that you
              get to your destination on time and safely.
            </p>
            <div>
              <ul className="flex justify-center items-center gap-4">
                <li className="text-3xl text-white" title="Twitter">
                  <a href="/">
                    <AiFillTwitterCircle />
                  </a>
                </li>

                <li className="text-2xl text-white" title="Facebook">
                  <a href="/">
                    <BsFacebook />
                  </a>
                </li>

                <li className="text-2xl text-white" title="LinkedIn">
                  <a href="/">
                    <BsLinkedin />
                  </a>
                </li>

                <li className="text-3xl text-white" title="Instagram">
                  <a href="/">
                    <BiLogoInstagramAlt />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full flex flex-col justify-center items-start gap-8">
            <h3 className="font-semibold text-white text-lg">Buy Vehicle</h3>
            <ul className="flex flex-col justify-center items-start gap-4">
              <li
                className="text-sm text-white font-light"
                title="Find new car"
              >
                <a href="/">Find new car</a>
              </li>

              <li
                className="text-sm text-white font-light"
                title="Current vehicle offers"
              >
                <a href="/">Current vehicle offers</a>
              </li>

              <li
                className="text-sm text-white font-light"
                title="Price lists & brochures"
              >
                <a href="/">Price lists & brochures</a>
              </li>
            </ul>
          </div>

          <div className="w-full flex flex-col justify-center items-start gap-8">
            <h3 className="font-semibold text-white text-lg">
              Purchase advice
            </h3>
            <ul className="flex flex-col justify-center items-start gap-4">
              <li
                className="text-sm text-white font-light"
                title="Book a test drive"
              >
                <a href="/">Book a test drive</a>
              </li>

              <li
                className="text-sm text-white font-light"
                title="Find a dealer near you"
              >
                <a href="/">Find a dealer near you</a>
              </li>

              <li
                className="text-sm text-white font-light"
                title="Find used vehicles"
              >
                <a href="/">Find used vehicles</a>
              </li>
            </ul>
          </div>

          <div className="w-full flex flex-col justify-center items-start gap-8">
            <h3 className="font-semibold text-white text-lg">
              Customer Service
            </h3>
            <ul className="flex flex-col justify-center items-start gap-4">
              <li
                className="text-sm text-white font-light"
                title="Current service offers"
              >
                <a href="/">Current service offers</a>
              </li>

              <li
                className="text-sm text-white font-light"
                title="Online service campaign VIN-checker"
              >
                <a href="/">Online service campaign VIN-checker</a>
              </li>

              <li
                className="text-sm text-white font-light"
                title="5 Year staf service"
              >
                <a href="/">5 Year staf service</a>
              </li>

              <li
                className="text-sm text-white font-light"
                title="24h roadside assitance"
              >
                <a href="/">24h roadside assitance</a>
              </li>

              <li
                className="text-sm text-white font-light"
                title="New and events"
              >
                <a href="/">New and events</a>
              </li>

              <li
                className="text-sm text-white font-light"
                title="Press relase"
              >
                <a href="/">Press relase</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-full border-t border-t-[#FCFCFD] pt-10 flex justify-center items-center lg:gap-24 gap-8 flex-wrap">
          <div>
            <h5 className="font-light text-sm text-white">
              Copyright 2023 Mobiling Co.
            </h5>
          </div>

          <div>
            <a
              href="/"
              className="font-light text-sm text-white"
              title="Terms of Service"
            >
              Terms of Service
            </a>
          </div>

          <div>
            <a
              href="/"
              className="font-light text-sm text-white"
              title="Privacy Policy"
            >
              Privacy Policy
            </a>
          </div>

          <div>
            <a
              href="/"
              className="font-light text-sm text-white"
              title="Cookies"
            >
              Cookies
            </a>
          </div>

          <div>
            <a
              href="/"
              className="flex justify-center items-center gap-4"
              title="Language"
            >
              <span>
                <img
                  src="/assets/icons/earth.png"
                  alt="Earth-Icon"
                  className="h-4 w-4"
                />
              </span>
              <span className="font-light text-sm text-white">English</span>
              <span className="text-xl text-white">
                <BsArrowRight />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
