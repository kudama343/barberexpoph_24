'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const NavigationBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#1a1919] text-white fixed top-0 left-0 w-full z-50 shadow-md border-b-4 border-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-xl font-bold">
            <Link href="/">My Website</Link>
          </div>
          <div className="hidden md:flex space-x-4">
            <Link href="/" className="hover:text-gray-200">
              Home
            </Link>
            <Link href="/masterclass" className="hover:text-gray-200">
              Master Class
            </Link>
            <Link href="/eliteclass" className="hover:text-gray-200">
              Elite Class
            </Link>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="focus:outline-none p-2 rounded-md hover:bg-blue-500"
              aria-label="Toggle Menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white-700">
          <Link
            href="/"
            className="block px-4 py-5 hover:bg-[#7d7d7d]"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/masterclass"
            className="block px-4 py-5 hover:bg-[#7d7d7d]"
            onClick={() => setIsOpen(false)}
          >
            Master Class
          </Link>
          <Link
            href="/eliteclass"
            className="block px-4 py-5 hover:bg-[#7d7d7d]"
            onClick={() => setIsOpen(false)}
          >
            Elite Class
          </Link>
        </div>
      )}
    </nav>
  );
};

export default NavigationBar;
