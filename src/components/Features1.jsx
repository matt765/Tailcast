import feature1 from "../assets/images/feature1.png";
import feature2 from "../assets/images/feature2.png";
import feature3 from "../assets/images/feature3.png";
import feature4 from "../assets/images/feature4.png";
import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";

export const Features1 = () => {
  return (
    <section>
      <div className="py-20 bg-gray-900 bg-customDarkBg2 radius-for-skewed pt-44">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center">
            <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
              <div className="max-w-md lg:mx-auto">
                <span className="custom-block-subtitle">
                  Dolor sit amet consectutar
                </span>
                <h2 className="mt-6 mb-8 text-4xl lg:text-5xl custom-block-big-title">
                  Build &amp; Launch without problems
                </h2>
                <p className="mb-10 text-customGrayText leading-loose">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque efficitur nisl sodales egestas lobortis. Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <ul className="mb-6 text-white">
                  <li className="mb-4 flex">
                    <CheckArrowIcon />
                    <span>Vestibulum viverra</span>
                  </li>
                  <li className="mb-4 flex">
                    <CheckArrowIcon />
                    <span>Morbi mollis metus pretium</span>
                  </li>
                  <li className="mb-4 flex">
                    <CheckArrowIcon />
                    <span>Etiam lectus nunc, commodo</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full lg:w-1/2 flex flex-wrap -mx-4 pt-10">
              <div className="mb-8 lg:mb-0 w-full md:w-2/5 ">
                <div className="mb-4 py-3 pl-3 pr-2 rounded">
                  <img
                    src={feature1}
                    alt="f1"
                    className="rounded-xl  custom-border-gray"
                  />
                </div>
                <div className="py-3 pl-3 pr-2 rounded ">
                  <img
                    src={feature2}
                    alt="f2"
                    className="rounded-xl  custom-border-gray"
                  />
                </div>
              </div>
              <div className="w-full md:w-2/5 lg:mt-20 px-2">
                <div className="mb-4 py-3 pl-3 pr-2 rounded-lg ">
                  <img
                    src={feature3}
                    alt="f3"
                    className="rounded-xl  custom-border-gray"
                  />
                </div>
                <div className="py-3 pl-3 pr-2 rounded-lg ">
                  <img
                    src={feature4}
                    alt="f4"
                    className="rounded-xl  custom-border-gray"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
