import React from "react";
import '../styles/globals.css';

function Footer() {
  return(
    <div className="flex justify-between items-center mt-4 text-sm text-gray-500 border-t border-gray-300 pt-2">
    <p>Oct 2 - Oct 8, 2023</p>
    <div className="flex items-center space-x-1 text-green-500">
      <p>+5.2%</p>
      <svg
        className="w-4 h-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5 10l7-7m0 0l7 7M12 3v18"
        />
      </svg>
    </div>
  </div>
  );
};

export default Footer;