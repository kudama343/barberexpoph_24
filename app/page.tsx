import NavigationBar from './NavigationBar';
import Image from 'next/image';

const HomePage: React.FC = () => {
  return (
    <div className="">
      <NavigationBar />

      {/* Background Section */}
      <div className="pt-10">
        
      <div className="">
        <div className="min-h-full w-full h-screen bg-contain bg-no-repeat bg-center bg-[url('/images/MobileView/MobileViewBG1.png')] sm:bg-[url('/images/Homepage/HomepageBG1.png')] flex flex-col items-center justify-center px-4 sm:px-8p">
        </div>
      </div>
    
      <div className="">
        <div className="min-h-full w-full h-screen bg-contain bg-no-repeat bg-center bg-[url('/images/MobileView/MobileViewBG2.png')] sm:bg-[url('/images/Homepage/HomepageBG2.png')] flex flex-col items-center justify-center px-4 sm:px-8p relative">
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
</div>

  </div>


  
  );
};
export default HomePage;
