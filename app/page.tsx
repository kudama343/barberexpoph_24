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
        <div className="min-h-full w-full h-screen bg-contain bg-no-repeat bg-center bg-[url('/images/MobileView/MobileViewBG2.png')] sm:bg-[url('/images/Homepage/HomepageBG2.png')] flex items-center justify-center px-4 sm:px-8">
        </div>
      </div>
  </div>
</div>

  
  );
};
export default HomePage;
