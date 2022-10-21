import feature5 from "../assets/images/feature5.png";
import feature6 from "../assets/images/feature6.png";

export const Features2 = () => (
  <section>
    <div className="w-full py-20 bg-gray-900 dark:bg-customDarkBg2 pt-28 flex justify-center">
      <div className="w-3/5 flex justify-center items-center ">
        <div className="w-1/2">
          <div className="mb-4 py-3 -ml-10 pr-2 rounded">
            <img src={feature5} alt="f1" className="rounded-xl custom-border-purple" />
          </div>
          <div className="py-3 pl-3 pr-2 rounded ">
            <img src={feature6} alt="f2" className="rounded-xl custom-border-purple" />
          </div>
        </div>

        <div className="w-1/2 pl-24">
          <span className="custom-block-subtitle">
            Dolor sit amet consectutar
          </span>
          <h2 className="mt-6 mb-8 text-4xl lg:text-5xl custom-block-big-title">
            Build &amp; Launch without problems
          </h2>
          <p className="mb-16 text-gray-500 leading-loose">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque efficitur nisl sodales egestas lobortis.
          </p>
          <div className="w-2/5 h-12 rounded-xl font-bold bg-customPrimary text-white mr-10  flex justify-center items-center">
            Get Started
          </div>
        </div>
      </div>
    </div>
  </section>
);
