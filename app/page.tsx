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
          
        </div>
      </div>
      <div className="">
        <div className="min-h-full w-full h-screen  flex flex-col items-center justify-center px-4 sm:px-8p relative ">
            {/* Container for the buttons */}
            <div className="absolute flex flex-col space-y-4">
              {/* Top button */}
              <button className="bg-white text-black py-5 px-10 rounded-3xl shadow-md text-xs hover:bg-gray-700 hover:text-white transition duration-300 sm:text-xl ">
                LOOK AND LEARN HANDS-ON MASTER CLASS
              </button>

              {/* Bottom button */}
              <button className="bg-white text-black py-5 px-10 rounded-3xl shadow-md text-xs hover:bg-gray-700 hover:text-white transition duration-300 sm:text-xl ">
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
