import feature5 from "../assets/images/feature5.png";
import feature6 from "../assets/images/feature6.png";
import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";

export const Features2 = () => (
  <section>
    <div className="w-full py-20 bg-gray-900 bg-customDarkBg2 pt-28 flex justify-center">
      <div className="w-3/5 flex justify-center items-center ">
        <div className="w-1/2">
          <div className="mb-4 py-3 -ml-10 pr-2 rounded">
            <img
              src={feature5}
              alt="f1"
              className="rounded-xl  custom-border-gray"
            />
          </div>
          <div className="py-3 pl-3 pr-2 rounded ">
            <img
              src={feature6}
              alt="f2"
              className="rounded-xl  custom-border-gray"
            />
          </div>
        </div>

        <div className="w-1/2 pl-24">
          <span className="custom-block-subtitle">
            Dolor sit amet consectutar
          </span>
          <h2 className="mt-6 mb-8 text-4xl lg:text-5xl custom-block-big-title">
            Build &amp; Launch without problems
          </h2>
          <p className="mb-12 text-customGrayText leading-loose">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque efficitur nisl sodales egestas lobortis. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit.
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
    </div>
  </section>
);
