import { Hero } from "./Hero.jsx";
import { Navbar } from "./Navbar.jsx";
import { Features1 } from "./Features1.jsx";
import { Features2 } from "./Features2.jsx";
import { Testimonials } from "./Testimonials.jsx";
import { FeaturesDiagonal } from "./FeaturesDiagonal.jsx";
import { Pricing } from "./Pricing.jsx";
import { FAQ } from "./FAQ.jsx";
import { Brands } from "./Brands.jsx";
import { Divider } from "./Divider";
import { Footer } from "./Footer.jsx";

import { motion } from "framer-motion";

export const Test = () => {
  return (
    <>
      <motion.div
        animate={{
          rotate: [0, 360],
        }}
        transition={{ duration: 1, repeat: Infinity, delay: 0.5 }}
      >
        <Navbar />
      </motion.div>
      <motion.div
        animate={{
          rotate: [0, 360],
        }}
        transition={{ duration: 1, repeat: Infinity, delay: 0.5 }}
      >
        <Hero />
      </motion.div>
      <motion.div
        animate={{
          rotate: [0, 360],
        }}
        transition={{ duration: 1, repeat: Infinity, delay: 0.5 }}
      >
        <Features1 />
        <Divider />
      </motion.div>
      <motion.div
        animate={{
          rotate: [0, 360],
        }}
        transition={{ duration: 1, repeat: Infinity, delay: 0.5 }}
      >
        <Features2 />
      </motion.div>
      <motion.div
        animate={{
          rotate: [0, 360],
        }}
        transition={{ duration: 1, repeat: Infinity, delay: 0.5 }}
      >
        <Testimonials />
      </motion.div>
      <motion.div
        animate={{
          rotate: [0, 360],
        }}
        transition={{ duration: 1, repeat: Infinity, delay: 0.5 }}
      >
        <FeaturesDiagonal />
      </motion.div>
      <motion.div
        animate={{
          rotate: [0, 360],
        }}
        transition={{ duration: 1, repeat: Infinity, delay: 0.5 }}
      >
        <Pricing />
      </motion.div>
      <motion.div
        animate={{
          rotate: [0, 360],
        }}
        transition={{ duration: 1, repeat: Infinity, delay: 0.5 }}
      >
        <Brands />
      </motion.div>
      <motion.div
        animate={{
          rotate: [0, 360],
        }}
        transition={{ duration: 1, repeat: Infinity, delay: 0.5 }}
      >
        <FAQ />
      </motion.div>
      <motion.div
        animate={{
          rotate: [0, 360],
        }}
        transition={{ duration: 1, repeat: Infinity, delay: 0.5 }}
      >
        <Footer />
      </motion.div>
    </>
  );
};
