import Link from 'next/link';

const HomePage: React.FC = () => {
  return (
    <div className="">
      {/* Background Section */}
      <div className="">
        <div className="min-h-full w-full h-screen bg-contain bg-no-repeat bg-center bg-black bg-[url('/images/Homepage/MobileV1.png')] flex flex-col items-center justify-center px-1"></div>
        <div className="min-h-full w-full h-screen bg-contain bg-no-repeat bg-center bg-black bg-[url('/images/Homepage/MobileV2.png')] flex flex-col items-center justify-center px-1"></div>
        <div className="min-h-full w-full h-screen bg-contain bg-no-repeat bg-center bg-black bg-[url('/images/Homepage/MobileV3.png')] flex flex-col items-center justify-center px-1"></div>
        <div className="min-h-full w-full h-screen bg-contain bg-no-repeat bg-center bg-black bg-[url('/images/Homepage/MobileV4.png')] flex flex-col items-center justify-center px-1">
          <div className="">
            {/* Container for the buttons */}
            <div className="flex flex-col text-[7px] bottom-[30px] right-[20px] space-y-2 px-6">
              <Link
                href="/"
                className="bg-[#3a3a3a] text-white text-center py-3 px-6 rounded-lg shadow-md hover:bg-gray-950 hover:text-white transition duration-300 text-[18px] w-full max-w-[300px] mx-auto"
              >
                EXCLUSIVE WORKSHOPS:
              </Link>
              <Link
                href="/masterclass"
                className="bg-white text-black text-center py-3 px-6 rounded-2xl shadow-md hover:bg-gray-950 hover:text-white transition duration-300 font-montserrat-bold text-[18px] w-full max-w-[300px] mx-auto"
              >
                LOOK AND LEARN HANDS-ON MASTER CLASS
              </Link>
              <Link
                href="/eliteclass"
                className="bg-white text-black text-center py-3 px-6 rounded-lg shadow-md hover:bg-gray-950 hover:text-white transition duration-300 font-montserrat-bold text-[18px] w-full max-w-[300px] mx-auto"
              >
                IN-DEPTH PRIVATE ELITE CLASS
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
