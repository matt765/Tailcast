import { useEffect, useState } from "react";
import { RaystreamsLogo } from "../assets/logos/RaystreamsLogo";
import { GithubIcon } from "../assets/icons/GithubIcon";

export const Navbar = () => {
  return (
    <nav className="w-full h-20 flex justify-center items-center fixed bg-[rgb(31, 32, 35)] z-50 backdrop-blur-xl">
      <div className="2xl:w-8/12 xl:w-10/12 w-11/12 flex justify-between items-center relative">
        <div className="flex justify-start items-center grow basis-0">
          <div className="dark:text-white mr-2 text-6xl">
            <RaystreamsLogo />
          </div>
          <div className="dark:text-white font-['Inter'] font-bold text-xl">
            Raystreams
          </div>
        </div>
        <div className="flex flex-col lg:flex-row top-20  lg:top-0 absolute lg:relative">
          <div className="navbar-link">Home</div>
          <div className="navbar-link">Pricing</div>
          <div className="navbar-link">Features</div>
          <div className="navbar-link">About us</div>
          <div className="navbar-link">Contact</div>
        </div>
        <div class="grow basis-0 justify-end hidden lg:flex">
          <div
            className="text-white custom-border-gray rounded-xl
           bg-customDarkBg2 border-gray-700 pl-6 pr-8 pt-2 pb-2 text-sm flex"
          >
            <GithubIcon />
            Source code
          </div>
        </div>
        <div className="lg:hidden flex flex-col  px-2 py-3 border-solid border border-gray-600 rounded-md">
          <div className="w-5 h-0.5 bg-gray-500  mb-1"></div>
          <div className="w-5 h-0.5 bg-gray-500  mb-1"></div>
          <div className="w-5 h-0.5 bg-gray-500 "></div>
        </div>
      </div>
    </nav>
  );
};
