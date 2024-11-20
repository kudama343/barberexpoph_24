'use client';

import NavigationBar from '../NavigationBar';

const EliteClassPage: React.FC = () => {
  const redirectToForm = () => {
    window.location.href =
      'https://docs.google.com/forms/d/e/1FAIpQLScSlhpxJU8wYOoKGzivK29vQaOdqmVR4eNL7fNlX4ex7GcP6A/viewform';
  };
  return (
    <div className="">
      
      <div className="">
        <div className="min-h-full w-full h-screen bg-contain bg-no-repeat bg-center bg-[url('/images/MobileView/MobileViewBG8.png')] sm:bg-[url('/images/EliteClass/EliteClassBG1.png')] flex flex-col items-center justify-center px-4 sm:px-8p">
        </div>
      </div>
      <div className="">
        <div className="min-h-full w-full h-screen bg-contain bg-no-repeat bg-center bg-[url('/images/MobileView/MobileViewBG9.png')] sm:bg-[url('/images/EliteClass/EliteClassBG2.png')] flex flex-col items-center justify-center px-4 sm:px-8p">
        </div>
      </div>
      <div className="">
        <div className="min-h-full w-full h-screen bg-contain bg-no-repeat bg-center bg-[url('/images/MobileView/MobileViewBG10.png')] sm:bg-[url('/images/EliteClass/EliteClassBG3.png')] flex flex-col items-center justify-center px-4 sm:px-8p">
        </div>
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
        <div className="min-h-full w-full h-screen bg-contain bg-no-repeat bg-center bg-[url('/images/MobileView/MobileViewBG12.png')] sm:bg-[url('/images/EliteClass/EliteClassBG5.png')] flex flex-col items-center justify-center px-4 sm:px-8p">
        </div>
      </div>
      <div className="">
        <div className="min-h-full w-full h-screen bg-contain bg-no-repeat bg-center bg-[url('/images/MobileView/MobileViewBG12.png')] sm:bg-[url('/images/EliteClass/EliteClassBG6.png')] flex flex-col items-center justify-center px-4 sm:px-8p">
        </div>
      </div>
      
    </div>
  );
};

export default EliteClassPage;
