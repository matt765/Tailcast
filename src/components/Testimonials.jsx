import { motion } from "framer-motion";
import { QuoteIcon } from "../assets/icons/QuoteIcon";

const testimonialsData = [
  {
    customerName: "John Smith",
    customerTitle: "Founder of Barnett Exploration",
    content: "LettersIQ has been a game-changer for our compliance management. The real-time notifications and comprehensive monitoring have helped us stay ahead of potential issues and avoid costly severance actions. The report is very easy to parse through and see what's relevant, and the peace of mind it provides is invaluable.",
  },
  {
    customerName: "Michael Thompson",
    customerTitle: "Head of Regulatory",
    content: "Since implementing LettersIQ, we've streamlined our compliance processes and significantly reduced the risk of violations. The detailed reports and customizable alerts keep us informed and in control. It's a must-have tool for any operator looking to maintain compliance and protect their operations.",
  },
  {
    customerName: "John Chen",
    customerTitle: "Lease Operator",
    content: "LettersIQ has revolutionized the way we approach compliance. The proactive severance prevention features have saved us time, money, and headaches. The platform's ease of use and exceptional customer support have made it an essential part of our daily operations. We couldn't be happier with the results.",
  },
];

export const Testimonials = () => (
  <section className="w-full flex justify-center pt-10 mb-16 lg:mb-32 bg-customDarkBg2 relative">
    <div className="absolute -top-16" id="feedback" />
    <div className="flex flex-col w-full lg:w-[1150px] justify-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="custom-block-subtitle text-center mb-6">
          Testimonials
        </div>
        <div className="custom-block-big-title text-center mb-16 px-8 sm:px-24 md:px-48">
          What Our Customers Say About LettersIQ
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-5 xl:gap-10 px-6 xl:px-0">
          {testimonialsData.map((testimonial, index) => (
            <motion.div
              key={`${testimonial.customerName}-${index}`}
              className="w-full custom-border-gray-darker rounded-xl bg-customDarkBg3 flex flex-col p-8"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <div className="flex mb-4">
                <QuoteIcon className="text-customSecondary" />
              </div>
              <div className="custom-content-text-white mb-8">
                "{testimonial.content}"
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-customDarkBg2 flex items-center justify-center text-white text-xl font-bold">
                  {testimonial.customerName.charAt(0)}
                </div>
                <div className="flex flex-col ml-4">
                  <div className="custom-content-text-white font-medium">
                    {testimonial.customerName}
                  </div>
                  <div className="custom-content-text-gray">
                    {testimonial.customerTitle}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);