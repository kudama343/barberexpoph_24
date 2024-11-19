'use client';

import NavigationBar from '../NavigationBar';
import Image from 'next/image';

const MasterClassPage: React.FC = () => {
  return (
    <div>
      <NavigationBar />

      {/* 1st BG Section */}
      <div className="min-h-screen bg-cover bg-center bg-[url('/images/Homepage2.png')] sm:bg-[url('/images/Homepage1.png')] flex flex-col items-center justify-center px-4 sm:px-8">

      </div>
      
       {/* 2nd BG Section */}
      <div className="min-h-screen bg-cover bg-center bg-[url('/images/Homepage4.png')] sm:bg-[url('/images/Homepage3.png')] flex items-center justify-center px-4 sm:px-8">
  
      </div>


    </div>

      
    
    
  );
};


export default MasterClassPage;
