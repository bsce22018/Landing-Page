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
        
        <div className="container mx-auto h-full py-10 items-center justify-center relative text-black font-serif text-center px-4">
          <div>
            <h1 className="text-5xl mb-4">
              The <span className="text-orange-500">Solution</span> to Finding Your
              <br />
              Dream Home is <span className="text-orange-500">Here</span>
            </h1><br /><br />

            <p className="mb-8 font-sans">We help you find your dream home</p>
          </div>
        </div>

        <PropertyFilter />
      </section>
    </div>
  );
};

export default Home;
