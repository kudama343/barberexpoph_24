import Link from 'next/link';

const HomePage: React.FC = () => {
  return (
    <div className="">
      {/* Background Section */}
      <div className="">
        <div className="min-h-full w-full h-screen sm:bg-contain bg-cover bg-no-repeat bg-center bg-black bg-[url('/images/Homepage/MobileV1.png')] flex flex-col items-center justify-center px-1"></div>
        <div className="min-h-full w-full h-screen sm:bg-contain bg-cover bg-no-repeat bg-center bg-black bg-[url('/images/Homepage/MobileV2.png')] flex flex-col items-center justify-center px-1"></div>
        <div className="min-h-full w-full h-screen sm:bg-contain bg-cover bg-no-repeat bg-center bg-black bg-[url('/images/Homepage/MobileV3.png')] flex flex-col items-center justify-center px-1"></div>
        <div className="min-h-full w-full h-screen sm:bg-contain bg-cover bg-no-repeat bg-center bg-black bg-[url('/images/Homepage/MobileV5_2.png')] flex flex-col items-center justify-center px-1">
          <div className="">
            {/* Container for the buttons */}
            <div className="flex flex-col items-center space-y-4" style={{ marginTop: '117px' }}>
  <Link
    href="/"
    className="bg-[#3a3a3a] text-white text-center py-3 px-6 rounded-3xl shadow-md hover:bg-gray-950 hover:text-white transition duration-300"
    style={{ width: '456px', height: '62px', letterSpacing: '4px', fontSize: '25px' }}
  >
    EXCLUSIVE WORKSHOPS:
  </Link>
  <Link
    href="/masterclass"
    className="bg-white text-black text-center py-1 px-6 rounded-3xl shadow-md hover:bg-gray-950 hover:text-white transition duration-300 font-montserrat-bold "
    style={{ width: '456px', height: '62px', letterSpacing: '1px', fontSize: '20px' }}
  >
    LOOK AND LEARN HANDS-ON MASTER CLASS
  </Link>
  <Link
    href="/eliteclass"
    className="bg-white text-black text-center py-3 px-6 rounded-3xl shadow-md hover:bg-gray-950 hover:text-white transition duration-300 font-montserrat-bold"
    style={{ width: '456px', height: '62px', letterSpacing: '1px', fontSize: '20px' }}
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
