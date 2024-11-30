'use client';

import NavigationBar from '../NavigationBar';
import Image from 'next/image';

const MasterClassPage: React.FC = () => {
  const redirectToForm = () => {
    window.location.href =
      'https://docs.google.com/forms/d/e/1FAIpQLSeE4alSBzgY6CuA-12PSK7h0pxztByl4sOcuzLE9M8eNMQ_Ng/viewform';
  };

  return (
      <div className="flex flex-col">
        <div className="min-h-full w-full h-screen bg-contain bg-no-repeat bg-center bg-black bg-[url('/images/MasterClass/MobileV6.png')] flex flex-col items-center justify-center px-4 "></div>
        <div className="min-h-full w-full h-screen bg-contain bg-no-repeat bg-center bg-black bg-[url('/images/MasterClass/MobileV7.png')] flex flex-col items-center justify-center px-4 "></div>
        <div className="min-h-full w-full h-screen bg-contain bg-no-repeat bg-center bg-black bg-[url('/images/MasterClass/MobileV8.png')] flex flex-col items-center justify-center px-4 "></div>
        <div className="min-h-full w-full h-screen bg-contain bg-no-repeat bg-center bg-black bg-[url('/images/MasterClass/MobileV9.png')] flex flex-col items-center justify-center px-4 "></div>
        <div className="min-h-full w-full h-screen bg-contain bg-no-repeat bg-center bg-black bg-[url('/images/MasterClass/MobileV10.png')] flex flex-col items-center justify-center px-4 "></div>
        <div className="min-h-full w-full h-screen bg-contain bg-no-repeat bg-center bg-black bg-[url('/images/MasterClass/MobileV11.png')] flex flex-col items-center justify-center px-4 "></div>
        <div className="min-h-full w-full h-screen bg-contain bg-no-repeat bg-center bg-black bg-[url('/images/MasterClass/MobileV12.png')] flex flex-col items-center px-4  relative">
        <button
          onClick={redirectToForm}
          className="absolute mr-2  left-1/2 transform -translate-x-1/2 bottom-[32%] bg-white text-black 
                      py-1 rounded-2xl shadow-md hover:bg-[#3a3a3a] hover:text-white transition duration-300 
                      font-monument text-xl"
          style={{ width: '230px', height: '35px' }}>
          ENROLL HERE
        </button>
      </div>
    </div>
  );
};

export default MasterClassPage;
