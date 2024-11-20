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
        <div className="min-h-full w-full h-screen bg-contain bg-no-repeat bg-center bg-[url('/images/MobileView/MobileViewBG7.png')] sm:bg-[url('/images/MasterClass/MasterClassBG5.png')] flex items-center justify-center px-4 sm:px-8">
        </div>
      </div>
      <div className="">
        <div className="min-h-full w-full h-screen bg-contain bg-no-repeat bg-center bg-[url('/images/MobileView/MobileViewBG8.png')] sm:bg-[url('/images/MasterClass/MasterClassBG6.png')] flex items-center justify-center px-4 sm:px-8">
        </div>
      </div>
    </div>
  );
};

export default MasterClassPage;
