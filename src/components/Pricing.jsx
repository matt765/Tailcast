export const Pricing = () => (
  <section className="w-screen flex justify-center">
    <div className="pb-20 pt-16 dark:bg-customDarkBg2 w-3/5 ">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="custom-block-subtitle">
            Dolor sit amet consectutar
          </span>
          <h2 className="mt-6 mb-6 text-4xl lg:text-5xl font-bold font-heading text-white">
            Choose your best plan
          </h2>
          <p className="mb-6 text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className="inline-block py-1 px-1 bg-customDarkBg3 rounded-lg">
            <button className="mr-1 text-sm py-2 px-4 text-gray-500 hover:text-gray-900 font-bold">
              Monthly
            </button>
            <button className="text-sm py-2 px-4 text-white dark:bg-customPrimary rounded-lg shadow-mf font-bold">
              Yearly
            </button>
          </div>
        </div>
        <div className="flex flex-wrap -mx-4 items-center">
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8 lg:mb-0">
            <div className="p-8 bg-customDarkBg3 custom-border-gray rounded-3xl">
              <h4 className="mb-4 text-2xl font-bold font-heading text-white">Beginner</h4>
              <span className="text-6xl font-bold text-white">Free</span>
              <p className="mt-6 mb-6 text-gray-500 leading-loose">
                Nullam diam arcu, sodales quis convallis sit amet, sagittis
                varius ligula.
              </p>
              <ul className="mb-6 text-white">
                <li className="mb-2 flex">
                  <svg
                    className="mr-2 w-5 h-5 text-green-600"
                    xmlns="http://www.w3.org/2000/svg"
                    viewbox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>Vestibulum viverra</span>
                </li>
                <li className="mb-2 flex">
                  <svg
                    className="mr-2 w-5 h-5 text-green-600"
                    xmlns="http://www.w3.org/2000/svg"
                    viewbox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>Morbi mollis metus pretium</span>
                </li>
                <li className="mb-2 flex">
                  <svg
                    className="mr-2 w-5 h-5 text-green-600"
                    xmlns="http://www.w3.org/2000/svg"
                    viewbox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>Etiam lectus nunc, commodo</span>
                </li>
                <li className="mb-2 flex">
                  <svg
                    className="mr-2 w-5 h-5 text-green-600"
                    xmlns="http://www.w3.org/2000/svg"
                    viewbox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>Ut quam nisl mollis id pretium</span>
                </li>
                <li className="mb-2 flex">
                  <svg
                    className="mr-2 w-5 h-5 text-green-600"
                    xmlns="http://www.w3.org/2000/svg"
                    viewbox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>Suspendisse bibendum</span>
                </li>
              </ul>
              <a
                className="inline-block text-center py-2 px-4 w-full rounded-xl rounded-t-xl bg-customPrimary hover:bg-green-700 text-white font-bold leading-loose transition duration-200 mt-8"
                href="#"
              >
                Get Started
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8 lg:mb-0">
            <div className="px-8 py-16 bg-customDarkBg3 custom-border-gray rounded-3xl">
              <h4 className="mb-4 text-2xl font-bold font-heading text-white">Intermediate</h4>
              <span className="text-6xl font-bold text-white">48$</span>
              <p className="mt-6 mb-6 text-gray-500 leading-loose">
                Nullam diam arcu, sodales quis convallis sit amet, sagittis
                varius ligula.
              </p>
              <ul className="mb-6 text-white">
                <li className="mb-2 flex">
                  <svg
                    className="mr-2 w-5 h-5 text-green-600"
                    xmlns="http://www.w3.org/2000/svg"
                    viewbox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>Vestibulum viverra</span>
                </li>
                <li className="mb-2 flex">
                  <svg
                    className="mr-2 w-5 h-5 text-green-600"
                    xmlns="http://www.w3.org/2000/svg"
                    viewbox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>Morbi mollis metus pretium</span>
                </li>
                <li className="mb-2 flex">
                  <svg
                    className="mr-2 w-5 h-5 text-green-600"
                    xmlns="http://www.w3.org/2000/svg"
                    viewbox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>Etiam lectus nunc, commodo</span>
                </li>
                <li className="mb-2 flex">
                  <svg
                    className="mr-2 w-5 h-5 text-green-600"
                    xmlns="http://www.w3.org/2000/svg"
                    viewbox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>Ut quam nisl mollis id pretium</span>
                </li>
                <li className="mb-2 flex">
                  <svg
                    className="mr-2 w-5 h-5 text-green-600"
                    xmlns="http://www.w3.org/2000/svg"
                    viewbox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>Suspendisse bibendum</span>
                </li>
              </ul>
              <a
                className="inline-block text-center py-2 px-4 w-full rounded-xl rounded-t-xl bg-customPrimary hover:bg-green-700 text-white font-bold leading-loose transition duration-200 mt-8"
                href="#"
              >
                Get Started
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8 lg:mb-0">
            <div className="p-8 bg-customDarkBg3 custom-border-gray rounded-3xl">
              <h4 className="mb-4 text-2xl font-bold font-heading text-white">Advanced</h4>
              <span className="text-6xl font-bold text-white">80$</span>
              <p className="mt-6 mb-6 text-gray-500 leading-loose">
                Nullam diam arcu, sodales quis convallis sit amet, sagittis
                varius ligula.
              </p>
              <ul className="mb-6 text-white">
                <li className="mb-2 flex">
                  <svg
                    className="mr-2 w-5 h-5 text-green-600"
                    xmlns="http://www.w3.org/2000/svg"
                    viewbox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>Vestibulum viverra</span>
                </li>
                <li className="mb-2 flex">
                  <svg
                    className="mr-2 w-5 h-5 text-green-600"
                    xmlns="http://www.w3.org/2000/svg"
                    viewbox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>Morbi mollis metus pretium</span>
                </li>
                <li className="mb-2 flex">
                  <svg
                    className="mr-2 w-5 h-5 text-green-600"
                    xmlns="http://www.w3.org/2000/svg"
                    viewbox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>Etiam lectus nunc, commodo</span>
                </li>
                <li className="mb-2 flex">
                  <svg
                    className="mr-2 w-5 h-5 text-green-600"
                    xmlns="http://www.w3.org/2000/svg"
                    viewbox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>Ut quam nisl mollis id pretium</span>
                </li>
                <li className="mb-2 flex">
                  <svg
                    className="mr-2 w-5 h-5 text-green-600"
                    xmlns="http://www.w3.org/2000/svg"
                    viewbox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>Suspendisse bibendum</span>
                </li>
              </ul>
              <a
                className="inline-block text-center py-2 px-4 w-full rounded-xl rounded-t-xl bg-customPrimary hover:bg-green-700 text-white font-bold leading-loose transition duration-200 mt-8"
                href="#"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
