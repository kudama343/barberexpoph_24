import NavigationBar from './NavigationBar';
import Link from 'next/link';

const HomePage: React.FC = () => {
  return (
    <div className="">
   

      {/* Background Section */}
      <div className="">
        
      
        <div className="min-h-full w-full h-screen bg-cover bg-no-repeat bg-center bg-[url('/images/Homepage/MobileV1.png')] sm:bg-[url('/images/Homepage/HomepageBG1.png')] flex flex-col items-center justify-center px-1 sm:px-8p">
        </div>
        <div className="min-h-full w-full h-screen bg-cover bg-no-repeat bg-center bg-[url('/images/Homepage/MobileV2.png')] sm:bg-[url('/images/Homepage/HomepageBG1.png')] flex flex-col items-center justify-center px-1 sm:px-8p">
        </div>
        <div className="min-h-full w-full h-screen bg-cover bg-no-repeat bg-center bg-[url('/images/Homepage/MobileV3.png')] sm:bg-[url('/images/Homepage/HomepageBG1.png')] flex flex-col items-center justify-center px-1 sm:px-8p">
        </div>
        <div className="min-h-full w-full h-screen bg-cover bg-no-repeat bg-center bg-[url('/images/Homepage/MobileV4.png')] sm:bg-[url('/images/Homepage/HomepageBG1.png')] flex flex-col items-center justify-center px-1 sm:px-8p">
        </div>
      
    
      <div className="">
        
          {/* Container for the buttons */}
          <div className="absolute flex flex-col  
                      md:bottom-[120px] md:right-[50px] md:space-y-2 
                      text-[7px] bottom-[30px] right-[20px] space-y-1
                      lg:text-base lg:text-[15px] lg:bottom-[80px] lg:right-[160px] lg:space-y-5">
       
            <Link
              href="/masterclass"
              className="bg-white text-black text-center py-3 px-6 rounded-lg shadow-md hover:bg-gray-950 hover:text-white transition duration-300"
            >LOOK AND LEARN HANDS-ON MASTER CLASS</Link>


         
            <Link
              href="/eliteclass"
              className="bg-white text-black text-center py-3 px-6 rounded-lg shadow-md hover:bg-gray-950 hover:text-white transition duration-300"
            >IN-DEPTH PRIVATE ELITE CLASS</Link>
     
        
      </div>
  </div>
</div>

  </div>


  
  );
};
export default HomePage;