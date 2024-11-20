'use client';

import NavigationBar from '../NavigationBar';
import Image from 'next/image';

const MasterClassPage: React.FC = () => {
  const redirectToForm = () => {
    window.location.href =
      'https://docs.google.com/forms/d/e/1FAIpQLSeE4alSBzgY6CuA-12PSK7h0pxztByl4sOcuzLE9M8eNMQ_Ng/viewform';
  };

  return (
    <div>
      <div className="">
        <div className="min-h-full w-full h-screen bg-contain bg-no-repeat bg-center bg-[url('/images/MobileView/MobileViewBG3.png')] sm:bg-[url('/images/MasterClass/MasterClassBG1.png')] flex flex-col items-center justify-center px-4 sm:px-8p"></div>
      </div>
      <div className="">
        <div className="min-h-full w-full h-screen bg-contain bg-no-repeat bg-center bg-[url('/images/MobileView/MobileViewBG4.png')] sm:bg-[url('/images/MasterClass/MasterClassBG2.png')] flex items-center justify-center px-4 sm:px-8"></div>
      </div>
      <div className="">
        <div className="min-h-full w-full h-screen bg-contain bg-no-repeat bg-center bg-[url('/images/MobileView/MobileViewBG5.png')] sm:bg-[url('/images/MasterClass/MasterClassBG3.png')] flex items-center justify-center px-4 sm:px-8"></div>
      </div>
      <div className="">
        <div className="min-h-full w-full h-screen bg-contain bg-no-repeat bg-center bg-[url('/images/MobileView/MobileViewBG6.png')] sm:bg-[url('/images/MasterClass/MasterClassBG4.png')] flex items-center justify-center px-4 sm:px-8"></div>
      </div>
      <div className="">
        <div
          className="min-h-full w-full h-screen bg-contain bg-no-repeat bg-center bg-[url('/images/MobileView/MobileViewBG7.png')] 
                        sm:bg-[url('/images/MasterClass/MasterClassBG5.png')] flex items-center justify-center px-4 sm:px-8">
          <button
            onClick={redirectToForm}
            className="bg-white text-black py-3 px-6 rounded-lg shadow-md hover:bg-gray-950 hover:text-white transition duration-300">
            ENROLL HERE
          </button>
        </div>
      </div>
      <div className="">
        <div className="min-h-full w-full h-screen bg-contain bg-no-repeat bg-center bg-[url('/images/MobileView/MobileViewBG8.png')] sm:bg-[url('/images/MasterClass/MasterClassBG6.png')] flex items-center justify-center px-4 sm:px-8"></div>
      </div>
      
    </div>
  );
};

export default MasterClassPage;
