import NavigationBar from './NavigationBar';
import Image from 'next/image';

const HomePage: React.FC = () => {
  return (
    <div>
      <NavigationBar />

      {/* Background Section */}
      <div className="min-h-screen bg-cover bg-center bg-[url('/images/Homepage2.png')] sm:bg-[url('/images/Homepage1.png')] flex flex-col items-center justify-center px-4 sm:px-8">
        
        {/* Title Section */}
        <div className="text-center mt-20">
          <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold text-white p-8 animate-pulse glow">
            EXCLUSIVE BARBER WORKSHOP SERIES
          </h1>
        </div>


        {/* Subtitle Section */}
        <div className="text-center">
          <h3 className="text-lg sm:text-2xl lg:text-5xl text-white">
            I N N O V A T E &nbsp; | &nbsp; E L E V A T E
          </h3>
        </div>

        {/* Footer Section */}
        <div className="flex flex-wrap justify-center gap-6 mt-10">
          {/* First Image */}
          <div className="relative w-40 h-40 mt-3 sm:w-60 sm:h-60 lg:w-80 lg:h-80">
            <Image 
              src="/images/menspirenobg.png" 
              alt="MenSpire" 
              layout="fill" 
              objectFit="contain" 
              className=""
            />
          </div>

          {/* Second Image */}
          <div className="relative w-40 h-40 sm:w-60 sm:h-60 lg:w-80 lg:h-80">
            <Image 
              src="/images/barberexponobg.png" 
              alt="Barber Expo" 
              layout="fill" 
              objectFit="contain" 
              className=""
            />
          </div>
        </div>
      </div>
      
      <div className="min-h-screen bg-cover bg-center bg-[url('/images/Homepage4.png')] sm:bg-[url('/images/Homepage3.png')] flex items-center justify-center px-4 sm:px-8">
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-7xl">

    {/* Left Section */}
    <div className="text-center mt-20 flex flex-col justify-center items-center">
      <div className="mb-50"></div>
      <h2 className="text-4xl sm:text-6xl lg:text-8xl font-bold text-white p-8 animate-pulse glow ">
        WHO IS
      </h2>
      <h1 className="text-2xl sm:text-6xl lg:text-8xl font-bold text-white p-8 animate-pulse glow">
        SEAN MOORE
      </h1>
      <div className=" mt-50 "></div>
    </div>

    {/* Right Section */}
    <div className="text-center flex flex-col justify-center items-center">
      <h3 className="text-lg sm:text-2xl lg:text-5xl text-white">
        HIGH PROFILE INTERNATIONAL EDUCATOR
      </h3>
      <h3 className="text-lg sm:text-2xl lg:text-5xl text-white mt-4">
        MANAGING DIRECTOR OF
      </h3>
      <div className="relative w-40 h-40 mt-6 sm:w-60 sm:h-60 lg:w-80 lg:h-80">
        <Image 
          src="/images/menspirenobg.png" 
          alt="MenSpire" 
          layout="fill" 
          objectFit="contain" 
          className="rounded-md shadow-lg"
        />
      </div>
      <h5 className="text-lg sm:text-2xl lg:text-5xl text-white mt-6 text-center px-4">
        THE HOME OF EDUCATION IN MENS HAIRDRESSING & BARBERING
      </h5>
    </div>

  </div>
</div>

      
      </div>
    
  );
};

export default HomePage;
