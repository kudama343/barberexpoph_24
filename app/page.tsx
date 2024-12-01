import Link from 'next/link';

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col">
      <div className="min-h-full w-full h-screen sm:bg-contain bg-cover bg-no-repeat bg-center bg-black bg-[url('/images/Homepage/MobileV1.png')] flex flex-col items-center justify-center px-1"></div>
      <div className="min-h-full w-full h-screen sm:bg-contain bg-cover bg-no-repeat bg-center bg-black bg-[url('/images/Homepage/MobileV2.png')] flex flex-col items-center justify-center px-1"></div>
      <div className="min-h-full w-full h-screen sm:bg-contain bg-cover bg-no-repeat bg-center bg-black bg-[url('/images/Homepage/MobileV3.png')] flex flex-col items-center justify-center px-1"></div>
      <div className="min-h-full w-full h-screen sm:bg-contain bg-cover bg-no-repeat bg-center bg-black bg-[url('/images/Homepage/MobileV5_2.png')] flex flex-col items-center justify-center px-1 relative">
        <Link
          href="/"
          className="absolute left-1/2 transform -translate-x-1/2 bottom-[48%] bg-[#3a3a3a] text-white 
                      py-4 rounded-3xl shadow-md hover:bg-gray-950 hover:text-white transition duration-300 
                      text-lg w-[395px] h-[62px] text-center "
          style={{ letterSpacing: '4px', fontSize: '22px' }}
        >
          EXCLUSIVE WORKSHOPS:
        </Link>
        <Link
          href="/masterclass"
          className="absolute left-1/2 transform -translate-x-1/2 bottom-[38%] bg-white text-black 
                      py-1 rounded-3xl shadow-md hover:bg-gray-950 hover:text-white transition duration-300 
                      font-montserrat-bold text-lg text-center"
          style={{ width: '395px', height: '62px', letterSpacing: '1px', fontSize:'18px'}}
        >
          LOOK AND LEARN HANDS-ON MASTER CLASS
        </Link>
        <Link
          href="/eliteclass"
          className="absolute left-1/2 transform -translate-x-1/2 bottom-[28%] bg-white text-black 
                      py-4 rounded-3xl shadow-md hover:bg-gray-950 hover:text-white transition duration-300 font-montserrat-bold 
                      text-lg w-[395px] h-[62px] text-center"
          style={{ letterSpacing: '1px', fontSize: '18px' }}
        >
          IN-DEPTH PRIVATE ELITE CLASS
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
