import { useState } from 'react';
import { motion } from 'framer-motion';

export const ContactUs = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    try {
      const response = await fetch('https://formcarry.com/s/t84fP1_KPoq', {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' },
      });

      if (response.ok) {
        setFormSubmitted(true);
      } else {
        console.error('Form submission failed');
      }
    } catch (error) {
      console.error('There was an error submitting the form:', error);
    }
  };

  if (formSubmitted) {
    return (
      <section id="contact-us" className="w-full flex flex-col items-center justify-center py-12 bg-customDarkBg2">
        <h2 className="text-3xl font-bold text-white mb-8">Contact Us</h2>
        <div className="text-white text-center">
          <p>Thank you! We'll reach out within 24 hours to get you set up.</p>
          <p>Thanks for reaching out to LettersIQ.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="contact-us" className="w-full flex flex-col items-center justify-center py-12 bg-customDarkBg2">
      <h2 className="text-3xl font-bold text-white mb-8">Contact Us</h2>
      <form className="w-full max-w-lg space-y-6" onSubmit={handleSubmit}>
        <motion.input
          className="w-full bg-gray-700 text-white border border-gray-600 rounded-md py-3 px-4 leading-tight focus:outline-none focus:bg-gray-600"
          type="text"
          placeholder="Name"
          name="name"
          required
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        />
        <motion.input
          className="w-full bg-gray-700 text-white border border-gray-600 rounded-md py-3 px-4 leading-tight focus:outline-none focus:bg-gray-600"
          type="text"
          placeholder="Operator"
          name="operator"
          required
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        />
        <motion.input
          className="w-full bg-gray-700 text-white border border-gray-600 rounded-md py-3 px-4 leading-tight focus:outline-none focus:bg-gray-600"
          type="email"
          placeholder="Email"
          name="email"
          required
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        />
        <motion.input
          className="w-full bg-gray-700 text-white border border-gray-600 rounded-md py-3 px-4 leading-tight focus:outline-none focus:bg-gray-600"
          type="text"
          placeholder="Phone Number"
          name="phone"
          required
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        />
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <button
            className="bg-customPrimary hover:bg-customPrimaryDark text-white font-bold py-2 px-6 rounded-full transition duration-300 ease-in-out"
            type="submit"
          >
            Submit
          </button>
        </motion.div>
      </form>
    </section>
  );
};
