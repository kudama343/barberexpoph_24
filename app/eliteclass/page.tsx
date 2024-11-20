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
        <div className="min-h-full w-full h-screen bg-contain bg-no-repeat bg-center bg-[url('/images/MobileView/MobileViewBG11.png')] sm:bg-[url('/images/Homepage/HomepageBG4.png')] flex flex-col items-center justify-center px-4 sm:px-8p relative">
          {/* Container for the buttons */}
          <div className="absolute flex flex-col  
                      md:bottom-[120px] md:right-[50px] md:space-y-2 
                      text-[7px] bottom-[30px] right-[20px] space-y-1
                      lg:text-base lg:text-[15px] lg:bottom-[80px] lg:right-[160px] lg:space-y-5">
          {/* Top button */}
          <button className="bg-white text-black py-3 px-6 rounded-lg shadow-md hover:bg-gray-950 hover:text-white transition duration-300 ">
            LOOK AND LEARN HANDS-ON MASTER CLASS
          </button>

          {/* Bottom button */}
          <button className="bg-white text-black py-3 px-6 rounded-lg shadow-md hover:bg-gray-950 hover:text-white transition duration-300">
            IN-DEPTH PRIVATE ELITE CLASS
          </button>
        </div>
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
