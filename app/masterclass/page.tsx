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
        <div className="min-h-full w-full h-screen bg-cover bg-no-repeat bg-center bg-[url('/images/MasterClass/MobileV6.png')] sm:bg-[url('/images/MasterClass/MasterClassBG1.png')] flex flex-col items-center justify-center px-4 sm:px-8p"></div>
        <div className="min-h-full w-full h-screen bg-cover bg-no-repeat bg-center bg-[url('/images/MasterClass/MobileV7.png')] sm:bg-[url('/images/MasterClass/MasterClassBG2.png')] flex items-center justify-center px-4 sm:px-8"></div>
        <div className="min-h-full w-full h-screen bg-cover bg-no-repeat bg-center bg-[url('/images/MasterClass/MobileV8.png')] sm:bg-[url('/images/MasterClass/MasterClassBG3.png')] flex items-center justify-center px-4 sm:px-8"></div>
        <div className="min-h-full w-full h-screen bg-cover bg-no-repeat bg-center bg-[url('/images/MasterClass/MobileV9.png')] sm:bg-[url('/images/MasterClass/MasterClassBG4.png')] flex items-center justify-center px-4 sm:px-8"></div>
        <div className="min-h-full w-full h-screen bg-cover bg-no-repeat bg-center bg-[url('/images/MasterClass/MobileV10.png')] sm:bg-[url('/images/MasterClass/MasterClassBG1.png')] flex flex-col items-center justify-center px-4 sm:px-8p"></div>
        <div className="min-h-full w-full h-screen bg-cover bg-no-repeat bg-center bg-[url('/images/MasterClass/MobileV11.png')] sm:bg-[url('/images/MasterClass/MasterClassBG2.png')] flex items-center justify-center px-4 sm:px-8"></div>
        <div className="min-h-full w-full h-screen bg-cover bg-no-repeat bg-center bg-[url('/images/MasterClass/MobileV12.png')] sm:bg-[url('/images/MasterClass/MasterClassBG3.png')] flex items-center justify-center px-4 sm:px-8"></div>
        </div> 
      <div className="">
        <div
          //className="min-h-full w-full h-screen bg-contain bg-no-repeat bg-center bg-[url('/images/MobileView/MobileViewBG7.png')] 
          //            sm:bg-[url('/images/MasterClass/MasterClassBG5.png')] flex items-center justify-center px-4 sm:px-8">
          className="">
          <button
            onClick={redirectToForm}
            className="bg-white text-black py-3 px-6 rounded-lg shadow-md hover:bg-gray-950 hover:text-white transition duration-300">
            ENROLL HERE
          </button>
        </div>
      </div>
      
    </div>
  );
};

export default MasterClassPage;
