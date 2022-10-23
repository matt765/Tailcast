import { useLayoutEffect, useRef } from "react";
import dashboard from "../assets/images/dashboard.png";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="w-screen  flex justify-center items-center bg-customDarkBg1 mb-64 hero-bg-gradient">
      <div className="w-2/5 flex flex-col justify-center items-center pt-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="text-customSecondary text-base  mb-6 mt-32 font-bold">
            Introducing Design Data Platform
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.05 }}
        >
          <div className="font-['Inter'] text-7xl font-bold tracking-wide pl-10 pr-10 hero-title-gradient">
            Turn your ideas into reality
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <div className="text-customGrayText text-base mt-10">
            Specify helps you unify your brand identity by collecting, storing
            and distributing design tokens and assets — automatically. Lorem
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
        >
          <div className="flex mt-14 mb-40 justify-center">
            <div className="w-60 h-14 rounded-xl font-bold bg-customPrimary text-white mr-10  flex justify-center items-center">
              Get Started
            </div>
            <div className="w-60 h-14 rounded-xl font-bold text-white border border-solid  flex justify-center items-center cursor-pointer bg-customDarkBg2 border-customPrimary">
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
              width="1200px"
              className="mx-auto absolute z-10 rounded-xl  custom-border-gray hero-dashboard-border-gradient"
            />

            <div className="custom-shape-divider-bottom-1665343298 mt-32 ">
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
