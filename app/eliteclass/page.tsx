'use client';

import NavigationBar from '../NavigationBar';

const EliteClassPage: React.FC = () => {
  const redirectToForm = () => {
    window.location.href =
      'https://docs.google.com/forms/d/e/1FAIpQLScSlhpxJU8wYOoKGzivK29vQaOdqmVR4eNL7fNlX4ex7GcP6A/viewform';
  };
  return (
    <div className="flex flex-col">
      <div className="min-h-full w-full h-screen bg-cover bg-no-repeat bg-center bg-[url('/images/EliteClass/MobileV14.png')] sm:bg-[url('/images/EliteClass/EliteClassBG1.png')] flex flex-col items-center justify-center px-4 sm:px-8p"></div>
      <div className="min-h-full w-full h-screen bg-cover bg-no-repeat bg-center bg-[url('/images/EliteClass/MobileV15.png')] sm:bg-[url('/images/EliteClass/EliteClassBG2.png')] flex flex-col items-center justify-center px-4 sm:px-8p"></div>
      <div className="min-h-full w-full h-screen bg-cover bg-no-repeat bg-center bg-[url('/images/EliteClass/MobileV16.png')] sm:bg-[url('/images/EliteClass/EliteClassBG3.png')] flex flex-col items-center justify-center px-4 sm:px-8p"></div>
      <div className="min-h-full w-full h-screen bg-cover bg-no-repeat bg-center bg-[url('/images/EliteClass/MobileV17.png')] sm:bg-[url('/images/EliteClass/EliteClassBG1.png')] flex flex-col items-center justify-center px-4 sm:px-8p"></div>
      <div className="min-h-full w-full h-screen bg-cover bg-no-repeat bg-center bg-[url('/images/EliteClass/MobileV18.png')] sm:bg-[url('/images/EliteClass/EliteClassBG2.png')] flex flex-col items-center justify-center px-4 sm:px-8p"></div>
      <div className="min-h-full w-full h-screen bg-cover bg-no-repeat bg-center bg-[url('/images/EliteClass/MobileV19.png')] sm:bg-[url('/images/EliteClass/EliteClassBG3.png')] flex flex-col items-center justify-center px-4 sm:px-8p"></div>
      <div className="min-h-full w-full h-screen bg-cover bg-no-repeat bg-center bg-[url('/images/EliteClass/MobileV20.png')] sm:bg-[url('/images/EliteClass/EliteClassBG2.png')] flex flex-col items-center justify-center px-4 sm:px-8p"></div>
      <div className="min-h-full w-full h-screen bg-cover bg-no-repeat bg-center bg-[url('/images/EliteClass/MobileV21.png')] sm:bg-[url('/images/EliteClass/EliteClassBG3.png')] flex flex-col items-center px-4 sm:px-8p relative">
        <button
          onClick={redirectToForm}
          className="absolute ml-2 bottom-[2.95in]  bg-white text-black py-[9px] px-[92px] rounded-[16px] shadow-md hover:bg-gray-950 hover:text-white transition duration-300">
          ENROLL HERE
        </button>
      </div>
    </div>
  );
};

export default EliteClassPage;