'use client';

import NavigationBar from '../NavigationBar';

const EliteClassPage: React.FC = () => {
  return (
    <div className="">
      <NavigationBar />
      <div className="pt-10">
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
        <div className="min-h-full w-full h-screen bg-contain bg-no-repeat bg-center bg-[url('/images/MobileView/MobileViewBG11.png')] sm:bg-[url('/images/EliteClass/EliteClassBG4.png')] flex flex-col items-center justify-center px-4 sm:px-8p">
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
      <div className="">
        <div className="min-h-full w-full h-screen  flex flex-col items-center justify-center px-4 sm:px-8p relative ">
            {/* Container for the buttons */}
            <div className="absolute flex flex-col space-y-4">

              <div className="min-h-full w-full h-screen bg-contain bg-no-repeat bg-center bg-[url('/images/Logo.png')]  flex flex-col items-center justify-center px-4 sm:px-8p">
              <button className="bg-white text-black py-5 px-10 rounded-3xl shadow-md text-xs hover:bg-gray-700 hover:text-white transition duration-300 sm:text-xl mt-40">
                ENROLL HERE
              </button>
              </div>
              
            </div>
        </div>
      </div>
    </div>
  );
};

export default EliteClassPage;
