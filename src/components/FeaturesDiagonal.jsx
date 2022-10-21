import f1 from "../assets/images/f1.png";
import { LogoCloud } from "../assets/icons/LogoCloud";
import { Logos } from "./Logos.jsx";
import feature5 from "../assets/images/feature5.png";
import feature6 from "../assets/images/feature6.png";

export const FeaturesDiagonal = () => {
  return (
    <section className="mb-16 w-full flex flex-col justify-center items-center">
      <div class="custom-shape-divider-bottom-1665696614">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
      <div className="w-full flex justify-center bg-customDarkBg1 py-24">
        <div className="flex w-3/5 justify-center items-center">
          <div className="w-1/2 flex flex-col">
            <span className="custom-block-subtitle">
              Dolor sit amet consectutar
            </span>
            <h2 className="mt-6 mb-8 text-4xl lg:text-5xl custom-block-big-title">
              Build &amp; Launch without problems
            </h2>
            <p className="mb-16 text-gray-500 leading-loose">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque efficitur nisl sodales egestas lobortis.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque efficitur nisl sodales egestas lobortis.
            </p>
            <div className="w-2/5 h-12 rounded-xl font-bold bg-customPrimary text-white mr-10  flex justify-center items-center">
              Get Started
            </div>
          </div>
          <div className="w-1/2 pl-16">
            <img
              src={feature5}
              alt="f1"
              className="rounded-xl custom-border-purple"
            />
          </div>
        </div>
      </div>

      <div class="custom-shape-divider-top-1665696661 w-full">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
    </section>
  );
};
