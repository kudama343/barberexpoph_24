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
          className="absolute mr-2  left-1/2 transform -translate-x-1/2 bottom-[33%] bg-white text-black 
                      px-2 rounded-2xl shadow-md hover:bg-gray-950 hover:text-white transition duration-300 
                      font-monument"
          style={{ width: '58%', height: '4%', fontSize: '1.6rem' }}>
          ENROLL HERE
        </button>
      </div>
    </div>
  );
};

export default MasterClassPage;
