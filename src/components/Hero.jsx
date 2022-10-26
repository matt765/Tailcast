import { useLayoutEffect, useRef } from "react";
import dashboard from "../assets/images/dashboard.png";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="w-screen  flex justify-center items-center bg-customDarkBg1 mb-[4vw] md:mb-[12vw] lg:mb-44 xl:mb-60 xll:mb-72 hero-bg-gradient">
      <div className="w-full md:w-[800px] xl:w-[900px] flex flex-col justify-center items-center pt-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-customSecondary text-sm sm:text-base  mb-6 sm:mt-32 mt-16  font-bold">
            Introducing Design Data Platform
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          <div className="font-['Inter'] text-5xl sm:text-6xl lg:text-6xl xl:text-7xl font-bold tracking-wide  hero-title-gradient  px-12 sm:px-20 md:px-24 lg:px-28">
            Turn your ideas into reality
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="text-customGrayText text-sm sm:text-base mt-10 px-12">
            Specify helps you unify your brand identity by collecting, storing
            and distributing design tokens and assets — automatically. Lorem
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <div className="flex flex-col gap-6 sm:flex-row mt-14 mb-24 sm:mb-40 justify-center">
            <div className="custom-button-colored w-80 sm:w-60 h-14 mr-0 sm:mr-10">
              Get Started
            </div>
            <div className="w-80 sm:w-60 h-14 rounded-xl font-bold text-white border border-solid  flex justify-center items-center cursor-pointer bg-customDarkBg2 border-customPrimary">
              Live demo
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="relative w-screen flex justify-center ">
            <img
              src={dashboard}
              alt="123"
              className="w-4/5 2xl:w-[1200px] mx-auto absolute z-10 rounded-xl  custom-border-gray hero-dashboard-border-gradient"
            />

            <div className="custom-shape-divider-bottom-1665343298 mt-4 sm:mt-16 md:mt-32 ">
              <svg
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1200 120"
                preserveAspectRatio="none"
              >
                <path
                  d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
                  className="shape-fill custom-bg-dark2"
                ></path>
              </svg>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
