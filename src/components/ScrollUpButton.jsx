import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const ScrollUpButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
    return () => {
      window.removeEventListener("scroll", toggleVisible);
    };
  }, []);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setIsVisible(true);
    } else if (scrolled <= 300) {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      {isVisible && (
        <motion.div
          className="w-12 h-12 fixed bottom-6 right-6 custom-border-gray rounded-full bg-customDarkBg2 hover:bg-customDarkBg3 cursor-pointer flex justify-center items-center transition z-50"
          onClick={scrollToTop}
          initial="hidden"
          animate="visible"
          variants={buttonVariants}
          transition={{ duration: 0.3 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <motion.svg
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            width="35px"
            height="35px"
            viewBox="0 0 20 20"
            initial={{ rotate: 180 }}
            animate={{ rotate: 0 }}
            transition={{ duration: 0.3 }}
          >
            <path
              d="M4.16732 12.5L10.0007 6.66667L15.834 12.5"
              stroke="rgb(99, 102, 241)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </motion.svg>
        </motion.div>
      )}
    </>
  );
};