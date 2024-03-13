import { motion } from "framer-motion";
import { useState } from "react";
import { InvitationModal } from "./InvitationModal";
import featuresdiagonal from "../assets/images/featuresdiagonal.jpg";

export const FeaturesDiagonal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => setIsModalOpen(true);

  return (
    <section aria-labelledby="features-title" className="lg:mb-16 w-full flex flex-col justify-center items-center bg-customDarkBg1">
      {/* Top Divider */}
      <div className="custom-shape-divider-bottom-1665696614">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="custom-bg-dark2"
          aria-hidden="true"
        >
          <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="custom-bg-dark1"></path>
        </svg>
      </div>
      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="2xl:w-[1150px] xl:w-[1050px] md:w-4/5 flex justify-center bg-customDarkBg1 pt-12 lg:pt-24 pb-8 lg:pb-20 mx-auto lg:flex-row flex-col">
          <div className="w-3/4 lg:w-1/2 flex flex-col lg:mx-unset mx-auto">
            <h2 id="features-title" className="mt-10 mb-8 text-4xl lg:text-5xl custom-block-big-title">
              Stay Ahead of Regulatory Challenges
            </h2>
            <p className="mb-16 text-customGrayText leading-loose">
              Our service empowers you with real-time alerts on potential compliance issues, ensuring prompt resolution. Avoid well severance and maintain uninterrupted operations with our advanced notification system.
            </p>
            <button
              className="w-[210px] h-12 custom-button-colored mr-10 cursor-pointer"
              onClick={handleModalOpen}
              aria-controls="invitation-modal"
              aria-expanded={isModalOpen}
            >
              Get Started
            </button>
          </div>
          <div className="w-4/5 lg:w-1/2 lg:pl-16 flex justify-center mx-auto pt-16 lg:pt-0">
            <motion.img
              src={featuresdiagonal}
              alt="Features"
              className="rounded-xl custom-border-gray"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              loading="lazy"
            />
          </div>
        </div>
      </motion.div>
      {/* Bottom Divider */}
      <div className="custom-shape-divider-top-1665696661 w-full">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="custom-bg-dark2"
          aria-hidden="true"
        >
          <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="custom-bg-dark1"></path>
        </svg>
      </div>
      {/* Modal */}
      {isModalOpen && (
        <InvitationModal id="invitation-modal" isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
      )}
    </section>
  );
};
