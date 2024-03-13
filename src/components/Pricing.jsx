import React from 'react';
import { useState } from "react";
import { motion } from "framer-motion";
import { InvitationModal } from "./InvitationModal";
import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";

const pricingData = [
  "Daily report delivered to your inbox",
  "Remarks and contents of every violation",
  "No more waiting on mailman"
];

export const Pricing = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
                <ul className="mb-6 text-white">
                  {pricingData.map((text, index) => (
                    <li className="mb-4 flex" key={index}>
                      <CheckArrowIcon />
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>
                <div
                  className="inline-block text-center py-2 px-4 w-full rounded-xl custom-button-colored font-bold leading-loose mt-8 cursor-pointer"
                  onClick={() => setIsModalOpen(true)}
                >
                  Get Started
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      {isModalOpen && (
        <InvitationModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
      )}
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