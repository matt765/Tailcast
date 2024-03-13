import React from 'react';
import wellheadiqLogo from '../assets/icons/wellheadiq_logo.png'; // Adjust the import path as needed

export const Footer = () => {
  return (
    <footer className="bg-customDarkBg1 text-gray-400 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center mb-8 md:mb-0 flex items-center">
            <p className="text-sm">
              Made with <span className="text-red-500 mx-1">&hearts;</span> in Austin, TX.
            </p>
          </div>
          <div className="text-center flex items-center">
            <span className="text-sm mr-2">Powered by</span>
            <a href="https://www.wellheadiq.com/" target="_blank" rel="noopener noreferrer">
              <img src={wellheadiqLogo} alt="WellheadIQ" className="h-6" />
            </a>
          </div>
        </div>
        <hr className="border-gray-700 my-8" />
        <div className="text-center">
          <p className="text-sm">
            LettersIQ is not affiliated with the Texas Railroad Commission.
          </p>
          <p className="text-xs mt-2">&copy; {new Date().getFullYear()} LettersIQ. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
