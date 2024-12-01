'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const HomePage: React.FC = () => {
  const [screenWidth, setScreenWidth] = useState<number | null>(null);
  const [screenHeight, setScreenHeight] = useState<number | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setScreenWidth(window.innerWidth);
        setScreenHeight(window.innerHeight);
      };

      setScreenWidth(window.innerWidth); // Initial width
      setScreenHeight(window.innerHeight); // Initial height

      window.addEventListener('resize', handleResize);

      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  const isMobile = screenWidth !== null && screenWidth < 768;

  // Dynamic button spacing based on screen height
  const buttonSpacing = screenHeight ? screenHeight * 0.08 : 50;

  return (
    <div className="flex flex-col">
      <div className="min-h-full w-full h-screen sm:bg-contain bg-cover bg-no-repeat bg-center bg-black bg-[url('/images/Homepage/MobileV1.png')] flex flex-col items-center justify-center px-1"></div>
      <div className="min-h-full w-full h-screen sm:bg-contain bg-cover bg-no-repeat bg-center bg-black bg-[url('/images/Homepage/MobileV2.png')] flex flex-col items-center justify-center px-1"></div>
      <div className="min-h-full w-full h-screen sm:bg-contain bg-cover bg-no-repeat bg-center bg-black bg-[url('/images/Homepage/MobileV3.png')] flex flex-col items-center justify-center px-1"></div>
      <div className="min-h-full w-full h-screen sm:bg-contain bg-cover bg-no-repeat bg-center bg-black bg-[url('/images/Homepage/MobileV5_2.png')] flex flex-col items-center justify-center px-1 relative">
        <Link
          href="/"
          className={`absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center rounded-3xl shadow-md text-center transition duration-300
            ${isMobile ? 'w-[80%] h-[62px] text-[17px] py-3' : 'w-[385px] h-[62px] text-[20px] py-3'}
            bg-[#3a3a3a] text-white hover:bg-gray-950 hover:text-white whitespace-nowrap`}
          style={{
            bottom: `calc(33% + ${buttonSpacing}px)`,
            letterSpacing: '4px',
          }}
        >
          EXCLUSIVE WORKSHOPS:
        </Link>
        <Link
          href="/masterclass"
          className={`absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center rounded-3xl shadow-md text-center transition duration-300 
            ${isMobile ? 'w-[80%] h-[62px] text-[16px] py-3' : 'w-[385px] h-[62px] text-[18px] py-3'}
            bg-white text-black hover:bg-gray-950 hover:text-white`}
          style={{
            fontWeight: 'bold',
            bottom: `calc(23% + ${buttonSpacing}px)`,
            letterSpacing: '1px',
          }}
        >
          LOOK AND LEARN HANDS-ON MASTER CLASS
        </Link>
        <Link
          href="/eliteclass"
          className={`absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center rounded-3xl shadow-md text-center transition duration-300 font-monserrat-bold
            ${isMobile ? 'w-[80%] h-[62px] text-[16px] py-3' : 'w-[385px] h-[62px] text-[18px] py-3'}
            bg-white text-black hover:bg-gray-950 hover:text-white whitespace-nowrap`}
          style={{
            fontWeight: 'bold',
            bottom: `calc(13% + ${buttonSpacing}px)`,
            letterSpacing: '1px',
          }}
        >
          IN-DEPTH PRIVATE ELITE CLASS
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
