import React from 'react';
import Image from 'next/image';

const WhyChooseUs: React.FC = () => {
  return (
    <div className="bg-blue-200 p-8">
      <div className="max-w-screen-lg mx-auto text-center mb-12">
        <h2 className="text-4xl text-black font-serif mb-4">Why Choose Us</h2>
      </div>

      <div className="max-w-screen-lg mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex flex-col items-center rounded-xl overflow-hidden text-left">
            <Image 
              src="/portfolio1.png" 
              alt="Portfolio 1" 
              width={500} 
              height={300} 
              className="object-cover rounded-lg" 
            />
            <h3 className="font-bold text-2xl mt-4">Trusted Experience</h3>
            <p className="mt-2 text-black text-center sm:text-left">
              We have years of experience in the property industry and have helped thousands of clients find their dream home.
            </p>
            <button className="mt-4 bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-400">
              Learn More
            </button>
          </div>

          <div className="flex flex-col items-center rounded-xl overflow-hidden text-left">
            <Image 
              src="/portfolio1.png" 
              alt="Portfolio 2" 
              width={500} 
              height={300} 
              className="object-cover rounded-lg" 
            />
            <h3 className="font-bold text-2xl mt-4">Best Quality</h3>
            <p className="mt-2 text-black text-center sm:text-left">
              Every property in our portfolio goes through rigorous selection to ensure quality and customer satisfaction.
            </p>
            <button className="mt-4 bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-400">
              Learn More
            </button>
          </div>

          <div className="flex flex-col items-center rounded-xl overflow-hidden text-left">
            <Image 
              src="/portfolio1.png" 
              alt="Portfolio 3" 
              width={500} 
              height={300} 
              className="object-cover rounded-lg" 
            />
            <h3 className="font-bold text-2xl mt-4">Personal Service</h3>
            <p className="mt-2 text-black text-center sm:text-left">
              Our team is ready to provide personal service and support you from start to finish of the process of buying or renting a property.
            </p>
            <button className="mt-4 bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-400">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
