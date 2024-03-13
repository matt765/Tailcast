import { useState } from 'react';

export const ContactUs = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    try {
      const response = await fetch('https://formcarry.com/s/t84fP1_KPoq', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json',
        },
      });

      if (response.ok) {
        console.log('Form submitted');
        setFormSubmitted(true);
      } else {
        console.error('Form submission failed');
        // Notify user of failure
      }
    } catch (error) {
      console.error('There was an error submitting the form:', error);
      // Notify user of error
    }
  };

  return (
    <section id="contact-us" className="w-full flex flex-col items-center justify-center py-12 bg-customDarkBg2">
      <h2 className="text-3xl font-bold text-white mb-8">Contact Us</h2>
      {formSubmitted ? (
        <div className="text-white text-center">
          <p>Thank you! We'll reach out within 24 hours to get you set up.</p>
          <p>Thanks for reaching out to LettersIQ.</p>
        </div>
      ) : (
        <form className="w-full max-w-lg space-y-6" onSubmit={handleSubmit}>
          <input
            className="w-full bg-gray-700 text-white border border-gray-600 rounded-md py-3 px-4 leading-tight focus:outline-none focus:bg-gray-600"
            type="text"
            placeholder="Name"
            name="name"
            required
          />
          <input
            className="w-full bg-gray-700 text-white border border-gray-600 rounded-md py-3 px-4 leading-tight focus:outline-none focus:bg-gray-600"
            type="text"
            placeholder="Operator"
            name="operator"
            required
          />
          <input
            className="w-full bg-gray-700 text-white border border-gray-600 rounded-md py-3 px-4 leading-tight focus:outline-none focus:bg-gray-600"
            type="email"
            placeholder="Email"
            name="email"
            required
          />
          <input
            className="w-full bg-gray-700 text-white border border-gray-600 rounded-md py-3 px-4 leading-tight focus:outline-none focus:bg-gray-600"
            type="text"
            placeholder="Phone Number"
            name="phone"
            required
          />
          <div className="flex justify-center">
            <button
              className="bg-customPrimary hover:bg-customPrimaryDark text-white font-bold py-2 px-6 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      )}
    </section>
  );
};
