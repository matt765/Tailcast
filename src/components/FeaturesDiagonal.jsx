import { motion } from "framer-motion";

import featuresdiagonal from "../assets/images/featuresdiagonal.png";

export const FeaturesDiagonal = () => {
  return (
    <section className="mb-16 w-full flex flex-col justify-center items-center bg-customDarkBg1">
      <div class="custom-shape-divider-bottom-1665696614">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="custom-bg-dark2"
        >
          <path
            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
            className="custom-bg-dark1"
          ></path>
        </svg>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="w-full flex justify-center bg-customDarkBg1 pt-24 pb-20">
          <div className="flex w-3/5 justify-center items-center">
            <div className="w-1/2 flex flex-col">
              <span className="custom-block-subtitle">
                Dolor sit amet consectutar
              </span>
              <h2 className="mt-6 mb-8 text-4xl lg:text-5xl custom-block-big-title">
                Build &amp; Launch without problems
              </h2>
              <p className="mb-16 text-customGrayText leading-loose">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque efficitur nisl sodales egestas lobortis. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <div className="w-2/5 h-12 custom-button-colored mr-10 ">
                Get Started
              </div>
            </div>
            <div className="w-1/2 pl-16">
              <img
                src={featuresdiagonal}
                alt="f1"
                className="rounded-xl  custom-border-gray"
              />
            </div>
          </div>
        </div>
      </motion.div>
      <div class="custom-shape-divider-top-1665696661 w-full">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="custom-bg-dark2"
        >
          <path
            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
            className="custom-bg-dark1"
          ></path>
        </svg>
      </div>
    </section>
  );
};
