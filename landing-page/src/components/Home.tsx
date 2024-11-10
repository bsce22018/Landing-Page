import React from 'react';  
import PropertyFilter from './PropertyFilter';

const Home: React.FC = () => {
  return (
    <div className="relative">
      
      <section
        className="relative w-full h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/background.png')" }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
        
        <div className="container mx-auto h-full py-10 flex flex-col items-center justify-center relative text-black font-serif text-center px-4">
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4">
              The <span className="text-orange-500">Solution</span> to Finding Your
              <br />
              Dream Home is <span className="text-orange-500">Here</span>
            </h1>
            <p className="mb-8 font-sans text-sm sm:text-base md:text-lg">
              We help you find your dream home
            </p>
          </div>
        </div>
      </section>

      <div>
      <PropertyFilter />
      </div>
    </div>
  );
};

export default Home;
