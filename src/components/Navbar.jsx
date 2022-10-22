import { useEffect, useState } from "react";
import { RaystreamsLogo } from "../assets/logos/RaystreamsLogo";
import { GithubIcon } from "../assets/icons/GithubIcon";

export const Navbar = () => {
  const [isDarkModeEnabled, setIsDarkModeEnabled] = useState(true);

  useEffect(() => {
    if (localStorage.theme === "light") {
      setIsDarkModeEnabled(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const handleChange = () => {
    if (localStorage.theme === "dark" || !localStorage.theme) {
      localStorage.setItem("theme", "light");
      setIsDarkModeEnabled(false);
      document.documentElement.classList.remove("dark");
    } else if (localStorage.theme === "light") {
      localStorage.setItem("theme", "dark");
      setIsDarkModeEnabled(true);
      document.documentElement.classList.add("dark");
    }
  };

  return (
    <nav className="w-full h-20 flex justify-center items-center absolute">
      <div className="w-8/12 flex justify-between items-center">
        <div className="flex justify-start items-center grow basis-0">
          <div className="dark:text-white mr-2 text-6xl">
            <RaystreamsLogo />
          </div>
          <div className="dark:text-white font-['Inter'] font-bold text-xl">
            Raystreams
          </div>
        </div>
        <div className="flex">
          <div className="navbar-link">Home</div>
          <div className="navbar-link">Pricing</div>
          <div className="navbar-link">Features</div>
          <div className="navbar-link">About us</div>
          <div className="navbar-link">Contact</div>
        </div>
        <div class="flex grow basis-0 justify-end">
          <div className="text-white custom-border-gray rounded-xl
           bg-customDarkBg2 border-gray-700 pl-6 pr-8 pt-2 pb-2 text-sm flex">
            <GithubIcon />
            Source code
          </div>
          {/* <label className="relative flex justify-between items-center group text-xl w-[2.2rem] ml-4">
            <input
              type="checkbox"
              className="peer appearance-none rounded-md"
              checked={isDarkModeEnabled}
              onChange={handleChange}
            />
            <span className="w-[2.2rem] h-[0.9rem] flex items-center flex-shrink-0 pr-2 bg-gray-300 rounded-full duration-300 ease-in-out peer-checked:bg-customSecondary after:w-5 after:h-5 after:bg-customPrimary after:rounded-full after:shadow-md after:duration-300 peer-checked:after:translate-x-4 cursor-pointer"></span>
          </label> */}
        </div>
      </div>
    </nav>
    // <nav className="border-gray-200 px-2 sm:px-4 py-2.5 rounded bg-[#1F2023]">

    //   <div className="container flex flex-wrap justify-between items-center mx-auto">
    //     <a href="https://flowbite.com/" className="flex items-center">
    //       <img
    //         src="https://flowbite.com/docs/images/logo.svg"
    //         className="mr-3 h-6 sm:h-9"
    //         alt="Flowbite Logo"
    //       />
    //       <span className="self-center text-xl font-semibold whitespace-nowrap text-white">
    //         Flowbite
    //       </span>
    //     </a>
    //     <button
    //       data-collapse-toggle="navbar-default"
    //       type="button"
    //       className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 text-gray-400 hover:bg-gray-700 focus:ring-gray-600"
    //       aria-controls="navbar-default"
    //       aria-expanded="false"
    //     >
    //       <span className="sr-only">Open main menu</span>
    //       <svg
    //         className="w-6 h-6"
    //         aria-hidden="true"
    //         fill="currentColor"
    //         viewBox="0 0 20 20"
    //         xmlns="http://www.w3.org/2000/svg"
    //       >
    //         <path
    //           fill-rule="evenodd"
    //           d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
    //           clip-rule="evenodd"
    //         ></path>
    //       </svg>
    //     </button>
    //     <div className="hidden w-full md:block md:w-auto" id="navbar-default">
    //       <ul className="flex flex-col p-4 mt-4  rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0   border-gray-700">
    //         <li>
    //           <a
    //             href="#"
    //             className="block py-2 pr-4 pl-3 text-white  rounded md:bg-transparent  md:p-0 text-white"
    //             aria-current="page"
    //           >
    //             Home
    //           </a>
    //         </li>
    //         <li>
    //           <a
    //             href="#"
    //             className="block py-2 pr-4 pl-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 "
    //           >
    //             About
    //           </a>
    //         </li>
    //         <li>
    //           <a
    //             href="#"
    //             className="block py-2 pr-4 pl-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 "
    //           >
    //             Services
    //           </a>
    //         </li>
    //         <li>
    //           <a
    //             href="#"
    //             className="block py-2 pr-4 pl-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 "
    //           >
    //             Pricing
    //           </a>
    //         </li>
    //         <li>
    //           <a
    //             href="#"
    //             className="block py-2 pr-4 pl-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 "
    //           >
    //             Contact
    //           </a>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </nav>
  );
};
