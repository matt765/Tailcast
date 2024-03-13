import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-customDarkBg1 text-gray-400 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center mb-8 md:mb-0">
            <p className="text-sm flex items-center justify-center">
              Made with <span className="text-red-500 mx-1">&hearts;</span> in Austin, TX
            </p>
          </div>
          <div className="text-center">
            <a
              href="/contact"
              className="inline-block bg-customPrimary hover:bg-customPrimaryDark text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
        <hr className="border-gray-700 my-8" />
        <div className="text-center">
          <p className="text-sm">
            LettersIQ is not affiliated with the Texas Railroad Commission
          </p>
          <p className="text-xs mt-2">&copy; {new Date().getFullYear()} LettersIQ. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};