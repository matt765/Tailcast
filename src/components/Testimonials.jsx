import { QuoteIcon } from "../assets/icons/QuoteIcon";
import testimonial1 from "../assets/images/testimonial1.png";
import testimonial2 from "../assets/images/testimonial2.png";
import testimonial3 from "../assets/images/testimonial3.png";

import { motion } from "framer-motion";

export const Testimonials = () => (
  <section className="w-full flex justify-center pt-10 mb-32 bg-customDarkBg2">
    <div className="flex flex-col w-3/5 justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <div className="custom-block-subtitle text-center mb-6">
          Lorem Ipsum
        </div>
        <div className="custom-block-big-title text-center mb-16">
          People like you love our product
        </div>

        <div className="flex gap-10">
          <div className="w-1/3 custom-border-gray-darker rounded-xl bg-customDarkBg3 flex flex-col px-6 py-4">
            <div className="flex mb-2">
              <QuoteIcon />
            </div>
            <div className="custom-content-text-white">
              “It’s awesome to be able to see such an intuitive application that
              suits our needs perfectly. We started using Featurebase for Tokun
              because we wanted to have a platform that can easily show to our
              customers what we’re working on, as well as give them the freedom
              to suggest features and vote on it.”
            </div>
            <div className="flex mt-8 mb-4">
              <img src={testimonial1} alt="" width="45px" />
              <div className="flex flex-col ml-4">
                <div className="custom-content-text-white font-medium">
                  John Watkins
                </div>
                <div className="custom-content-text-gray">
                  Founder of BuyerDash
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/3 custom-border-gray-darker rounded-xl bg-customDarkBg3 flex flex-col px-6 py-4">
            <div className="flex mb-2">
              <QuoteIcon />
            </div>
            <div className="custom-content-text-white">
              “It’s awesome to be able to see such an intuitive application that
              suits our needs perfectly. We started using Featurebase for Tokun
              because we wanted to have a platform that can easily show to our
              customers what we’re working on, as well as give them the freedom
              to suggest features and vote on it.”
            </div>
            <div className="flex mt-8 mb-4">
              <img src={testimonial2} alt="" width="45px" />
              <div className="flex flex-col ml-4">
                <div className="custom-content-text-white font-medium">
                  John Watkins
                </div>
                <div className="custom-content-text-gray">
                  Founder of BuyerDash
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/3 custom-border-gray-darker rounded-xl bg-customDarkBg3 flex flex-col px-6 py-4">
            <div className="flex mb-2">
              <QuoteIcon />
            </div>
            <div className="custom-content-text-white">
              “It’s awesome to be able to see such an intuitive application that
              suits our needs perfectly. We started using Featurebase for Tokun
              because we wanted to have a platform that can easily show to our
              customers what we’re working on, as well as give them the freedom
              to suggest features and vote on it.”
            </div>
            <div className="flex mt-8 mb-4">
              <img src={testimonial3} alt="" width="45px" />
              <div className="flex flex-col ml-4">
                <div className="custom-content-text-white font-medium">
                  John Watkins
                </div>
                <div className="custom-content-text-gray">
                  Founder of BuyerDash
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);
