import React from 'react';
import { motion } from "framer-motion";
import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";

const pricingData = [
  "Daily report delivered to your inbox",
  "Remarks and contents of every violation",
  "No more waiting on the mailman"
];

export const Pricing = () => {
  // Animation variants for the feature list items
  const listItemVariants = {
    hidden: { x: -10, opacity: 0 },
    visible: { x: 0, opacity: 1 }
  };

  // Hover animation for the "Get Started" button
  const buttonHoverVariants = {
    hover: {
      scale: 1.05,
      transition: { type: 'spring', stiffness: 300 }
    }
  };

  return (
    <section id="pricing" className="w-screen flex justify-center bg-customDarkBg2 relative">
      <div className="pb-20 pt-12 bg-customDarkBg2 container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="max-w-2xl mx-auto text-center">
            <span className="custom-block-subtitle">Transparent Pricing</span>
            <h2 className="mt-6 mb-6 text-4xl lg:text-5xl font-bold text-white">
              Simple Pricing
            </h2>
            <p className="text-customGrayText">
              <span className="price-highlight">$4 per lease per month</span>
            </p>
            <p className="mt-4 text-customGrayText">
              No hidden fees, no annual commitment.
            </p>
          </div>
          <div className="flex flex-wrap justify-center mt-10">
            <div className="w-full sm:w-[450px] px-4">
              <div className="p-8 bg-customDarkBg3 rounded-3xl">
                <motion.ul className="mb-6 text-white">
                  {pricingData.map((text, index) => (
                    <motion.li
                      className="mb-4 flex items-center"
                      key={index}
                      variants={listItemVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <CheckArrowIcon />
                      <span>{text}</span>
                    </motion.li>
                  ))}
                </motion.ul>
                <motion.a
                  href="#contact-us"
                  className="inline-block text-center py-2 px-4 w-full rounded-xl custom-button-colored font-bold leading-loose mt-8 cursor-pointer"
                  variants={buttonHoverVariants}
                  whileHover="hover"
                >
                  Get Started
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <style jsx>{`
        .price-highlight {
          background-color: #ffcc00;
          color: #000;
          padding: 0.1rem 0.5rem;
          border-radius: 0.5rem;
        }
      `}</style>
    </section>
  );
};
