import React from "react";
import '../styles/globals.css';
import { InformationCircleIcon, ArrowPathIcon } from '@heroicons/react/24/outline';

function Header() {
  return (
    <div className="flex flex-col space-y-2">
  <div className="flex justify-between items-center">
    <div className="flex items-center space-x-2">
      <h3 className="text-gray-500 font-medium text-sm">Total Customers</h3>
      <button className="bg-gray-100 p-1 rounded-lg text-gray-400 hover:text-gray-600 w-8 h-8 flex items-center justify-center">
        <InformationCircleIcon className="w-5 h-5" />
      </button>
    </div>
    <button className="border border-gray-300 rounded-lg w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600">
      <ArrowPathIcon className="w-5 h-5" />
    </button>
  </div>
  <h1 className="text-4xl font-bold">524</h1>
</div>

  );
};

export default Header;