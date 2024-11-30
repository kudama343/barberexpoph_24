'use client';
const EliteClassPage: React.FC = () => {
  const redirectToForm = () => {
    window.location.href =
      'https://docs.google.com/forms/d/e/1FAIpQLScSlhpxJU8wYOoKGzivK29vQaOdqmVR4eNL7fNlX4ex7GcP6A/viewform';
  };

  return (
    <div className="flex flex-col">
      <div className="min-h-full w-full h-screen bg-cover bg-no-repeat bg-center bg-black bg-[url('/images/EliteClass/MobileV14.png')] flex flex-col items-center justify-center px-0 sm:px-4"></div>
      <div className="min-h-full w-full h-screen bg-cover bg-no-repeat bg-center bg-black bg-[url('/images/EliteClass/MobileV15.png')] flex flex-col items-center justify-center px-0 sm:px-4"></div>
      <div className="min-h-full w-full h-screen bg-cover bg-no-repeat bg-center bg-black bg-[url('/images/EliteClass/MobileV16.png')] flex flex-col items-center justify-center px-0 sm:px-4"></div>
      <div className="min-h-full w-full h-screen bg-cover bg-no-repeat bg-center bg-black bg-[url('/images/EliteClass/MobileV17.png')] flex flex-col items-center justify-center px-0 sm:px-4"></div>
      <div className="min-h-full w-full h-screen bg-cover bg-no-repeat bg-center bg-black bg-[url('/images/EliteClass/MobileV18.png')] flex flex-col items-center justify-center px-0 sm:px-4"></div>
      <div className="min-h-full w-full h-screen bg-cover bg-no-repeat bg-center bg-black bg-[url('/images/EliteClass/MobileV19.png')] flex flex-col items-center justify-center px-0 sm:px-4"></div>
      <div className="min-h-full w-full h-screen bg-cover bg-no-repeat bg-center bg-black bg-[url('/images/EliteClass/MobileV20.png')] flex flex-col items-center justify-center px-0 sm:px-4"></div>
      <div className="min-h-full w-full h-screen bg-cover bg-no-repeat bg-center bg-black bg-[url('/images/EliteClass/MobileV22_2.png')] flex flex-col items-center px-0 sm:px-4 relative">
      <button
          onClick={redirectToForm}
          className="absolute mr-2  left-1/2 transform -translate-x-1/2 bottom-[31%] bg-white text-black 
                      py-1 rounded-2xl shadow-md hover:bg-[#3a3a3a] hover:text-white transition duration-300 
                      font-monument text-2xl"
          style={{ width: '285px', height: '42px' }}>
          ENROLL HERE
        </button>
      </div>
    </div>
  );
};

export default EliteClassPage;
