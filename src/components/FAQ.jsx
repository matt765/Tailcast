import { useState } from "react";
import { motion } from "framer-motion";

const FAQData = [
  {
    question: "What is well severance, and why should I be concerned about it?",
    answer:
      "Well severance occurs when The Texas Railroad Commission shuts in or seals a well due to violations of statutes, rules, permits, or orders. This action can halt production and lead to significant financial losses, making it crucial for operators to stay compliant and avoid severance actions.",
  },
  {
    question: "How do I sign up?",
    answer:
      "Click on the 'Get Started' button on the top of this page and we'll reach out right away.",
  },
  {
    question: "What time does the report get delivered to me?",
    answer:
      "We deliver the report around 7.00am CST every day right to your inbox.",
  },
  {
    question: "How does receiving immediate notifications benefit our compliance efforts?",
    answer:
      "Receiving immediate notifications through our service, as opposed to waiting for traditional certified mail, significantly enhances your ability to respond swiftly and effectively to potential compliance issues. No more running the query manually, worrying about the mail on vacation, or waiting at the post office. Simply subscribe and check your email and you're good to go.",
  },
  {
    question: "What's your refund policy?",
    answer:
      "We offer a 30-day money-back guarantee . If you're not satisfied with our service, simply contact our support team within 30 days of purchase for a full refund.",
  },
  {
    question: "What kind of alerts and updates does your service provide?",
    answer:
      "We deliver notifications regarding any operation actions that may violate statutes, rules, or commission orders. This includes, but is not limited to, Delinquent H-10 filings, fee dues, and any operational activities that need immediate attention to prevent severance. Right now, we only work on delivering you Texas Railroad Commission notifications.",
  },
];

export const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="relative py-20 bg-customDarkBg2 overflow-hidden">
      <div className="absolute -top-10" id="FAQ" />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="relative z-10 container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <p className="mb-8 text-customSecondary text-center font-bold uppercase tracking-wider">
              Frequently Asked Questions
            </p>
            <h2 className="mb-16 text-4xl md:text-5xl text-white font-bold text-center">
              Have any questions?
            </h2>
            <div className="space-y-4">
              {FAQData.map((item, index) => (
                <FAQBox
                  key={index}
                  title={item.question}
                  content={item.answer}
                  isOpen={activeIndex === index}
                  onToggle={() => toggleFAQ(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

const FAQBox = ({ title, content, isOpen, onToggle }) => (
  <div
    className="bg-customDarkBg3 border border-customDarkBg3 rounded-lg shadow-lg cursor-pointer"
    onClick={onToggle}
  >
    <div className="px-6 py-4 flex justify-between items-center">
      <h3 className="text-lg md:text-xl text-white font-semibold">{title}</h3>
      <svg
        width="24px"
        height="24px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`text-customSecondary transition-transform duration-300 ${
          isOpen ? "rotate-180" : ""
        }`}
      >
        <path
          d="M6 9L12 15L18 9"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
    {isOpen && (
      <div className="px-6 py-4">
        <p className="text-customGrayText">{content}</p>
      </div>
    )}
  </div>
);