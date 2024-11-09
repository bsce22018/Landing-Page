import React from 'react';
import Image from 'next/image';

const WhyChooseUs: React.FC = () => {
  return (
    <div className="bg-blue-200 p-8 ">
      <div className="max-w-screen-lg mx-auto text-center mb-12">
        <h2 className="text-4xl text-black font-serif mb-4">Why Choose Us</h2>
      </div>

      <div className="max-w-screen-lg mx-auto">
        <div className="flex justify-center items-center gap-8">
          <div className="flex flex-col items-center rounded-xl overflow-hidden text-left">
            <Image 
              src="/portfolio1.png" 
              alt="Portfolio 1" 
              width={500} 
              height={300} 
              className="object-cover rounded-lg" 
            /><br />
            <h1 className="font-bold text-2xl">Trusted Experience</h1>
            <p className="mt-2 text-black">
              We have years of experience in the property<br />
              industry and have helped thousands of <br />
              clients find their dream home
            </p>
          </div>

          <div className="flex flex-col items-center rounded-xl overflow-hidden">
            <Image 
              src="/portfolio1.png" 
              alt="Portfolio 2" 
              width={500} 
              height={300} 
              className="object-cover rounded-lg" 
            /><br />
            <h1 className="font-bold text-2xl">Best Quality</h1>
            <p className="mt-2 text-black">
              Every property in our portfolio goes <br />
              through rigorous selection<br />
              to ensure quality and customer satisfaction
            </p>
          </div>

          <div className="flex flex-col items-center rounded-xl overflow-hidden">
            <Image 
              src="/portfolio1.png" 
              alt="Portfolio 3" 
              width={500} 
              height={300} 
              className="object-cover rounded-lg" 
            /><br />
            <h1 className="font-bold text-2xl">Personal Service</h1>
            <p className="mt-2 text-black">
              Our team is ready to provide personal<br />
              service and support you from start to finish  <br />
              of the process of buying or renting a property
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
