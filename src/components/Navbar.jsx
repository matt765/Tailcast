import { useState } from "react";
import { TailcastLogo } from "../assets/logos/TailcastLogo";
import { GithubIcon } from "../assets/icons/GithubIcon";
import { FacebookIcon } from "../assets/icons/FacebookIcon";
import { InstagramIcon } from "../assets/icons/InstagramIcon";
import { TwitterIcon } from "../assets/icons/TwitterIcon";

import { motion, AnimatePresence } from "framer-motion";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="w-full h-20 flex flex-col justify-center items-center fixed bg-customDarkBg1 lg:bg-customDarkBgTransparent z-40 lg:backdrop-blur-xl">
        <div className="2xl:w-[1280px] xl:w-10/12 w-11/12 flex justify-between items-center relative">
          <div className="flex justify-start items-center grow basis-0">
            <div className="dark:text-white mr-2 text-6xl">
              <TailcastLogo />
            </div>
            <div className="dark:text-white font-['Inter'] font-bold text-xl">
              Tailcast
            </div>
          </div>
          <div className="hidden lg:flex">
            <a className="navbar-link" href="#home">
              Home
            </a>
            <a className="navbar-link" href="#features">
              Features
            </a>
            <a className="navbar-link" href="#pricing">
              Pricing
            </a>
            <a className="navbar-link" href="#feedback">
              Feedback
            </a>
            <a className="navbar-link" href="#FAQ">
              FAQ
            </a>
          </div>
          <div class="grow basis-0 justify-end hidden lg:flex">
            <a
              className="text-white custom-border-gray rounded-xl
           bg-customDarkBg2 hover:bg-customDarkBg3  border-gray-700 pl-6 pr-8 pt-2 pb-2 text-sm flex"
              href="https://github.com/matt765/Tidestream"
              target="_blank"
            >
              <GithubIcon />
              Source code
            </a>
          </div>
          <div
            className="lg:hidden flex flex-col  px-2 py-3 border-solid border border-gray-600 rounded-md cursor-pointer hover:bg-customDarkBg2"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="w-5 h-0.5 bg-gray-500  mb-1"></div>
            <div className="w-5 h-0.5 bg-gray-500  mb-1"></div>
            <div className="w-5 h-0.5 bg-gray-500 "></div>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              exit={{ opacity: 0 }}
            >
              <div
                className="flex flex-col mt-16 lg:hidden absolute top-4 left-0  bg-customDarkBg1 z-50 w-full 
        items-center gap-10 pb-10 border-y border-solid border-customDarkBg3 pt-10
        "
              >
                <a
                  className="navbar-link"
                  href="#home"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </a>
                <a
                  className="navbar-link"
                  href="#features"
                  onClick={() => setIsOpen(false)}
                >
                  Features
                </a>
                <a
                  className="navbar-link"
                  href="#pricing"
                  onClick={() => setIsOpen(false)}
                >
                  Pricing
                </a>
                <a
                  className="navbar-link"
                  href="#feedback"
                  onClick={() => setIsOpen(false)}
                >
                  Feedback
                </a>
                <a
                  className="navbar-link"
                  href="#FAQ"
                  onClick={() => setIsOpen(false)}
                >
                  FAQ
                </a>
                <div>
                  <a
                    className="inline-block w-10  h-10 mr-2 p-2 bg-customDarkBg2 custom-border-gray  hover:bg-gray-700 rounded-xl"
                    href="#"
                  >
                    <FacebookIcon />
                  </a>
                  <a
                    className="inline-block w-10  h-10 mr-2 p-2 bg-customDarkBg2 custom-border-gray  hover:bg-gray-700 rounded-xl"
                    href="#"
                  >
                    <TwitterIcon />
                  </a>
                  <a
                    className="inline-block w-10  h-10 mr-2 p-2 bg-customDarkBg2 custom-border-gray  hover:bg-gray-700 rounded-xl"
                    href="#"
                  >
                    <InstagramIcon />
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.div>
  );
};
