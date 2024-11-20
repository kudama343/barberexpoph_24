'use client';

import NavigationBar from '../NavigationBar';
import Image from 'next/image';

const MasterClassPage: React.FC = () => {
  return (
    <div>
      <NavigationBar />
      <div className="pt-10">
        <div className="min-h-full w-full h-screen bg-contain bg-no-repeat bg-center bg-[url('/images/MobileView/MobileViewBG3.png')] sm:bg-[url('/images/MasterClass/MasterClassBG1.png')] flex flex-col items-center justify-center px-4 sm:px-8p">
        </div>
      </div>
      <div className="">
        <div className="min-h-full w-full h-screen bg-contain bg-no-repeat bg-center bg-[url('/images/MobileView/MobileViewBG4.png')] sm:bg-[url('/images/MasterClass/MasterClassBG2.png')] flex items-center justify-center px-4 sm:px-8">
        </div>
      </div>
      <div className="">
        <div className="min-h-full w-full h-screen bg-contain bg-no-repeat bg-center bg-[url('/images/MobileView/MobileViewBG5.png')] sm:bg-[url('/images/MasterClass/MasterClassBG3.png')] flex items-center justify-center px-4 sm:px-8">
        </div>
      </div>
      <div className="">
        <div className="min-h-full w-full h-screen bg-contain bg-no-repeat bg-center bg-[url('/images/MobileView/MobileViewBG6.png')] sm:bg-[url('/images/MasterClass/MasterClassBG4.png')] flex items-center justify-center px-4 sm:px-8">
        </div>
      </div>
      <div className="">
        <div className="min-h-full w-full h-screen bg-contain bg-no-repeat bg-center bg-[url('/images/MobileView/MobileViewBG7.png')] 
                        sm:bg-[url('/images/MasterClass/MasterClassBG5.png')] flex items-center justify-center px-4 sm:px-8">
            <div className="absolute flex flex-col  
                    md:bottom-[120px] md:right-[50px] md:space-y-2 
                    text-[7px] bottom-[30px] right-[20px] space-y-1
                    lg:text-base lg:text-[15px] lg:bottom-[80px] lg:right-[160px] lg:space-y-5">
            <button className="bg-white text-black py-3 px-6 rounded-lg shadow-md hover:bg-gray-950 hover:text-white transition duration-300 ">
              ENROLL HERE
            </button>
            </div>
        </div>
      </div>
      <div className="">
        <div className="min-h-full w-full h-screen bg-contain bg-no-repeat bg-center bg-[url('/images/MobileView/MobileViewBG8.png')] sm:bg-[url('/images/MasterClass/MasterClassBG6.png')] flex items-center justify-center px-4 sm:px-8">
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

export default MasterClassPage;
