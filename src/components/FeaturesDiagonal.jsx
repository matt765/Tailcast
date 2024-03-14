import { motion } from "framer-motion";
import featuresdiagonal from "../assets/images/featuresdiagonal.jpg";

export const FeaturesDiagonal = () => {
  // Function to scroll to the Contact Us section
  const scrollToContactUs = () => {
    const contactUsSection = document.getElementById("contact-us");
    if (contactUsSection) {
      contactUsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Framer Motion variants for the section
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  // Framer Motion variants for the image
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -5 },
    visible: { opacity: 1, scale: 1, rotate: 0 },
  };

  return (
    <section className="lg:mb-16 w-full flex flex-col justify-center items-center bg-customDarkBg1 relative overflow-hidden">
      <div className="custom-shape-divider-bottom-1665696614 absolute bottom-0 left-0 right-0">
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
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="2xl:w-[1150px] xl:w-[1050px] md:w-4/5 flex justify-center bg-customDarkBg1 pt-12 lg:pt-24 pb-8 lg:pb-20 mx-auto lg:flex-row flex-col relative z-10"
      >
        <div className="w-3/4 lg:w-1/2 flex flex-col lg:mx-unset mx-auto">
          <span className="custom-block-subtitle text-customSecondary">
            Proactive Compliance Management
          </span>
          <h2 className="mt-10 mb-8 text-4xl lg:text-5xl custom-block-big-title text-white">
            Stay Ahead of Regulatory Challenges
          </h2>
          <p className="mb-16 text-customGrayText leading-loose">
            Our service empowers you with real-time alerts on potential compliance issues, ensuring you can address and resolve them promptly. Avoid well severance and maintain uninterrupted operations with our notification system.
          </p>
          <motion.div
            className="w-[210px] h-12 custom-button-colored mr-10 cursor-pointer"
            onClick={scrollToContactUs}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.div>
        </div>
        <div className="w-4/5 lg:w-1/2 lg:pl-16 flex justify-center mx-auto pt-16 lg:pt-0">
          <motion.img
            src={featuresdiagonal}
            alt="Features"
            className="rounded-xl custom-border-gray shadow-lg"
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
        </div>
      </motion.div>
      <div className="custom-shape-divider-top-1665696661 absolute top-0 left-0 right-0">
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