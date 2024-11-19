import NavigationBar from './NavigationBar';
import Image from 'next/image';
import Link from 'next/link';

const HomePage: React.FC = () => {
  return (
    <div>
      <NavigationBar />

      {/* Background Section */}
      <div className="min-h-screen bg-cover bg-center bg-[url('/images/Mobile/MobileView1.png')] sm:bg-[url('/images/DTView.png')] flex flex-col items-center justify-center px-4 sm:px-8">
      </div>
      
      <div className="min-h-screen bg-cover bg-center bg-[url('/images/Mobile/MobileView2.png')] sm:bg-[url('/images/DTView2.png')] flex items-center justify-center px-4 sm:px-8 relative">
        <Link
          href="/masterclass"
          className="absolute text-white bg-blue-700 
          hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 
          font-medium rounded-lg text-sm px-5 py-2.5 
          dark:bg-blue-600 dark:hover:bg-blue-700 
          focus:outline-none dark:focus:ring-blue-800 mb-4 rounded-full"
          style={{
            width: '243px',       // Custom width
            height: '35px', 
            right: '23px',
            bottom: '15px', // Move the button near the bottom of the container
            position: 'absolute',
          }}
        >
          Look and Learn Hands-on Master Class
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
