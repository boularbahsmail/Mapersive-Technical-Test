import React from "react";

const Header = ({ menuOpen, setMenuOpen }) => {
  return (
    <header className="max-w-[1400px] w-full mx-auto p-4 grid grid-cols-3 lg:grid-cols-3 place-items-center gap-4 lg:z-50 lg:relative">
      <div className="LOGO w-full z-50">
        <a href="/">
          <img
            src="/logo-01.png"
            className="max-w-[120px] w-full"
            alt="Site-Logo"
          />
        </a>
      </div>

      <div className="NAV w-full">
        <ul
          className={`flex lg:flex-row justify-center items-center gap-10 lg:static lg:bg-transparent lg:backdrop-blur-0 lg:h-auto lg:w-auto || flex-col fixed ${
            menuOpen ? "left-0" : "-left-full"
          } top-0 h-screen w-full backdrop-blur-md bg-white/70 duration-200 ease-in-out`}
        >
          <li
            className="font-medium text-md text-[#667085] hover:text-black"
            title="Home"
          >
            <a href="/">Home</a>
          </li>

          <li
            className="font-medium text-md text-[#667085] hover:text-black"
            title="Service"
          >
            <a href="/">Service</a>
          </li>

          <li
            className="font-medium text-md text-[#667085] hover:text-black"
            title="Product"
          >
            <a href="/">Product</a>
          </li>

          <li
            className="font-medium text-md text-[#667085] hover:text-black"
            title="Testimonial"
          >
            <a href="/">Testimonial</a>
          </li>

          <div className="lg:hidden w-full flex justify-center items-center">
            <button className="py-2.5 px-10 rounded-xl font-normal text-white bg-[#1A89EC]">
              Sign in
            </button>
          </div>
        </ul>
      </div>

      <div className="hidden w-full lg:flex justify-center items-center">
        <button className="py-2.5 px-10 rounded-xl font-normal text-white bg-[#1A89EC]">
          Sign in
        </button>
      </div>

      <div
        className="lg:hidden h-10 flex flex-col justify-center items-end gap-1.5 z-50 w-full overflow-hidden"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span className={`bg-[#344054] h-[3px] w-[28px] duration-200 ease-in-out ${menuOpen && "-rotate-45"}`}></span>
        <span className={`bg-[#344054] h-[3px] w-[28px] duration-200 ease-in-out ${menuOpen && "hidden"}`}></span>
        <span className={`bg-[#344054] h-[3px] w-[28px] duration-200 ease-in-out ${menuOpen && "rotate-45 -mt-2"}`}></span>
      </div>
    </header>
  );
};

export default Header;
