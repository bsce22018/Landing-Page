import React from 'react';
import Image from 'next/image';

const WhatTheySay: React.FC = () => {
  return (
    <div className="bg-blue-200 p-8 ">
      <div className="max-w-screen-lg mx-auto text-center mb-12">
        <h2 className="text-4xl text-black mb-4 font-serif">What They Say About Us</h2>
      </div>

      <div className="max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-3 gap-0">
        <div className="bg-white p-6 rounded-lg shadow-xl shadow-gray-500 flex flex-col items-center h-[450px] w-72">
          <div className="bg-black w-24 h-24 rounded-full overflow-hidden mb-4">
            <Image 
              src="/profile1.png" 
              alt="Customer 1" 
              width={96} 
              height={96} 
              className="object-cover" 
            />
          </div><br />
          <h3 className="text-2xl font-semibold text-black mb-2">Olivia Wilson</h3>
          <p className="text-gray-600 mb-4 text-center">
            I am very satisfied with Havenova service. They helped me find my dream home in no time
          </p><br /><br />
          <div className="flex">
            {[...Array(5)].map((_, index) => (
              <svg key={index} xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5 text-black">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
              </svg>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-xl shadow-gray-500 flex flex-col items-center h-[450px] w-72">
          <div className="bg-black w-24 h-24 rounded-full overflow-hidden mb-4">
            <Image 
              src="/profile1.png" 
              alt="Customer 2" 
              width={96} 
              height={96} 
              className="object-cover" 
            />
          </div><br />
          <h3 className="text-2xl font-semibold text-black mb-2">Reese Miller</h3>
          <p className="text-gray-600 mb-4 text-center">
            Thank you to the Havenova team for helping me find profitable property investments
          </p><br /><br />
          <div className="flex">
            {[...Array(5)].map((_, index) => (
              <svg key={index} xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5 text-black">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
              </svg>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-xl shadow-gray-500 flex flex-col items-center h-[450px] w-72">
          <div className="bg-black w-24 h-24 rounded-full overflow-hidden mb-4">
            <Image 
              src="/profile1.png" 
              alt="Customer 3" 
              width={96} 
              height={96} 
              className="object-cover" 
            />
          </div><br />
          <h3 className="text-2xl font-semibold text-black mb-2">Taylor Alonso</h3>
          <p className="text-gray-600 mb-4 text-center">
            Strategic location, complete facilities, rental always sells. Profitable investment, comfortable lifestyle
          </p><br />
          <div className="flex">
            {[...Array(5)].map((_, index) => (
              <svg key={index} xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5 text-black">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
              </svg>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatTheySay;
